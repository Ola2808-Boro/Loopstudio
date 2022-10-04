import React from "react";
import { StyledProductName } from "./ProductName.styles";
import PropTypes from "prop-types";
const ProductName = ({ productName = "Product name", details, color }) => {
  return (
    <StyledProductName details={details} color={color}>
      {productName}
    </StyledProductName>
  );
};

ProductName.propTypes = {
  /**Text */
  productName: PropTypes.string.isRequired,
  /**Size of product name */
  details: PropTypes.bool.isRequired,
  /**Color of product name */
  color: PropTypes.string.isRequired,
};
export default ProductName;
