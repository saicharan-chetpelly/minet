import { Button, ButtonProps } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
const MuiButton2 = styled(Button)<ButtonProps>(({ theme }) => ({
  "&.Mui-disabled": {
    backgroundColor: "#CCE3FF",
  },
  
}));

const MuiButton = (props: ButtonProps) => {
 return <MuiButton2 {...props}></MuiButton2>;
};
export default MuiButton;
