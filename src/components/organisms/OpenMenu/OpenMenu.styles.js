import styled from "styled-components";

export const StyledMenuOpen = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  padding: 30px 25px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;
