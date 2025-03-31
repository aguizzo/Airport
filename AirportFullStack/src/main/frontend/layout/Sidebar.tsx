import { useState } from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
// List of icons
import MenuIcon from "@mui/icons-material/Menu"; // Hamburger menu icon
import HomeIcon from "@mui/icons-material/Home";
import NavigationIcon from '@mui/icons-material/Navigation';
import { Link } from "react-router";

export default function Sidebar() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleDrawer = (newOpen : boolean) => () => {
    setOpen(newOpen);
  };

  const menuItems = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Airports", icon: <NavigationIcon />, path: "/airports" },
  ];

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton component={Link} to={item.path}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <div>
      {/* Hamburger Icon */}
      <IconButton
        color="inherit"
        edge="start"
        onClick={toggleDrawer(true)}
        aria-label="menu"
      >
        <MenuIcon />
      </IconButton>

      {/* Drawer */}
      <Drawer open={open} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </div>
  );
}