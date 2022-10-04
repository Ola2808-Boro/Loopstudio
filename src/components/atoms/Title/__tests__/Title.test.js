import "jest-styled-components";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import AppStyle from "providers/AppStyle";
import { StyledTitle } from "components/atoms/Title/Title.styles";
import Title from "components/atoms/Title/Title";
describe("Test title component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <StyledTitle />
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("test rendering", () => {
    render(
      <AppStyle>
        <Title />
      </AppStyle>
    );
    expect(screen.getByRole("headingu", { name: /that/i })).toBeInTheDocument();
  });
});
