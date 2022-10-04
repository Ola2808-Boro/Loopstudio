import "jest-styled-components";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import AppStyle from "providers/AppStyle";
import { StyledSectionTitle } from "components/atoms/SectionTitle/SectionTitle.styles";
describe("Test button component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <StyledSectionTitle />
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
