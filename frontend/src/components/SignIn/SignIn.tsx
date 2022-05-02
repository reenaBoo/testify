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
  Paragraph,
  SignUpLink
} from './SignIn.style';
import { Container } from '../Containers/Containers.styles';

function SignIn() {
  return (
    <AuthContainer>
      <StyledForm>
        <FormTitle>Welcome back</FormTitle>
        <InputWrapper>
          <Label>
            <Input name="email" type="email" placeholder="Enter your email" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input name="password" type="password" placeholder="Enter your password" required />
            <SpanIcon></SpanIcon>
          </Label>
          <ErrorText>there would be error</ErrorText>
        </InputWrapper>
        <ConfirmButton type="submit">sign in</ConfirmButton>
        <Container style={{marginTop: '30px'}}>
          <Paragraph>Don't have an account? </Paragraph>
          <SignUpLink to="/signup">Sign up now</SignUpLink>
        </Container>
      </StyledForm>
    </AuthContainer>
  );
}

export default SignIn;
