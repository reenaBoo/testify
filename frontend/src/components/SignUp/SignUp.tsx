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
  ConfirmButton
} from './SignUp.style';

function SignUp() {
  return (
    <AuthContainer>
      <StyledForm>
        <FormTitle>Sign up</FormTitle>
        <InputWrapper>
          <Label>
            <Input name="name" type="text" placeholder="Enter your name" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input name="email" type="email" placeholder="Enter your email" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input name="password" type="password" placeholder="Create password" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input name="confirmPassword" type="password" placeholder="Confirm password" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <ConfirmButton type="submit">sign up</ConfirmButton>
      </StyledForm>
    </AuthContainer>
  );
}

export default SignUp;
