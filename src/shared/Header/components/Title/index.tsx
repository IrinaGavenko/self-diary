import * as React from "react";

import Typography from "@mui/material/Typography";

import {CompactTitleParams, FullTitleParams} from './stylesParams';

type SizeType = 'compact' | 'full';
const Title = ({size}: {size: SizeType}) => (
    <Typography
        variant={size === 'compact' ? 'h6' : 'h5'}
        noWrap
        component="a"
        href="/"
        sx={size === 'compact' ? CompactTitleParams : FullTitleParams}
    >
        LOGO
    </Typography>
)

export default Title;