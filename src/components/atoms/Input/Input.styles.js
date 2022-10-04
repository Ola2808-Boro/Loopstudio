import styled from "styled-components";
import { device } from "helpers/breakpoints";
import { theme } from "assets/styles/theme";

export const StyledInput = styled.input`
  outline: none;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 10px;
  width: 100%;
  max-width: 400px;
  min-width: 300px;
  ${(props) => {
    if (props.size === "s") {
      return `
      
      font-size: ${({ theme }) => theme.fontSizes.s};
      padding: 5px 10px;
   
    `;
    } else if (props.size === "m") {
      return `
      
      font-size: ${({ theme }) => theme.fontSizes.m};
      padding: 7px 10px;
   
    `;
    } else if (props.size === "l") {
      return `
      
      font-size: ${({ theme }) => theme.fontSizes.l};
      padding: 9px 10px;
   
    `;
    } else {
      return `
      font-size: ${({ theme }) => theme.fontSizes.m};
      padding: 7px 10px;
   
    `;
    }
  }}
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.vividMulberry};
  }
`;
