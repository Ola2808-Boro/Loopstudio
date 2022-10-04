import React from "react";
import ImgText from "components/atoms/ImgText/ImgText";
import { StyledImgCreation } from "components/atoms/Img/Img.styles";
import { StyledCreationElement } from "./CreationElement.styles";
import PropTypes from "prop-types";
const CreationElement = ({ data: { description, img }, color }) => {
  return (
    <StyledImgCreation url={img.url}>
      <ImgText imgText={description} color={color} />
    </StyledImgCreation>
  );
};

CreationElement.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string.isRequired,
    img: PropTypes.shape({
      url: PropTypes.string.isRequired,
    }),
  }),
};
export default CreationElement;
