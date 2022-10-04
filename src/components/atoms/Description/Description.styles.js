import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledDescription = styled.p`
  color: ${({ theme }) => theme.colors.darkGray};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-weight: bold;
  font-family: "Alata", sans-serif;
  text-align: center;

  @media ${device.desktop} {
    text-align: left;
  }
`;
