import React from 'react'

import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";

import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import {Menu, MenuItem, Tooltip} from "@mui/material";
 import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import SideBar from '../sidebar/SideBar';


const drawerWidth = 300;
const settings = ["Profile", "Dashboard", "Logout"];



const NavBar = ({children}) => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
      };

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleCloseUserMenu = () => {
      setAnchorElUser(null);
    };
    const handleOpenUserMenu = event => {
      setAnchorElUser(event.currentTarget);
    };

  return (
   <>
    <Box sx={{display: "flex"}}>
        <CssBaseline />
        <AppBar
          position="fixed"
          sx={{
            background: `linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)`,
            width: {sm: `calc(100% - ${drawerWidth}px)`},
            ml: {sm: `${drawerWidth}px`},
          }}
        >
          <Toolbar>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="start"
              onClick={handleDrawerToggle}
              sx={{mr: 2, display: {sm: "none"}}}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="div"
              color="white"
              fontFamily="'Arial',sans-serif"
            >
              Welcome to Admin Dashboard
            </Typography>

            <Box sx={{flexGrow: 1}} />
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton
                 onClick={handleOpenUserMenu}
                 sx={{p: 0}}>
                  <AccountCircleOutlinedIcon fontSize="large" sx={{color: "white"}} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{mt: "45px", }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map(setting => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}
                  sx={{background:"#C97280"}}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>  
          </Toolbar>      
        </AppBar>

        <Box
          component="nav"
          sx={{width: {sm: drawerWidth}, flexShrink: {sm: 0}}}
          aria-label="mailbox folders"
        >
          {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true,
            }}
            sx={{
              display: {xs: "block", sm: "none"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: `linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)`,
              },
            }}
          >
            <SideBar/>
          </Drawer>
        
          <Drawer
            variant="permanent"
            sx={{
              display: {xs: "none", sm: "block"},
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
                background: `linear-gradient(8deg, rgba(218,10,46,1) 0%, rgba(121,9,30,1) 35%, rgba(222,16,6,1) 100%)`,
              },
            }}
            open
          >
            <SideBar />
          </Drawer>


          </Box>
          <Box
          component="main"
          sx={{flexGrow: 1, width: {sm: `calc(100% - ${drawerWidth}px)`}}}
        >
          <Toolbar />

          {children}
        </Box>

    </Box>
        
   </>
  )
}

export default NavBar
