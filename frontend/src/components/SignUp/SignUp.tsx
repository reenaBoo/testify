import React from 'react';
import {
  AuthContainer,
  StyledForm,
  FormTitle,
  InputWrapper,
  Label,
  Input,
  SpanIcon,
  ErrorText,
  ConfirmButton,
} from './SignUp.style';
import useForm from '../../hooks/useForm';

function SignUp() {

  const formLogin = () => {

    console.log("Callback function when form is submitted!");
    console.log("Form Values ", values);
  }

  const {handleChange, values, errors, isError, handleSubmit } = useForm(formLogin);

  return (
    <AuthContainer>
      <StyledForm onSubmit={handleSubmit}>
        <FormTitle>Sign up</FormTitle>
        <InputWrapper>
          <Label isError={isError}>
            <Input name="name" type="text" placeholder="Enter your name" onChange={handleChange} min="5" required />
            <SpanIcon></SpanIcon>
          </Label>
              <ErrorText isError={isError}>{errors.name}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label isError={isError}>
            <Input name="email" type="email" placeholder="Enter your email" onChange={handleChange} required />
            <SpanIcon></SpanIcon>
          </Label>

          <ErrorText isError={isError}>{errors.email}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label isError={isError}>
            <Input name="password" type="password" placeholder="Create password" onChange={handleChange} min="8" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText isError={isError}>{errors.password}</ErrorText>
        </InputWrapper>
        {/*<InputWrapper>*/}
        {/*  <Label isError={isError}>*/}
        {/*    <Input name="confirmPassword" type="password" placeholder="Confirm password"  />*/}
        {/*    <SpanIcon></SpanIcon>*/}
        {/*  </Label>*/}
        {/*  <ErrorText>there would be error</ErrorText>*/}
        {/*</InputWrapper>*/}
        <ConfirmButton type="submit">sign up</ConfirmButton>
      </StyledForm>
    </AuthContainer>
  );
}

export default SignUp;
