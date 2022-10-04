import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledSectionTitle = styled.h2`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.black};
  font-family: "Josefin Sans", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.l};
  letter-spacing: 2px;
  line-height: 1.4em;
  text-align: center;
  text-transform: uppercase;
  margin: 20px 0px;
  ${(props) => {
    if (props.isMargin) {
      return `
        padding-bottom: 30px;
        `;
    }
  }}

  @media ${device.desktop} {
    text-align: left;
  }
`;
