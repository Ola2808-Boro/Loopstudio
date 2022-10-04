import React from "react";
import PropTypes from "prop-types";

import { StyledImgText } from "components/atoms/ImgText/ImgText.styles";
const ImgText = ({ imgText, isProduct, color }) => {
  return (
    <StyledImgText isProduct={isProduct} color={color}>
      {imgText}
    </StyledImgText>
  );
};

ImgText.propTypes = {
  /**text in img */
  imgText: PropTypes.string.isRequired,
  /**color of text */
  color: PropTypes.string,
  /**boolean which controls properties of text in diffrent component */
  isProduct: PropTypes.bool,
};

export default ImgText;
