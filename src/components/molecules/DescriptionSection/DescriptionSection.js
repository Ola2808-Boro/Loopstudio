import React, { useContext } from "react";
import SectionTitle from "components/atoms/SectionTitle/SectionTitle";
import Description from "components/atoms/Description/Description";
import {
  StyledDescriptionSection,
  StyledTextSection,
} from "./DescriptionSection.styles";
import { dataContext } from "providers/DataProvider";
import { StyledImgInfo } from "components/atoms/Img/Img.styles";
import useWindowDimensions from "hooks/useWindowDimensions";
const DescriptionSection = () => {
  const { data } = useContext(dataContext);

  const { title, description, img, imgDesktop } = data.sectionInfo;
  const { width, height } = useWindowDimensions();

  return (
    <StyledDescriptionSection>
      <StyledImgInfo url={width > 1025 ? imgDesktop.url : img.url} />
      <StyledTextSection>
        <SectionTitle sectionTitle={title} />
        <Description description={description} />
      </StyledTextSection>
    </StyledDescriptionSection>
  );
};

export default DescriptionSection;
