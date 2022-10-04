import React from "react";
import FooterText from "components/atoms/FooterText/FooterText";
import Icons from "components/atoms/Icons/Icons";
import Logo from "components/atoms/Logo/Logo";
import MenuItems from "components/molecules/MenuItems/MenuItems";
import { StyledFooter } from "components/organisms/Footer/Footer.styles";
const Footer = () => {
  return (
    <StyledFooter>
      <Logo />
      <MenuItems isInFooter={true} />
      <Icons color="white" />
      <FooterText />
    </StyledFooter>
  );
};

export default Footer;
