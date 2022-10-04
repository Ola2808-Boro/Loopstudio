import "jest-styled-components";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import AppStyle from "providers/AppStyle";
import { StyledButton } from "components/atoms/Button/Button.styles";
import Button from "../Button";

const textProps = jest.mock("see");
describe("Test button component", () => {
  it("default style", () => {
    const tree = renderer
      .create(
        <AppStyle>
          <StyledButton />
        </AppStyle>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("test rendering", async () => {
    render(
      <AppStyle>
        <Button text={textProps} />
      </AppStyle>
    );
    expect(screen.getByText(/see/i)).toBeInTheDocument();
  });
});
