import "jest-styled-components";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import AppStyle from "providers/AppStyle";
import { StyledDescription } from "components/atoms/Description/Description.styles";
describe("Test button component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <StyledDescription />
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
