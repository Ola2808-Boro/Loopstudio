import styled from "styled-components";

export const StyledErrorText = styled.p`
  color: ${({ theme }) => theme.colors.red};
  font-size: ${({ theme }) => theme.fontSizes.s};
  ${(props) => {
    if (props.text) {
      return `
             &::before {
            display: inline;
            content: "⚠ ";
            `;
    }
  }}
  }

`;
