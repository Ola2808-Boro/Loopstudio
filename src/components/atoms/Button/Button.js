import React from "react";
import { StyledButton } from "./Button.styles";
import PropTypes from "prop-types";
const Button = ({ text, click }) => {
  return <StyledButton onClick={click}>{text}</StyledButton>;
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
  click: PropTypes.func.isRequired,
};

export default Button;
