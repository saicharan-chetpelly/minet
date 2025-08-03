import React from "react";
import { TextField, InputAdornment, TextFieldProps } from "@mui/material";

interface InputProps {
  variant?: "outlined" | "standard" | "filled";
  label?: string;
  color?: "primary" | "error" | "secondary" | "info" | "success" | "warning";
  helperText?: string;
  icon?: JSX.Element;
}

const Input: React.FC<InputProps & TextFieldProps> = (props) => {
  const { label = "", helperText } = props;
  return (
    <TextField
      variant={props.variant}
      label={label}
      color={props.color}
      helperText={helperText}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">{props.icon}</InputAdornment>
        ),
      }}
      {...props}
    ></TextField>
  );
};

export default Input;
