import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-admin";

export default function MyToolBar() {
  return (
    <Toolbar>
      <Link to="person">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Person
        </Typography>
      </Link>
      <Link to="companies">
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Companies
        </Typography>
      </Link>
    </Toolbar>
  );
}
