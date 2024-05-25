import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useListContext } from "react-admin";

export default function IndeterminateCheckbox({
  filterItems,
  title,
  categoryId,
}) {
  const { filterValues, setFilters } = useListContext();
  const localFilters = new Set(filterValues?.[categoryId]);

  const onChange = (item: string) => {
    if (!localFilters.has(item)) localFilters.add(item);
    else localFilters.delete(item);
    setFilters(
      {
        ...filterValues,
        [categoryId]: Array.from(localFilters),
      },
      undefined,
      false
    );
  };

  const children = (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        ml: 3,
        boxShadow: "none",
        border: "none",
      }}
    >
      {filterItems?.map((item) => (
        <FormControlLabel
          key={item.value}
          label={item.label}
          control={
            <Checkbox
              checked={localFilters.has(item.value)}
              onChange={() => onChange(item.value)}
            />
          }
        />
      ))}
    </Box>
  );

  return (
    <Accordion sx={{ marginY: "8px", boxShadow: "none" }} disableGutters={true}>
      <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        {title}
      </AccordionSummary>
      <AccordionDetails>
        <div>{children}</div>
      </AccordionDetails>
    </Accordion>
  );
}
