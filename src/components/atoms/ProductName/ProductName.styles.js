import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledProductName = styled.p`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.black};
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  line-height: 1.2em;
  padding: 10px 10px;
  font-size: ${(props) =>
    props.details
      ? ({ theme }) => theme.fontSizes.l
      : ({ theme }) => theme.fontSizes.m};

  font-weight: bold;
`;
