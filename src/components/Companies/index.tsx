import {
  Datagrid,
  List,
  SimpleList,
  TextField,
  Show,
  SimpleShowLayout,
  EmailField,
  UrlField,
  TextInput,
  BulkDeleteButton,
} from "react-admin";
import { useMediaQuery, Theme } from "@mui/material";

const postFilters = [<TextInput label="Search" source="q" alwaysOn />];

export const CompanyList = () => {
  const isSmall = useMediaQuery<Theme>((theme) => theme.breakpoints.down("md"));

  return (
    <List filters={postFilters}>
      {isSmall ? (
        <SimpleList
          primaryText={(record) => record.companyName}
          secondaryText={(record) => record.name + " " + record.surname}
          tertiaryText={(record) => record.companyWebsite}
        />
      ) : (
        <Datagrid
          rowClick="show"
          bulkActionButtons={<BulkDeleteButton mutationMode="pessimistic" />}
        >
          <TextField source="companyName" label="Empresa" />
          <TextField source="name" label="Nombre" />
          <TextField source="surname" label="Apellido" />
          <TextField source="companyEmail" label="Email" />
          <TextField source="companyPhone" label="Teléfono" />
          <TextField source="companyWebsite" label="Sitio web" />
        </Datagrid>
      )}
    </List>
  );
};

export const CompanyShow = () => (
  <Show>
    <SimpleShowLayout>
      <TextField source="companyName" label="Empresa" />
      <TextField source="name" label="Nombre" />
      <TextField source="surname" label="Apellido" />
      <EmailField source="companyEmail" label="Email de contacto" />
      <TextField source="companyPhone" label="Teléfono de contacto" />
      <UrlField source="companyWebsite" label="Sitio Web" />
      <TextField source="howCanWeHelp" label="¿Cómo podemos ayudarte?" />
    </SimpleShowLayout>
  </Show>
);
