import styled from 'styled-components';

export const AuthContainer = styled.div`
  position: relative;
  width: 1280px;
  background-color: #fff;
  min-height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    height: 2000px;
    width: 2000px;
    top: -10%;
    right: 48%;
    transform: translateY(-50%);
    background-image: linear-gradient(-45deg, #4481eb 0%, #04befe 100%);
    transition: 1.8s ease-in-out;
    border-radius: 50%;
`;

export const StyledForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px 10px;
  width: 320px;
  z-index: 1;
`;

export const FormTitle = styled.h2`
  font-size: 25px;
  color: #444;
  margin: 0 0 30px 0;
`;

export const InputWrapper = styled.div`
  margin-bottom: 10px;
  width: 100%;

  &:last-of-type {
    margin: 0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: center;
  background-color: #eaeeff;
  border: 1px solid transparent;
  border-radius: 50px;
  height: 40px;
  padding: 0 20px;
  color: ${(p) => p.theme.rowGrey};
`;

export const Input = styled.input`
  width: 100%;
  border: none;
  outline: none;
  background: none;
  margin-left: 10px;
  padding: 10px;
  color: ${(p) => p.theme.primaryBlack};
`;

export const Icon = styled.img`
  width: 17px;
  border: none;
`;

export const ErrorText = styled.div<{ isError: boolean }>`
  font-size: 12px;
  margin-top: 5px;
  margin-left: 16px;
  transition: 0.3s;
  transform: translateY(-20px);
  visibility: hidden;
  color: ${(p) => p.theme.primaryRed};

  ${(p) =>
    p.isError &&
    `
    transform: translate(0);
    visibility: visible;
    
  `}
`;

export const ConfirmButton = styled.button`
  margin-top: 30px;
  width: 100%;
  padding: 10px;
  border: none;
  color: #fff;
  font-size: 17px;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: capitalize;
  border-radius: 50px;
  background-color: ${(p) => p.theme.primaryBlue};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${(p) => p.theme.secondaryBlue};
  }
`;
