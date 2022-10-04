import React from "react";
import PropTypes from "prop-types";
import { StyledErrorText } from "./ErrorText.styles";

const ErrorText = ({ text }) => {
  return <StyledErrorText>{text}</StyledErrorText>;
};

ErrorText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorText;
