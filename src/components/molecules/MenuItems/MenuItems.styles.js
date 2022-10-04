import styled from "styled-components";
import { device } from "helpers/breakpoints";
export const StyledMenuSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${device.tablet} {
    flex-direction: ${(props) => (props.isInFooter ? "column" : "row")};
  }
  margin-top: ${(props) => (props.isOpen ? "100px" : "0px")};
`;
