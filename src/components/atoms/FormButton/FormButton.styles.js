import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledFormButton = styled.input`
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSizes.m};
  font-family: "Alata", sans-serif;
  letter-spacing: 2px;
  border: 1.5px solid ${({ theme }) => theme.colors.black};
  text-transform: uppercase;
  ${(props) => {
    if (props.size === "small") {
      return `
      
      padding: 5px 20px;
   
    `;
    } else if (props.size === "medium") {
      return `
      
      padding: 7px 30px;
   
    `;
    } else {
      return `
      padding: 10px 50px;
   
    `;
    }
  }}
  background-color: ${({ theme }) => theme.colors.black};
  margin: 10px;
  max-width: 300px;
`;
