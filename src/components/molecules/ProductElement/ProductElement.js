import React from "react";
import ImgText from "components/atoms/ImgText/ImgText";
import PriceText from "components/atoms/Price/Price";
import ProductName from "components/atoms/ProductName/ProductName";
import PropTypes from "prop-types";
import {
  StyledElement,
  StyledElementImg,
  StyledElementAccess,
  StyledElementDescription,
} from "./ProductElement.styles";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("assets/images/products-image", false, /\.(png|jpe?g|svg)$/)
);

const ProductElement = ({ product, click }) => {
  let unavailable;
  if (product.Status === "Unavailable") {
    unavailable = true;
  } else {
    unavailable = false;
  }
  return (
    <>
      <StyledElement onClick={click}>
        <StyledElementImg url={images[product.ProductPicUrl]}>
          <StyledElementAccess unavailable={unavailable}>
            <ImgText imgText={product.Status} isProduct={true} />
          </StyledElementAccess>
        </StyledElementImg>
        <StyledElementDescription>
          <ProductName productName={product.Name} details={false} />
          <PriceText price={product.Price} details={false} />
        </StyledElementDescription>
      </StyledElement>
    </>
  );
};
ProductElement.propTypes = {
  /**Product is a object which contains info about product */
  product: PropTypes.shape().isRequired,
  /**Click is function which contains event click, when sb click on product, can see popup with details info */
  click: PropTypes.func.isRequired,
};
export default ProductElement;
