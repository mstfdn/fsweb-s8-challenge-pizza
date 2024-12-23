import React from "react";
import { FormControl, Select, MenuItem, InputLabel } from "@mui/material";
import { styled } from "@mui/system";

const CustomFormControl = styled(FormControl)(({ theme }) => ({
  minWidth: "100%",
  "& .MuiInputLabel-root": {
    display: "none",
  },
}));

const CustomSelect = styled(Select)(({ theme }) => ({
  backgroundColor: "#f9f9f8",
  borderRadius: "6px",
  padding: "0",
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  fontSize: "1rem",
  color: "#333",
  "&.Mui-selected": {
    backgroundColor: "#ffebcc",
  },
  "&:hover": {
    backgroundColor: "#faf6f1",
  },
  "&.Mui-selected:hover": {
    backgroundColor: "#ffe6b3",
  },
}));

const StyledDropdown = ({ value, onChange, name }) => {
  return (
    <CustomFormControl>
      <InputLabel id="crust-select-label">Hamur Seç *</InputLabel>
      <CustomSelect
        name="crust"
        labelId="crust-select-label"
        value={value}
        onChange={onChange}
        displayEmpty
        color="#ffe6b3"
        sx={{
          width: "100%",
          textAlign: "left",
          "& .MuiSelect-select": {
            textAlign: "left",
          },
        }}
      >
        <StyledMenuItem value="thin">İnce</StyledMenuItem>
        <StyledMenuItem value="normal">Normal</StyledMenuItem>
      </CustomSelect>
    </CustomFormControl>
  );
};

export default StyledDropdown;