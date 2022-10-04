import React from "react";
import PropTypes from "prop-types";
import { StyledDescription } from "components/atoms/Description/Description.styles";
const Description = ({ description }) => {
  return <StyledDescription>{description}</StyledDescription>;
};

Description.propTypes = {
  description: PropTypes.string.isRequired,
};

export default Description;
