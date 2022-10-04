import React, { useContext } from "react";
import { StyledMenuItemText } from "components/atoms/MenuItemText/MenuItemText.styles";
import { dataContext } from "providers/DataProvider";
import PropTypes from "prop-types";

const MenuItemText = ({ data: { menuitem = "Menu Item" }, color }) => {
  const { isClicked } = useContext(dataContext);
  let to = "";

  if (menuitem === "Home") {
    to = "/";
  } else {
    to = `/${menuitem.toLowerCase()}`;
  }

  return (
    <StyledMenuItemText isOpen={isClicked} color={color} to={to} replace>
      {menuitem}
    </StyledMenuItemText>
  );
};

MenuItemText.propTypes = {
  data: PropTypes.shape({
    menuitem: PropTypes.string,
  }),
  color: PropTypes.string,
  isOpen: PropTypes.bool.isRequired,
};
export default MenuItemText;
