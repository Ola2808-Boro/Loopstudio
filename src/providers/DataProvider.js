import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
export const dataContext = createContext({
  data: {},
  setData: () => {},
  isClicked: false,
  setIsClicked: () => {},
  handleClick: () => {},
  products: {},
  setProducts: () => {},
  click: false,
  isClickedProductDetails: () => {},
});

const DataProvider = ({ children }) => {
  const [data, setData] = useState({});
  const [products, setProducts] = useState({});
  const [isClicked, setIsClicked] = useState(false);
  const [click, isClickedProductDetails] = useState(false);
  useEffect(() => {
    axios
      .get("/products")
      .then((data) => setProducts(data.data.products))
      // .then((data) => setProducts(data.data.products2))
      .catch(function (error) {
        console.log(error.toJSON());
      });
  }, []);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };

  return (
    <dataContext.Provider
      value={{
        data,
        setData,
        isClicked,
        setIsClicked,
        handleClick,
        products,
        setProducts,
        click,
        isClickedProductDetails,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};

export default DataProvider;
