import {
  StyledElement,
  StyledElementImg,
  StyledElementAccess,
  StyledElementDescription,
} from "component/molecules/ProductElement/ProductElement.styles";
import AppStyle from "providers/AppStyle";
import PriceText from "components/atoms/Price/Price";
import { render, fireEvent } from "helpers/test-utils";
import ProductName from "components/atoms/ProductName/ProductName";
import renderer from "react-test-renderer";
import ImgText from "components/atoms/ImgText/ImgText";
import { fn } from "moment";

const mockProduct = jest.mock({
  ProductPicUrl: "assets/images/products-image/HT-1000.jpg",
  Status: "Unavailable",
  Name: "Computer",
  Price: "50",
});
const mockStatus = jest.mock({
  unavailable: "unavailable",
  available: "available",
});
const mockClick = jest.mock(fn);

describe("Test button component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <>
            <StyledElement onClick={mockClick}>
              <StyledElementImg url={mockProduct.ProductPicUrl}>
                <StyledElementAccess unavailable={mockStatus.unavailable}>
                  <ImgText imgText={mockProduct.Status} isProduct={true} />
                </StyledElementAccess>
              </StyledElementImg>
              <StyledElementDescription>
                <ProductName productName={mockProduct.Name} details={false} />
                <PriceText price={mockProduct.Price} />
              </StyledElementDescription>
            </StyledElement>
          </>
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
