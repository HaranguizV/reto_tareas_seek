import "./App.css";
import "@mui/material";
import * as React from "react";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
        <TextField
          id="outlined-basic"
          label="Nombre de usuario"
          variant="outlined"
          sx={{
            input: {
              color: "black",
              background: "white",
            },
          }}
          style={{ marginBottom: 10 }}
        />
        <TextField
          id="outlined-basic"
          type="password"
          label="Contraseña"
          variant="outlined"
          sx={{
            input: {
              color: "black",
              background: "white",
            },
          }}
          style={{ marginBottom: 10 }}
        />
        <Button className="primary" onClick={() => navigate("/tasks")}>
          Iniciar sesión
        </Button>
      </header>
    </div>
  );
}

export default App;
