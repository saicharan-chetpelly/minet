import React,{useState} from 'react'
import Icon from "../../atoms/Icon";
import {Menu, MenuItem,Fade,IconButton} from '@mui/material';
import upArrow from "../../../../public/assets/images/uparrow.svg"
import dropdown from "../../../../public/assets/images/down.svg"


const DropDown = () => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: { currentTarget: React.SetStateAction<HTMLElement | null>; }) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div>
      <IconButton sx={{p:"0px"}} onClick={handleClick}>
      <Icon
      id="fade-button"
      aria-controls={open ? 'fade-menu' : undefined}
      aria-haspopup="true"
      aria-expanded={open ? 'true' : undefined}
      src={open?upArrow:dropdown}/>
       </IconButton>
       <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  )
}

export default DropDown
