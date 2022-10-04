import styled from "styled-components";
import { device } from "helpers/breakpoints";
import { ReactComponent as icon } from "assets/icons/icon-close.svg";

export const StyledDetailsSection = styled.div`
  width: 263px;

  position: fixed;
  top: 30%;
  left: calc(50% - 131.5px);
  padding: 20px;
  display: flex;
  flex-direction: column;

  box-shadow: -5px 7px 20px -13px rgba(66, 68, 90, 1);
  background-color: white;

  @media (${device.tablet}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 603px;
    height: 60%;
    left: calc(50% - 300px);
  }
  @media (${device.laptop}) {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 630px;
    height: 60%;
    left: calc(50% - 315px);
  }
`;

export const StyledIconCross = styled(icon)`
  align-self: flex-end;
`;
export const StyledElementAccess = styled.div`
  ${(props) => {
    if (props.unavailable) {
      return `
      background-color: red;
        `;
    } else {
      return `
      background-color: green;
        `;
    }
  }}

  display: inline-block;
  padding: 3px;

  //TODO:change color
`;

export const StyledElementImg = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  width: 50%;
  height: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
`;
export const StyledElementDescription = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  width: 100%;

  @media (${device.tablet}) {
    width: 50%;
  }
  padding: 0px 10px;
`;

export const DetailsText = styled.p`
  align-self: start;
  color: ${({ theme }) => theme.colors.black};
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.1em;
  font-size: ${({ theme }) => theme.fontSizes.m};

  ${(props) => {
    if (props.description) {
      return `
        font-weight: bold;
        `;
    }
  }}
`;
export const DetailsTextSpan = styled.span`
  align-self: start;
  color: ${({ theme }) => theme.colors.lavenderIndigo};
  font-family: "Josefin Sans", sans-serif;
  line-height: 1.1em;
  font-size: ${({ theme }) => theme.fontSizes.m};
  margin-right: 3px;
  font-weight: bold;
`;
