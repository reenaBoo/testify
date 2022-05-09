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
} from './SignUp.style';
import useForm from '../../hooks/useForm';
import { mainApi } from '../../utils/MainApi';
import lockIcon from '../../assets/images/lock-icon.svg';

function SignUp({ onSubmit }: any) {
  const formLogin = () => {
    mainApi
      .register(values)
      .then(() => {
        onSubmit(values);
      })
      .catch((err) => {
        console.log(err);
      });
    console.log('Callback function when form is submitted!');
    console.log('Form Values ', values);
  };

  const { handleChange, values, errors, isError, handleSubmit } = useForm(formLogin);

  return (
    <AuthContainer>
      <StyledForm onSubmit={handleSubmit} noValidate>
        <FormTitle>Sign up</FormTitle>
        <InputWrapper>
          <Label>
            <Input
              name="name"
              type="text"
              placeholder="Enter your name"
              onChange={handleChange}
              min="5"
              required
            />
            <Icon />
          </Label>
          <ErrorText isError={isError}>{errors.name}</ErrorText>
        </InputWrapper>
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
              placeholder="Create password"
              onChange={handleChange}
              min="8"
              required
            />
            <Icon src={lockIcon} />
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
