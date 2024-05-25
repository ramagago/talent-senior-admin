import { useListContext } from "react-admin";
import { Button } from "@mui/material";
import ContentFilter from "@mui/icons-material/FilterList";

export const PersonFilterButton = () => {
  const { showFilter, displayedFilters, hideFilter } = useListContext();
  return (
    <Button
      size="small"
      color="primary"
      onClick={() =>
        displayedFilters?.main ? hideFilter("main") : showFilter("main", false)
      }
      startIcon={<ContentFilter />}
    >
      Filter
    </Button>
  );
};
