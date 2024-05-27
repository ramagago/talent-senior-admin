import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./dataProvider";
import { authProvider } from "./authProvider";
import { PersonList, PersonShow } from "./person";
import { CompanyList, CompanyShow } from "./components/Companies";
import MyLoginPage from "./components/LoginPage";
import PeopleIcon from "@mui/icons-material/People";

export const App = () => {
  return (
    <Admin
      dataProvider={dataProvider as unknown as DataProvider}
      authProvider={authProvider}
      loginPage={MyLoginPage}
    >
      <Resource
        name="person"
        list={PersonList}
        show={PersonShow}
        icon={PeopleIcon}
      />
      <Resource name="companies" list={CompanyList} show={CompanyShow} />
    </Admin>
  );
};
