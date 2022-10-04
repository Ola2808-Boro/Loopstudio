import React from "react";
import PropTypes from "prop-types";
import { StyledSectionTitle } from "components/atoms/SectionTitle/SectionTitle.styles";
const SectionTitle = ({ sectionTitle = "Section Title", color }) => {
  return <StyledSectionTitle color={color}>{sectionTitle}</StyledSectionTitle>;
};

SectionTitle.propTypes = {
  /**Text */
  sectionTitle: PropTypes.string.isRequired,
  /**Color of section title */
  color: PropTypes.string.isRequired,
};

export default SectionTitle;
