import React from "react";
import { ReactComponent as fbSvg } from "assets/icons/icon-facebook.svg";
import { ReactComponent as igSvg } from "assets/icons/icon-instagram.svg";
import { ReactComponent as pinterestSvg } from "assets/icons/icon-pinterest.svg";
import { ReactComponent as twitterSvg } from "assets/icons/icon-twitter.svg";
import styled from "styled-components";
import PropTypes from "prop-types";

const FacebookSvg = styled(fbSvg)`
  margin: 8px;
`;
const PinterestSvg = styled(pinterestSvg)`
  margin: 8px;
`;
const TwitterSvg = styled(twitterSvg)`
  margin: 8px;
`;
const InstagramSvg = styled(igSvg)`
  margin: 8px;
`;
const StyledIconsSection = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Icons = ({ color = "white" }) => {
  return (
    <StyledIconsSection>
      <FacebookSvg fill={color} />
      <TwitterSvg fill={color} />
      <PinterestSvg fill={color} />
      <InstagramSvg fill={color} />
    </StyledIconsSection>
  );
};

Icons.propTypes = {
  /**Color which icons will have */
  color: PropTypes.string,
};

export default Icons;
