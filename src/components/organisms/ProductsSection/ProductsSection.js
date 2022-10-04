import React, { useContext, useState, useEffect } from "react";
import { ProductSection, StyledSection } from "./ProductsSection.styles";
import ShowMore from "react-show-more-button";
import Button from "components/atoms/Button/Button";
import { dataContext } from "providers/DataProvider";
import ProductDetailsElement from "components/molecules/ProductsDetailsElement/ProductsDetailsElement";
import ProductElement from "components/molecules/ProductElement/ProductElement";
const ProductsSection = () => {
  useEffect(() => {
    loopWithSlice(0, postsPerPage);
  }, []);

  const postsPerPage = 20;
  let arrayForHoldingProducts = [];
  const { products } = useContext(dataContext);
  const { ProductCollection } = products;
  console.log(products);
  const [data, setData] = useState({});

  const [productsToShow, setProductsToShow] = useState([]);
  const [next, setNext] = useState(20);

  const { isClickedProductDetails, click } = useContext(dataContext);
  function handleClick({ item }) {
    isClickedProductDetails((prevState) => !prevState);
    setData((prevData) => item);
  }

  const handleShowMorePosts = () => {
    console.log("klikam");
    loopWithSlice(next, next + postsPerPage);
    setNext(next + postsPerPage);
  };

  const loopWithSlice = (start, end) => {
    const slicedProducts = elements.slice(0, end);
    arrayForHoldingProducts = [...slicedProducts];
    console.log(arrayForHoldingProducts);
    setProductsToShow(arrayForHoldingProducts);
  };

  const elements = ProductCollection?.map((item, index) => {
    return (
      <>
        <ProductElement product={item} click={() => handleClick({ item })} />
      </>
    );
  });

  return (
    <StyledSection>
      <ProductSection>{productsToShow}</ProductSection>
      <Button click={handleShowMorePosts} text={"show more"} />
      {click && Object.keys(data).length && (
        <ProductDetailsElement product={data} />
      )}
    </StyledSection>
  );
};

export default ProductsSection;

//TODO:when load everthing ,remove button Show more
