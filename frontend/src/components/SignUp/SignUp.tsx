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
            <Input name="email" type="email" placeholder="example@gmail.com" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input name="password" type="password" placeholder="password" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input name="confirmPassword" type="password" placeholder="password" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <ConfirmButton>sign up</ConfirmButton>
      </StyledForm>
    </AuthContainer>
  );
}

export default SignUp;
