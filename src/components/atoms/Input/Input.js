import React from "react";
import PropTypes from "prop-types";
import { StyledInput } from "components/atoms/Input/Input.styles";
const Input = ({
  size = "s",
  placeholder = "First name",
  register,
  label,
  required,
  type,
  minLength = "0",
}) => {
  return (
    <StyledInput
      {...register(label, { required })}
      placeholder={placeholder}
      type={type}
      size={size}
      minLength={minLength}
    />
  );
};

Input.propTypes = {
  size: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default Input;
