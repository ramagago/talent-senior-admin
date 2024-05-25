import Box from "@mui/material/Box";
import { useListContext } from "react-admin";
import Slider from "@mui/material/Slider";

export default function SliderSizes({ title, label, min, max, defaultValue }) {
  const { filterValues, setFilters } = useListContext();
  const handleChange = (e) => {
    const ageMin = e.target.value[0];
    const ageMax = e.target.value[1];
    setFilters(
      { ...filterValues, ageMin: ageMin, ageMax: ageMax },
      undefined,
      true
    );
  };

  const marks = [
    {
      value: min,
      label: min.toString(),
    },
    {
      value: max,
      label: max.toString(),
    },
  ];

  return (
    <Box sx={{ width: 300, boxShadow: "none" }}>
      <p>{title}</p>
      <Slider
        sx={{ width: "200px" }}
        getAriaLabel={() => label}
        size="small"
        defaultValue={defaultValue}
        valueLabelDisplay="auto"
        min={min}
        max={max}
        onChange={handleChange}
        marks={marks}
      />
    </Box>
  );
}
