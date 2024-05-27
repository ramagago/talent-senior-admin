import { Box } from "@mui/material";
import { AppBar } from "react-admin";
import MyToolBar from "./components/MyAppBar/ToolBar";

const MyLayout = ({ children }) => (
  <Box
    sx={{
      display: "flex",
      flexDirection: "column",
      zIndex: "1",
      minHeight: "100vh",
      backgroundColor: "theme.palette.background.default",
      position: "relative",
    }}
  >
    <Box sx={{ display: "flex", flexDirection: "column", overflowX: "auto" }}>
      <AppBar toolbar={<MyToolBar />} />
      <Box display="flex" flexGrow={1}>
        {/* <Sidebar>
          <MyMenu />
        </Sidebar> */}
        <Box
          display="flex"
          flexDirection="column"
          flexGrow={2}
          p={3}
          marginTop="4em"
          paddingLeft={5}
        >
          {children}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default MyLayout;
