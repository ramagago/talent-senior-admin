import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useLogin, useNotify } from "react-admin";

const MyLoginPage = () => {
  const [apiKey, setApiKey] = useState("");
  const login = useLogin();
  const notify = useNotify();

  const handleSubmit = (e: any) => {
    e.preventDefault();
    login(apiKey).catch(() => notify("api key invalida"));
  };

  return (
    <Box
      height="100vh"
      width="100wh"
      my={0}
      display="flex"
      alignItems="center"
      justifyContent="center"
      sx={{ border: "none" }}
    >
      <form onSubmit={handleSubmit}>
        <Box
          height={350}
          width={400}
          my={0}
          display="flex"
          flexDirection={"column"}
          alignItems="center"
          justifyContent="center"
          bgcolor="#318fd0"
          gap={4}
          borderRadius={5}
          sx={{ border: "none" }}
        >
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
          >
            <h1 style={{ color: "#ffffff", margin: "0" }}>Talento Senior</h1>
            <h4 style={{ color: "#ffffff", margin: "0" }}>Admin</h4>
          </Box>

          <TextField
            id="outlined-password-input"
            label="apiKey"
            type="apiKey"
            name="apiKey"
            value={apiKey}
            sx={{
              backgroundColor: "white",
              borderRadius: "10px",
              WebkitBorderTopRightRadius: "10px",
              WebkitBorderTopLeftRadius: "10px",
            }}
            color={"secondary"}
            onChange={(e) => setApiKey(e.target.value)}
          />
          <Button sx={{ bgcolor: "white" }} onClick={handleSubmit}>
            Login
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default MyLoginPage;
