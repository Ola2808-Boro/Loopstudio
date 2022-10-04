import styled from "styled-components";
import { device } from "helpers/breakpoints";

export const StyledFormSection = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  padding: 10px;
  min-height: 50vh;
  margin: 20px;

  width: 70%;
  border: 1px solid black;
  border-radius: 10px;
  box-shadow: -5px 7px 20px -13px rgba(66, 68, 90, 1);
  @media (${device.laptop}) {
    width: 40%;
  }
  @media (${device.laptopL}) {
    width: 30%;
  }
`;
