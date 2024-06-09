import { Button, FilterLiveSearch, SET_FILTER } from "react-admin";
import { Card, CardContent } from "@mui/material";
import { useListContext } from "react-admin";
import Dropdown from "./Dropdown";
import Slider from "./Slider";

const countyPD = [
  { label: "Montevideo", value: "MONTEVIDEO" },
  { label: "Canelones", value: "CANELONES" },
  { label: "Maldonado", value: "MALDONADO" },
  { label: "Rocha", value: "ROCHA" },
  { label: "Artigas", value: "ARTIGAS" },
  { label: "Salto", value: "SALTO" },
  { label: "Paysandú", value: "PAYSANDU" },
  { label: "Rivera", value: "RIVERA" },
  { label: "Río Negro", value: "RIO NEGRO" },
  { label: "Tacuarembó", value: "TACUAREMBO" },
  { label: "Treinta y Tres", value: "TREINTA Y TRES" },
  { label: "Lavalleja", value: "LAVALLEJA" },
  { label: "Cerro Largo", value: "CERRO LARGO" },
  { label: "Florida", value: "FLORIDA" },
  { label: "Flores", value: "FLORES" },
  { label: "Durazno", value: "DURAZNO" },
  { label: "Colonia", value: "COLONIA" },
  { label: "San José", value: "SAN JOSE" },
  { label: "Soriano", value: "SORIANO" },
  { label: "Exterior", value: "liveAbroad" },
];

const workField = [
  {
    value: "agro",
    label: "Agro, Forestal y otros.",
  },
  {
    value: "comercio",
    label: "Comercio, Retail y Servicios.",
  },
  {
    value: "comunicacion",
    label: "Comunicaciones, Publicidad.",
  },
  {
    value: "construccion",
    label: "Construcción y afines.",
  },
  {
    value: "entretenimiento",
    label: "Entretenimiento, Deporte y Cultura.",
  },
  {
    value: "industria",
    label: "Industria, Distribución.",
  },
  {
    value: "devops",
    label: "Servicio Consultoría, Educación y afines.",
  },
  {
    value: "salud",
    label: "Servicio de Salud.",
  },
  {
    value: "correo",
    label: "Servicios de Correos, Logística y afines.",
  },
  {
    value: "finanzas",
    label: "Servicios Financieros.",
  },
  {
    value: "gastronomia",
    label: "Gastronomía, Hotelería, Transporte.",
  },
  {
    value: "turismo",
    label: "Turismo.",
  },
  {
    value: "vigilancia",
    label: "Vigilancia y limpieza.",
  },
  {
    value: "tecnologia",
    label: "Telecomunicaciones y Tecnología.",
  },
  {
    value: "otros",
    label: "Otros.",
  },
];

const levelOfStudy = [
  {
    value: "secundario",
    label: "Secundario",
  },
  {
    value: "gradoTerciario",
    label: "Terciario",
  },
  {
    value: "posgrado",
    label: "Posgrado",
  },
];
const gender = [
  {
    value: "masculino",
    label: "Masculino",
  },
  {
    value: "femenino",
    label: "Femenino",
  },
  {
    value: "noGenero",
    label: "Prefiero no responder",
  },
];
const languageName = [
  {
    value: "english",
    label: "Inglés",
  },
  {
    value: "portuges",
    label: "Portugés",
  },
  {
    value: "italian",
    label: "Italiano",
  },
  {
    value: "german",
    label: "Alemán",
  },
  {
    value: "french",
    label: "Francés",
  },
  {
    value: "none",
    label: "Ninguno",
  },
];

const positionLevel = [
  {
    value: "empleado",
    label: "Empleado",
  },
  {
    value: "jefe",
    label: "Jefe",
  },
  {
    value: "gerente",
    label: "Gerente",
  },
  {
    value: "director",
    label: "Director",
  },
  {
    value: "dueño",
    label: "Dueño",
  },
];

export const PersonFilterSideBar = () => {
  const { displayedFilters, setFilters } = useListContext();

  if (!displayedFilters.main) return;

  return (
    <>
      <Card sx={{ order: -1, mr: 2, mt: 9, width: 300 }}>
        <CardContent>
          <FilterLiveSearch source="search" label="Search" />
          <Dropdown
            filterItems={levelOfStudy}
            title="Nivel de Estudios"
            categoryId="levelOfStudy"
          />
          <Dropdown
            filterItems={positionLevel}
            title="Nivel Jerárquico"
            categoryId="positionLevel"
          />
          <Dropdown
            filterItems={countyPD}
            title="Locación"
            categoryId="countyPD"
          />
          <Dropdown
            filterItems={workField}
            title="Rubro o Área"
            categoryId="workField"
          />
          <Dropdown
            filterItems={languageName}
            title="Idiomas"
            categoryId="languageName"
          />
          <Dropdown filterItems={gender} title="Género" categoryId="gender" />
          <Slider
            title="Edad"
            label="Age range"
            min={18}
            max={80}
            defaultValue={[18, 80]}
          />
          <Button onClick={() => setFilters({}, undefined, false)}>
            <>Limpiar Filtros</>
          </Button>
        </CardContent>
      </Card>
    </>
  );
};
