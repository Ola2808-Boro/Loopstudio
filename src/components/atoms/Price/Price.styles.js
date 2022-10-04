import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledPrice = styled.p`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.vividMulberry};
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 0.2px;
  padding: 15px 15px;
  font-size: ${(props) =>
    props.details
      ? ({ theme }) => theme.fontSizes.l
      : ({ theme }) => theme.fontSizes.m};
  font-weight: bold;
`;
