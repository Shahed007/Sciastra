import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Container } from "@mui/material";
import logo from "../../assets/logo/sciastra.webp";

const drawerWidth = 240;
const navItems = ["Home", "About", "Contact"];

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <>
      <Drawer
        open={mobileOpen}
        onClose={handleDrawerToggle}
        anchor="left"
        variant="temporary"
        sx={{ width: "120%", display: "block" }}
      >
        {/* Your drawer content goes here */}
        <div className="w-[240px] p-4">
          <p>This is your drawer content.</p>
        </div>
      </Drawer>
    </>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }} position={"fixed"} zIndex={200}>
      <AppBar
        elevation="none"
        component="nav"
        sx={{
          color: "white",
          backgroundColor: "transparent",
          // py: "1rem",
        }}
      >
        <Container maxWidth="xl">
          <Toolbar
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              color: "white",
            }}
          >
            <Typography component="div">
              <img
                style={{
                  height: "50px",
                }}
                src={logo}
                alt="logo"
              />
            </Typography>

            <Box
              sx={{
                display: {
                  xs: "none",
                  lg: "flex",
                },
                color: "#fff",
                gap: "24px",
              }}
            >
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Research Institutes
              </button>
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Course
              </button>
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Selections
              </button>
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Our Team
              </button>
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Resources
              </button>
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Contact Us
              </button>
            </Box>
            <Box>
              <Button
                variant="contained"
                sx={{
                  background: "linear-gradient(to left, #344FB6 , #A355DC )",
                  px: "2rem",
                  py: "10px",

                  borderRadius: "20rem",
                  display: {
                    xs: "none",
                    lg: "flex",
                  },
                }}
              >
                Login
              </Button>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { lg: "none" } }}
              >
                <MenuIcon />
              </IconButton>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </Box>
  );
}

Navbar.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Navbar;
