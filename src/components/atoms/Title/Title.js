import React from "react";
import PropTypes from "prop-types";
import { StyledTitle } from "components/atoms/Title/Title.styles";
const Title = ({ title = "Title", color }) => {
  return <StyledTitle color={color}>{title}</StyledTitle>;
};

Title.propTypes = {
  /**Text */
  title: PropTypes.string.isRequired,
  /**Color of title */
  color: PropTypes.string.isRequired,
};

export default Title;
