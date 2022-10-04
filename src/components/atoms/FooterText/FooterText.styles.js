import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledFooterText = styled.h1`
  color: ${({ theme }) => theme.colors.darkGray};
  font-family: "Josefin Sans", sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.s};
  padding: 20px 0px 10px 0px;
`;
