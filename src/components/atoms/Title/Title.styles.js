import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledTitle = styled.h1`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.white};
  font-family: "Josefin Sans", sans-serif;
  letter-spacing: 3px;
  border: 2px solid ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  line-height: 1.4em;
  padding: 15px 15px;
  width: 100%;
  top: 50%;

  @media ${device.tablet} {
    padding: 15px 50px;
    width: 60%;
    top: 50%;
  }
  @media ${device.laptop} {
    width: 50%;
  }
  @media ${device.laptopL} {
    width: 40%;
  }
`;
