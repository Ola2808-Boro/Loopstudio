import Menu from "../HamburgerMenu";
import { render, fireEvent } from "helpers/test-utils";
import renderer from "react-test-renderer";

describe("Test button component", () => {
  it("default style", () => {
    const tree = renderer.create(<Menu />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
