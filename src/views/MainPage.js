import React from "react";
import Creations from "components/organisms/Creations/Creations";
import DescriptionSection from "components/molecules/DescriptionSection/DescriptionSection";
import MainTemplates from "components/templates/MainTemplate/MainTemplates";
const MainPage = () => {
  return (
    <MainTemplates>
      <DescriptionSection />
      <Creations />
    </MainTemplates>
  );
};

export default MainPage;
