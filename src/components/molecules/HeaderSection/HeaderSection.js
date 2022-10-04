import React, { useContext } from "react";
import Title from "components/atoms/Title/Title";
import Logo from "components/atoms/Logo/Logo";
import {
  StyledHeaderSection,
  StyledNav,
} from "components/molecules/HeaderSection/HeaderSection.styles";
import { dataContext } from "providers/DataProvider";
import Menu from "components/atoms/HamburgerMenu/HamburgerMenu";
import useWindowDimensions from "hooks/useWindowDimensions";
import MenuItems from "../MenuItems/MenuItems";

const HeaderSection = () => {
  const { data, handleClick } = useContext(dataContext);
  const { header } = data;
  const { title } = header;
  const { imgMobile, imgDesktop } = header;
  const { width, height } = useWindowDimensions();
  return (
    <StyledHeaderSection url={width > 1025 ? imgDesktop.url : imgMobile.url}>
      <StyledNav>
        <Logo />
        {width > 768 ? (
          <MenuItems isInFooter={false} />
        ) : (
          <Menu click={handleClick} />
        )}
      </StyledNav>

      <Title title={title} />
    </StyledHeaderSection>
  );
};

export default HeaderSection;
