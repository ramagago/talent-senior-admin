import { useRecordContext } from "react-admin";
import { TextField } from "react-admin";

const Age = (props) => {
  const { birthday } = useRecordContext(props);
  const birthDate = new Date(birthday);
  const currentDate = new Date();

  // Calcular la diferencia de años
  let age = currentDate.getFullYear() - birthDate.getFullYear();

  // Ajustar la edad si el cumpleaños aún no ha pasado este año
  if (
    currentDate.getMonth() < birthDate.getMonth() ||
    (currentDate.getMonth() === birthDate.getMonth() &&
      currentDate.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return `${age} años`;
};

export default Age;
