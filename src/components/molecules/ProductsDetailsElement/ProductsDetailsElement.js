import React, { useContext } from "react";
import {
  StyledDetailsSection,
  StyledIconCross,
} from "./ProductsDetailsElement.styles";
import { dataContext } from "providers/DataProvider";
import PriceText from "components/atoms/Price/Price";
import ProductName from "components/atoms/ProductName/ProductName";
import PropTypes from "prop-types";
import useWindowDimensions from "hooks/useWindowDimensions";
import {
  StyledElementAccess,
  StyledElementDescription,
  StyledElementImg,
  DetailsText,
  DetailsTextSpan,
} from "./ProductsDetailsElement.styles";
import ImgText from "components/atoms/ImgText/ImgText";
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
const ProductDetailsElement = ({
  product: {
    Description,
    ProductPicUrl,
    Status,
    Price,
    Category,
    MainCategory,
    SupplierName,
    WeightMeasure,
    WeightUnit,
    Name,
    Width,
    Height,
    DimUnit,
  },
}) => {
  let unavailable;
  if (Status === "Unavailable") {
    unavailable = true;
  } else {
    unavailable = false;
  }

  const { width, height } = useWindowDimensions();
  const { isClickedProductDetails } = useContext(dataContext);
  function handleClick() {
    isClickedProductDetails((prevState) => !prevState);
  }
  return (
    <StyledDetailsSection>
      {width >= 768 && (
        <StyledElementImg url={images[ProductPicUrl]}>
          <StyledElementAccess unavailable={unavailable}>
            <ImgText imgText={Status} isProduct={true} />
          </StyledElementAccess>
        </StyledElementImg>
      )}
      <StyledElementDescription>
        <StyledIconCross onClick={handleClick} fill="000000" />
        <ProductName productName={Name} details={true} />
        <PriceText price={Price} details={true} />
        <DetailsText description={true}>{Description}</DetailsText>
        <DetailsText>
          <DetailsTextSpan>Category:</DetailsTextSpan>: {Category}
        </DetailsText>
        <DetailsText>
          <DetailsTextSpan>Main Category:</DetailsTextSpan> {MainCategory}
        </DetailsText>
        <DetailsText>
          <DetailsTextSpan>Width:</DetailsTextSpan>
          {Width} {DimUnit} <DetailsTextSpan>Height:</DetailsTextSpan> {Height}
          {DimUnit}
        </DetailsText>
        <DetailsText>
          <DetailsTextSpan>Weight:</DetailsTextSpan> {WeightMeasure}{" "}
          {WeightUnit}
        </DetailsText>
        <DetailsText>
          <DetailsTextSpan>Supplier Name:</DetailsTextSpan> {SupplierName}
        </DetailsText>
      </StyledElementDescription>
    </StyledDetailsSection>
  );
};

ProductDetailsElement.propTypes = {
  /**Product is a object which contains info about product */
  product: PropTypes.shape({
    Description: PropTypes.string.isRequired,
    ProductPicUrl: PropTypes.string.isRequired,
    Status: PropTypes.string.isRequired,
    Price: PropTypes.string.isRequired,
    Category: PropTypes.string.isRequired,
    MainCategory: PropTypes.string.isRequired,
    SupplierName: PropTypes.string.isRequired,
    WeightMeasure: PropTypes.number.isRequired,
    WeightUnit: PropTypes.string.isRequired,
    Name: PropTypes.string.isRequired,
    Width: PropTypes.number.isRequired,
    Height: PropTypes.number.isRequired,
    DimUnit: PropTypes.string.isRequired,
  }),
};

export default ProductDetailsElement;
