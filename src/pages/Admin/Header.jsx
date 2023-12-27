import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return <>
      <AppBar position="static" style={{ width: '100%' }}>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            ADMIN Dashboard
          </Typography>
          <Typography variant="subtitle1">
            Welcome, [Admin Name] {/* Replace with admin's actual name */}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
}
export default Header;