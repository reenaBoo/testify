import React from 'react';
import {
  AuthContainer,
  StyledForm,
  FormTitle,
  InputWrapper,
  Label,
  Input,
  Icon,
  ErrorText,
  ConfirmButton,
  Paragraph,
  SignUpLink,
} from './SignIn.style';
import { Container } from '../Containers/Containers.styles';
import useForm from '../../hooks/useForm';
import lockIcon from '../../assets/images/lock-icon.svg';

function SignIn({ onSubmit }: any) {
  const formLogin = () => {
    onSubmit(values);

    console.log('Callback function when form is submitted!');
    console.log('Form Values ', values);
  };

  const { handleChange, values, errors, isError, handleSubmit } = useForm(formLogin);
  return (
    <AuthContainer>
      <StyledForm onSubmit={handleSubmit} noValidate>
        <FormTitle>Welcome back</FormTitle>
        <InputWrapper>
          <Label>
            <Input
              name="email"
              type="email"
              placeholder="Enter your email"
              onChange={handleChange}
              required
            />
            <Icon />
          </Label>
          <ErrorText isError={isError}>{errors.email}</ErrorText>
        </InputWrapper>
        <InputWrapper>
          <Label>
            <Input
              name="password"
              type="password"
              placeholder="Enter your password"
              onChange={handleChange}
              required
            />
            <Icon src={lockIcon} />
          </Label>
          <ErrorText isError={isError}>{errors.password}</ErrorText>
        </InputWrapper>
        <ConfirmButton type="submit">sign in</ConfirmButton>
        <Container style={{ marginTop: '30px' }}>
          <Paragraph>Don't have an account? </Paragraph>
          <SignUpLink to="/signup">Sign up now</SignUpLink>
        </Container>
      </StyledForm>
    </AuthContainer>
  );
}

export default SignIn;
