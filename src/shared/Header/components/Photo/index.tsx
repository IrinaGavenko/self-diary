import * as React from "react";

import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from '@mui/material/ClickAwayListener';
import IconButton from "@mui/material/IconButton";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";


const Photo = () => {
    const [showTooltip, setShowTooltip] = React.useState(false);
    const onChangeTooltipStatus = () => setShowTooltip(!showTooltip);
    const onCloseTooltip = () => setShowTooltip(false);

    return (
        <ClickAwayListener onClickAway={onCloseTooltip}>
            <Tooltip
                onClose={onCloseTooltip}
                open={showTooltip}
                disableFocusListener
                disableHoverListener
                disableTouchListener
                title="smth"
            >
                <IconButton onClick={onChangeTooltipStatus} sx={{ p: 0 }}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
            </Tooltip>
        </ClickAwayListener>




    )
}

export default Photo;