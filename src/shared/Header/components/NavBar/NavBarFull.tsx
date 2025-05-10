import * as React from "react";

import Button from "@mui/material/Button";

import {PAGES} from './';

const NavBarFull = ({handleCloseNavMenu}: any) => {
    return (
        <>
            {PAGES.map((page) => (
                <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: 'white', display: 'block' }}
                >
                    {page}
                </Button>
            ))}
        </>
    )
}

export default NavBarFull;
