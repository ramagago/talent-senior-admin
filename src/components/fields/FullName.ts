import { useRecordContext } from "react-admin";

const FullName = () => {
  const { name, surname, ...rest } = useRecordContext();
  return `${name} ${surname}`;
};

export default FullName;
