import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledButton = styled.button`
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: "Alata", sans-serif;
  letter-spacing: 2px;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  padding: 10px 50px;
  background-color: transparent;
  margin: 10px;
  position: relative;
  max-width: 400px;
  &::before {
    background: ${({ theme }) => theme.colors.black};
    content: "";
    position: absolute;
    top: 0%;
    left: 0%;
    z-index: -1;
    transition: all 0.6s ease;
  }

  &::before {
    width: 0%;
    height: 100%;
    color: white;
  }
  &:hover {
    color: white;
  }
  &:hover::before {
    width: 100%;
  }

  @media ${device.laptop} {
    margin-top: 30px;
  }
`;
