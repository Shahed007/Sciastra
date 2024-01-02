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
import { Container, Menu, MenuItem, Popover } from "@mui/material";
import logo from "../../assets/logo/sciastra.webp";

const drawerWidth = 240;

function Navbar(props) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuLeave = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const researchInstitutes = ["IISC", "IISER", "NISER", "ISI", "CMI"];
  const ourTeam = ["Mission", "Team", "Book a session"];
  const resource = ["Blogs", "Material", "Web Stories", "Alumni Login"];

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
        elevation={0}
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
              <div className="relative group menu">
                <button className="px-4 py-1 dropdown  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                  Research Institutes
                </button>
                <ul className=" w-full absolute top-8 left-0 hidden dropdown-menu">
                  {researchInstitutes.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white/30 backdrop-blur-md cursor-pointer p-3 py-4 hover:bg-transparent duration-200 text-center uppercase font-normal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Course
              </button>
              <button className="px-4 py-1  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                Selections
              </button>

              <div className="relative group menu">
                <button className="px-4 py-1 dropdown  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                  Our Team
                </button>
                <ul className="  absolute top-8 left-0 hidden dropdown-menu w-52">
                  {ourTeam.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white/30 backdrop-blur-md cursor-pointer p-3 py-4 hover:bg-transparent duration-200 text-center uppercase font-normal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative group menu">
                <button className="px-4 py-1 dropdown  uppercase font-normal duration-200 hover:bg-white/30 hover:backdrop-blur-md hover:rounded-md hover:scale-105">
                  Resource
                </button>
                <ul className="  absolute top-8 left-0 hidden dropdown-menu w-52">
                  {resource.map((item, idx) => (
                    <li
                      key={idx}
                      className="bg-white/30 backdrop-blur-md cursor-pointer p-3 py-4 hover:bg-transparent duration-200 text-center uppercase font-normal"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
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
