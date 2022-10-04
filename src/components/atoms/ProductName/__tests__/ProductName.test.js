import { render, screen } from "helpers/test-utils";
import renderer from "react-test-renderer";
import ProductName from "components/atoms/ProductName/ProductName";
import AppStyle from "providers/AppStyle";
import { StyledProductName } from "components/atoms/ProductName/ProductName.styles";
describe("Test Product Name component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <StyledProductName />
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("test render component", async () => {
    render(<ProductName productName={"Computer"} details={true} />);
    const element = screen.getByText("Computer");
    expect(element).toBeInTheDocument();
    expect(element).not.toHaveStyle("font-size: 25px");
  });
});
