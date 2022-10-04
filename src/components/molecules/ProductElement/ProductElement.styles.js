import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledElement = styled.div`
  width: 263px;
  height: 429px;
  box-shadow: -5px 7px 20px -13px rgba(66, 68, 90, 1);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  margin: 10px 0px;
`;

export const StyledElementImg = styled.div`
  background-image: url(${(props) => props.url});
  background-position: center;
  width: 100%;
  height: 70%;
  background-repeat: no-repeat;
  background-size: contain;
  padding: 10px;
`;
export const StyledElementDescription = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 30%;
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
