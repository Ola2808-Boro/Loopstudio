import React from "react";
import PropTypes from "prop-types";
import Input from "components/atoms/Input/Input";
import Button from "components/atoms/Button/Button";
import { useForm } from "react-hook-form";
import { StyledFormSection } from "./FormSection.styles";
import ErrorText from "components/atoms/ErrorText/ErrorText";
import Select from "components/atoms/Select/Select";

import FormButton from "components/atoms/FormButton/FormButton";
const FormSection = (props) => {
  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
    number: "",
  });

  return (
    <StyledFormSection
      onSubmit={handleSubmit((data, e) => {
        console.log(data);
        console.log(Object.keys(data).length);

        e.target.reset();
        clearErrors(errors);
      })}
    >
      <Input
        register={register}
        placeholder="First name"
        label="firstName"
        size="l"
        required="This is required"
        type="text"
      />
      <ErrorText text={errors.firstName?.message} />
      <Input
        register={register}
        label="lastName"
        placeholder="Last name"
        size="l"
        required="This is required"
        type="text"
      />
      <ErrorText text={errors.lastName?.message} />
      <Input
        register={register}
        label="e-mail"
        placeholder="e-mail"
        size="l"
        required="This is required"
        type="e-mail"
      />
      <ErrorText text={errors.email?.message} />
      <Select register={register} />
      <ErrorText text={errors.age?.message} />
      <Input
        register={register}
        label="number"
        placeholder="number"
        size="l"
        required="This is required"
        type="number"
        minLength="9"
      />
      <ErrorText text={errors.number?.message} />
      <FormButton size="medium" />
    </StyledFormSection>
  );
};

FormSection.propTypes = {};

export default FormSection;
