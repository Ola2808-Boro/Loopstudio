import React, { useContext } from "react";
import { StyledMenuOpen } from "./OpenMenu.styles";
import Logo from "components/atoms/Logo/Logo";
import {
  StyledHeaderSection,
  StyledNav,
} from "components/molecules/HeaderSection/HeaderSection.styles";
import { dataContext } from "providers/DataProvider";
import Menu from "components/atoms/HamburgerMenu/HamburgerMenu";
import MenuItems from "components/molecules/MenuItems/MenuItems";
const OpenMenu = () => {
  const { handleClick } = useContext(dataContext);
  return (
    <StyledMenuOpen>
      <StyledNav>
        <Logo />
        <Menu click={handleClick} />
      </StyledNav>
      <MenuItems isOpen={true} />
    </StyledMenuOpen>
  );
};

export default OpenMenu;
