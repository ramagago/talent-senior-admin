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
} from "react-admin";
import { useMediaQuery, Theme, Grid } from "@mui/material";
import { PersonFilterButton } from "./components/PersonFilterButton";
import { PersonFilterSideBar } from "./components/PersonFilterSideBar";
import Age from "./components/fields/Age";

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
        <Datagrid rowClick="show" bulkActionButtons={false}>
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

      <ArrayField source="references">
        <Datagrid bulkActionButtons={false}>
          <TextField source="referenceName" />
          <TextField source="referenceSurname" />
          <TextField source="referencePhone" />
          <TextField source="referenceCompany" />
          <TextField source="referenceRole" />
          <TextField source="referenceType" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="studies">
        <Datagrid bulkActionButtons={false}>
          <TextField source="level" />
          <TextField source="title" />
          <TextField source="institute" />
          <TextField source="fieldOfStudy" />
          <DateField source="startStudyDate" />
          <BooleanField source="currentlyStudying" />
          <TextField source="cityStudy" />
          <TextField source="countyStudy" />
          <DateField source="endStudyDate" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="workExperiences">
        <Datagrid bulkActionButtons={false}>
          <TextField source="role" />
          <TextField source="company" />
          <TextField source="workField" />
          <TextField source="positionLevel" />
          <TextField source="peopleInCharge" />
          <BooleanField source="currentlyWorking" />
          <TextField source="skills" />
          <DateField source="endWorkDate" />
          <TextField source="salary" />
          <ArrayField source="skills" />
          <DateField source="startWorkDate" />
          <TextField source="task" />
        </Datagrid>
      </ArrayField>
      <ArrayField source="languages">
        <Datagrid bulkActionButtons={false}>
          <TextField source="languageName" />
          <NumberField source="spokenLevel" />
          <NumberField source="readLevel" />
          <NumberField source="writtenLevel" />
        </Datagrid>
      </ArrayField>
    </SimpleShowLayout>
  </Show>
);
