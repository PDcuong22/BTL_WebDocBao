import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import GroupIcon from "@mui/icons-material/Group";

const drawerWidth = 240;

const data = [
  {
    text: "News",
    icon: <NewspaperIcon />,
    href: "/admin/news",
  },
  {
    text: "Users",
    icon: <GroupIcon />,
    href: "/admin/users",
  },
];

export default function Sidebar() {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {data.map(({ text, icon, href }, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton href={href}>
                <ListItemIcon>{icon}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </Box>
  );
}
