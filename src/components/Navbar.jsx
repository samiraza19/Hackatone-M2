import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
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
import { navItems } from "../utils/routes_list";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { onAuthStateChanged, signOut } from 'firebase/auth';

const drawerWidth = 240;

function Navbar(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const user_auth_state = useSelector((state) => state.user_auth);
  const dispatch = useDispatch()

  const logout_handle = () => {
    // Call signOut function to sign out the current user
    signOut(auth)
      .then(() => {
        // Dispatch the action to set user authentication state to false
        dispatch(set_user_auth({ auth: false }));
        console.log('User signed out successfully');
        navigate('/login')
      })  
      .catch((error) => {
        console.error('Error signing out:', error);
      });
  };








  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Red Proud

      </Typography>
      <Divider />
      <List>
        {navItems.map((item, index) => {
          const { both, auth_required } = item;
          return both === true || auth_required === user_auth_state.user_auth ? (
            <ListItem key={index} disablePadding>
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary=<Link to={item.link}>{item.label}</Link> />
              </ListItemButton>
            </ListItem>
          ) : null;
        })}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Red Proud

          </Typography>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {navItems.map((item, ind) => {
              const { both, auth_required } = item;
              return both || auth_required === user_auth_state.user_auth ? (
                <Button key={ind} sx={{ color: "#fff" }}>
                  <Link to={item.link}>{item.label}</Link>
                </Button>
              ) : null;
            })}
            {
              user_auth_state.user_auth?
              <Button onClick={logout_handle}  sx={{ color: '#fff' }}>
                
                  LOGOUT
            
              </Button>
              : null
            }
          </Box>
        </Toolbar>
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

export { Navbar };
