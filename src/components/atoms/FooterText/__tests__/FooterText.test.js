import { render, screen } from "helpers/test-utils";
import renderer from "react-test-renderer";
import { StyledFooterText } from "../FooterText.styles";
import FooterText from "components/atoms/FooterText/FooterText";
import AppStyle from "providers/AppStyle";
describe("test Footer text", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <StyledFooterText />
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  //
});
