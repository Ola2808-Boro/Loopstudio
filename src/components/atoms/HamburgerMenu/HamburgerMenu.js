import React, { useContext } from "react";
import { ReactComponent as menuSvg } from "assets/icons/icon-hamburger.svg";
import { ReactComponent as menuCloseSvg } from "assets/icons/icon-close.svg";
import styled from "styled-components";
import PropTypes from "prop-types";
import { dataContext } from "providers/DataProvider";
const Svg = styled(menuSvg)`
  align-self: center;
`;

const CloseSvg = styled(menuCloseSvg)`
  align-self: center;
`;

const Menu = ({ click }) => {
  const { isClicked } = useContext(dataContext);
  return isClicked ? (
    <CloseSvg onClick={click} fill="#fff" />
  ) : (
    <Svg onClick={click} />
  );
};
Menu.propTypes = {
  click: PropTypes.func.isRequired,
};
export default Menu;
