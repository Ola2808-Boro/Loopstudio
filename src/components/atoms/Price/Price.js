import React from "react";
import { StyledPrice } from "./Price.styles";
import PropTypes from "prop-types";

const PriceText = ({ price, details, color }) => {
  return (
    <StyledPrice details={details} color={color}>
      {price} zł
    </StyledPrice>
  );
};

PriceText.propTypes = {
  /**Price of product */
  price: PropTypes.string.isRequired,
  /** Font-size of price */
  details: PropTypes.bool.isRequired,
  /**Color of text */
  color: PropTypes.string.isRequired,
};

export default PriceText;
