import React from "react";
import PropTypes from "prop-types";
import { StyledForm } from "./Form.styles";
import FormSection from "components/molecules/FormSection/FormSection";
const Form = (props) => {
  return (
    <StyledForm>
      <FormSection />
    </StyledForm>
  );
};

Form.propTypes = {};

export default Form;
