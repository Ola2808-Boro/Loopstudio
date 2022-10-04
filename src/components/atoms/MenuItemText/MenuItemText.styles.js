import styled from "styled-components";
import { device } from "helpers/breakpoints";
import { Link } from "react-router-dom";
export const StyledMenuItemText = styled(Link)`
  color: ${(props) =>
    props.color ? props.color : ({ theme }) => theme.colors.white};
  font-family: "Josefin Sans", sans-serif;
  margin: 15px 25px;
  font-weight: bold;
  text-decoration: none;
  font-size: ${(props) =>
    props.isOpen
      ? ({ theme }) => theme.fontSizes.l
      : ({ theme }) => theme.fontSizes.m};

  &:hover {
    background-image: linear-gradient(white 0 0);
    background-position: bottom center; /*Adjust the background-position to move the line*/
    background-size: 100% 2px; /*Adjust the background size to control length and height*/
    background-repeat: no-repeat;
  }

  @media ${device.tablet} {
    margin: 17px 10px;
  }
`;
