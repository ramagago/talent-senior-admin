import {
  Admin,
  Layout,
  ListGuesser,
  Resource,
  ShowGuesser,
  defaultTheme,
} from "react-admin";
import dataProvider from "./dataProvider";
import { authProvider } from "./authProvider";
import { PersonList, PersonShow } from "./person";
import { CompanyList, CompanyShow } from "./components/Companies";
import MyLoginPage from "./components/LoginPage";
import PeopleIcon from "@mui/icons-material/People";
import { MyMenu } from "./components/MyMenu";
import MyLayout from "./MyLayout";

export const App = () => {
  return (
    <Admin
      dataProvider={dataProvider}
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
