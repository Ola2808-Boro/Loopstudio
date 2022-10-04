import React from "react";
import PropTypes from "prop-types";
import { StyledSelect, StyledOption } from "./Select.styles";
const Select = ({ register, required }) => {
  return (
    <StyledSelect {...register("age", { required })}>
      <StyledOption value="20">Select...</StyledOption>
      <StyledOption value="20">20</StyledOption>
      <StyledOption value="30">30</StyledOption>
      <StyledOption value="40">40</StyledOption>
    </StyledSelect>
  );
};

Select.propTypes = {};

export default Select;
