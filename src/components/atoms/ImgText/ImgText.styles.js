import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledImgText = styled.p`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.white};
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 2px;
  text-transform: uppercase;
  line-height: 1.2em;
  font-size: ${({ theme }) => theme.fontSizes.l};
  width: 70%;
  padding: 10px 10px 10px 30px;

  ${(props) => {
    if (props.isProduct) {
      return `
        line-height: 1em;
        font-size: ${({ theme }) => theme.fontSizes.m};
        padding: 0px;
        `;
    }
  }}
`;
