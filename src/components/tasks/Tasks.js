import * as React from "react";
import "@mui/material";
import "./Tasks.css";
import List from "@mui/material/List";
import ListSubheader from "@mui/material/ListSubheader";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Tasks() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = (id, status) => {setOpen(true);setTaskStatus(status); results[1].status=1; console.log(results)};
  const handleClose = () => setOpen(false);
  const [taskStatus, setTaskStatus] = React.useState("");

  const results = [
    { id: 1, status: 1, text: "Tarea 1" },
    { id: 2, status: 3, text: "Tarea 2" },
    { id: 3, status: 2, text: "Tarea 3" },
  ];

  const options = [
    { id: 1, name: "Por hacer" },
    { id: 2, name: "En progreso" },
    { id: 3, name: "Completada" },
  ];

  const handleChange = (event) => {
    setTaskStatus(event.target.value);
  };

  const submitChange = (id, status) => {

  }

  return (
    <div className="Tasks">
      <List
        sx={{ width: "100%", maxWidth: 600, bgcolor: "background.paper" }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Listado de tareas
          </ListSubheader>
        }
      >
        {results.map((item, key) => {
          return (
            <ListItem>
              <ListItemText>{item.text}</ListItemText>
              <Paper elevation={0}>{options[item.status-1].name}</Paper>
              <Button className="primary" onClick={()=>handleOpen(item.id,item.status)}>
                Cambiar Estado
              </Button>
            </ListItem>
          );
        })}
      </List>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Cambiar estado
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Selecciona un estado
          </Typography>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Estado</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={taskStatus}
              label="Estado"
              onChange={handleChange}
            >
              {options.map((item, key) => {
                return <MenuItem value={item.id}>{item.name}</MenuItem>;
              })}
            </Select>
            <Button className="primary" type="submit" onClick={()=>{}}>
              Cambiar Estado
            </Button>
          </FormControl>
        </Box>
      </Modal>
    </div>
  );
}

export default Tasks;
