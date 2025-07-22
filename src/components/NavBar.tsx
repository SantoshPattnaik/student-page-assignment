import { useContext } from "react";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { DarkMode, LightMode } from "@mui/icons-material";
import { ThemeContext } from "../ThemeContext";

const NavBar = () => {
  const { toggle, mode } = useContext(ThemeContext);

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Student Management
        </Typography>
        <Button color="inherit" component={Link} to="/">
          DashBoard
        </Button>
        <Button color="inherit" component={Link} to="/students">
          Student List
        </Button>
        <IconButton color="inherit" onClick={toggle}>
          {mode === "light" ? <DarkMode /> : <LightMode />}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default NavBar;
