import * as React from 'react';

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';

import Title from './components/Title';
import {NavBarSmall, NavBarFull} from './components/NavBar';
import Photo from "./components/Photo";


const Header = () => {

    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Title size="compact" />

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <NavBarSmall anchorElNav={anchorElNav} handleCloseNavMenu={handleCloseNavMenu}/>
                    </Box>

                    <Title size="full" />

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <NavBarFull handleCloseNavMenu={handleCloseNavMenu}/>
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Photo />
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;