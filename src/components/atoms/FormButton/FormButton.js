import React from "react";
import PropTypes from "prop-types";
import { StyledFormButton } from "./FormButton.styles";
const FormButton = ({ size = "small" }) => {
  return <StyledFormButton type="submit" size={size} />;
};

FormButton.propTypes = {
  size: PropTypes.string.isRequired,
};

export default FormButton;
