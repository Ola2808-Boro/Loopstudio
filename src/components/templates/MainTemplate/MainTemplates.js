import React, { useContext } from "react";
import Footer from "components/organisms/Footer/Footer";
import Header from "components/organisms/Header/Header";
import { dataContext } from "providers/DataProvider";
import OpenMenu from "components/organisms/OpenMenu/OpenMenu";
import useWindowDimensions from "hooks/useWindowDimensions";
const MainTemplates = ({ children }) => {
  const { isClicked } = useContext(dataContext);
  const { width, height } = useWindowDimensions();
  return (
    <>
      {isClicked && width < 770 ? <OpenMenu /> : <Header />}
      {children}
      <Footer />
    </>
  );
};

export default MainTemplates;
