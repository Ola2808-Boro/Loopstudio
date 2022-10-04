import React from "react";
import { ReactComponent as logoSvg } from "assets/icons/logo.svg";
import styled from "styled-components";
import PropTypes from "prop-types";
const Svg = styled(logoSvg)``;

const Logo = ({ color = "white" }) => {
  return <Svg fill={color} />;
};

Logo.propTypes = {
  /**Color of logo */
  color: PropTypes.string.isRequired,
};
export default Logo;
