import * as React from "react";

import { Link } from 'react-router-dom';

import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";

import {PAGES} from './';

const NavBarSmall = ({anchorElNav, handleCloseNavMenu}: any) => {
    return (
        <Menu
            id="menu-appbar"
            anchorEl={anchorElNav}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
            }}
            open={Boolean(anchorElNav)}
            onClose={handleCloseNavMenu}
            sx={{ display: { xs: 'block', md: 'none' } }}
        >
            {PAGES.map(({title, path}) => (
                <MenuItem key={title} onClick={handleCloseNavMenu}>
                    <Link to={path}>
                    <Typography sx={{ textAlign: 'center' }}>{title}</Typography>
                    </Link>
                </MenuItem>
            ))}
        </Menu>
    )
}

export default NavBarSmall;
