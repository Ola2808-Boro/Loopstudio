import React, { useContext } from "react";
import { dataContext } from "providers/DataProvider";
import SectionTitle from "components/atoms/SectionTitle/SectionTitle";
import { StyledCreations, StyledSectionImg } from "./Creations.styles";
import Button from "components/atoms/Button/Button";
import useWindowDimensions from "hooks/useWindowDimensions";
import CreationElement from "components/molecules/CreationElement/CreationElement";
const Creations = () => {
  const { data } = useContext(dataContext);
  const { width, height } = useWindowDimensions();
  const creationsElement = data.allSectionCreations?.map((item) => {
    return <CreationElement data={item} />;
  });

  const creationsElementDesktop = data.allSectionCreationDesktops?.map(
    (item) => {
      return <CreationElement data={item} />;
    }
  );
  return (
    <StyledCreations>
      <SectionTitle
        sectionTitle={data.allSectionCreations[0].title}
        isMargin={true}
      />
      <StyledSectionImg>
        {width > 768 ? creationsElementDesktop : creationsElement}
      </StyledSectionImg>
      <Button text={"see all"} />
    </StyledCreations>
  );
};

export default Creations;
