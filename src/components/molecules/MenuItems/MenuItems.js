import React, { useContext } from "react";
import { dataContext } from "providers/DataProvider";
import { StyledMenuSection } from "./MenuItems.styles";
import PropTypes from "prop-types";
import MenuItemText from "components/atoms/MenuItemText/MenuItemText";
const MenuItems = ({ isInFooter, isOpen }) => {
  const { data } = useContext(dataContext);
  const menuElements = data.allMenus?.map((item) => {
    return <MenuItemText data={item} />;
  });
  return (
    <StyledMenuSection isInFooter={isInFooter} isOpenMenu={isOpen}>
      {menuElements}
    </StyledMenuSection>
  );
};

MenuItems.propTypes = {
  isInFooter: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  // data: PropTypes.shape({
  //   data: PropTypes.shape({
  //     item: "Home",
  //   }),
  // }),
};
export default MenuItems;
