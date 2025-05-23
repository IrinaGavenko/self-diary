import * as React from "react";

import Button from "@mui/material/Button";

import { Link } from 'react-router-dom';

import {PAGES} from './';

const NavBarFull = ({handleCloseNavMenu}: any) => {
    return (
        <>
            {PAGES.map(({title, path}) => (
                <Button
                    key={title}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    <Link to={path}>
                        {title}
                    </Link>
                </Button>
            ))}
        </>
    )
}

export default NavBarFull;
