import {
  ArrayField,
  ChipField,
  Datagrid,
  DateField,
  EmailField,
  List,
  SingleFieldList,
  TextField,
  BooleanField,
  NumberField,
  Show,
  SimpleShowLayout,
  SimpleList,
  TopToolbar,
  ExportButton,
  BulkDeleteButton,
} from "react-admin";
import { useMediaQuery, Theme, Grid } from "@mui/material";
import { PersonFilterButton } from "../PersonFilterButton";
import { PersonFilterSideBar } from "../PersonFilterSideBar";
import Age from "../fields/Age";

export const PersonList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));
  const isMedium = useMediaQuery<Theme>((theme) =>
    theme.breakpoints.down("lg")
  );

  const ListActions = () => (
    <TopToolbar>
      <PersonFilterButton />
      <ExportButton />
    </TopToolbar>
  );

  return (
    <List aside={<PersonFilterSideBar />} actions={<ListActions />}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => {
            return record.name + " " + record.surname;
          }}
          secondaryText={(record) =>
            record.studies[0] ? record.studies[0].title : ""
          }
          tertiaryText={(record) =>
            record.workExperiences[0] ? record.workExperiences[0].role : ""
          }
        />
      ) : (
        <Datagrid
          rowClick="show"
          bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
        >
          <TextField source="name" label="Nombre" />
          <TextField source="surname" label="Apellido" />
          {isMedium ? <></> : <Age label="Edad" sortBy="birthday" />}
          {isMedium ? <></> : <TextField source="cityPD" label="Ciudad" />}

          <ArrayField source="studies" sortable={false} label="Título">
            <SingleFieldList>
              <ChipField source="title" />
            </SingleFieldList>
          </ArrayField>
          <ArrayField source="workExperiences" sortable={false} label="Cargo">
            <SingleFieldList>
              <ChipField source="role" />
            </SingleFieldList>
          </ArrayField>
          <ArrayField source="languages" sortable={false} label="Idiomas">
            <SingleFieldList>
              <ChipField source="languageName" />
            </SingleFieldList>
          </ArrayField>
        </Datagrid>
      )}
    </List>
  );
};

export const PersonShow = () => (
  <Show>
    <SimpleShowLayout>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <SimpleShowLayout>
            <TextField source="dni" label="Tipo de Documento" />
            <TextField source="dniNumber" label="Número de Documento" />
            <DateField source="birthday" labe="Fecha de Nacimiento" />
            <TextField source="name" label="Nombre" />
            <TextField source="surname" label="Apellido" />
          </SimpleShowLayout>
        </Grid>
        <Grid item xs={6}>
          <SimpleShowLayout>
            <TextField source="about" label="Sobre mí" />
            <TextField source="address" label="Dirección" />
            <TextField source="cp" label="Código Postal" />
            <EmailField source="email" label="Correo electrónico" />
            <TextField source="phone" label="Teléfono" />
            <TextField source="countyPD" label="Departamento" />
            <TextField source="cityPD" label="Ciudad" />
            <TextField source="gender" label="Género" />
          </SimpleShowLayout>
        </Grid>
      </Grid>

      <ArrayField source="references" label="Referencias">
        <Datagrid bulkActionButtons={false}>
          <TextField source="referenceName" label="Nombre" />
          <TextField source="referenceSurname" label="Apellido" />
          <TextField source="referencePhone" label="Teléfono" />
          <TextField source="referenceCompany" label="Empresa" />
          <TextField source="referenceRole" label="Cargo" />
          <TextField source="referenceType" label="Tipo de referencia" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="studies" label="Estudios">
        <Datagrid bulkActionButtons={false}>
          <TextField source="level" label="Nivel de estudios" />
          <TextField source="title" label="Título" />
          <TextField source="institute" label="Instituto" />
          <TextField source="fieldOfStudy" label="Área de estudio" />
          <DateField source="startStudyDate" label="Fecha de inicio" />
          <BooleanField
            source="currentlyStudying"
            label="Actualmente estudiando"
          />
          <TextField source="cityStudy" label="Ciudad" />
          <TextField source="countyStudy" label="Departamento" />
          <DateField source="endStudyDate" label="Fecha de finalización" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="workExperiences" label="Experiencia laboral">
        <Datagrid bulkActionButtons={false}>
          <TextField source="role" label="Cargo" />
          <TextField source="company" label="Empresa" />
          <TextField source="workField" label="Rubro" />
          <TextField source="positionLevel" label="Cargo" />
          <TextField source="peopleInCharge" label="Personas a cargo" />
          <BooleanField
            source="currentlyWorking"
            label="Actualmente trabajando"
          />
          <TextField source="skills" label="Conocimientos" />

          <TextField source="salary" label="Salario" />
          <DateField source="startWorkDate" label="Fecha de inicio" />
          <DateField source="endWorkDate" label="Fecha de finalización" />
          <TextField source="task" label="Tareas" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="languages" label="Idiomas">
        <Datagrid bulkActionButtons={false}>
          <TextField source="languageName" label="Idioma" />
          <NumberField source="spokenLevel" label="Nivel oral" />
          <NumberField source="readLevel" label="Nivel de lectura" />
          <NumberField source="writtenLevel" label="Nivel escrito" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
