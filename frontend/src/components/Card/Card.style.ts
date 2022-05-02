import styled from 'styled-components';

export const StyledCard = styled.div`
  padding: 20px;
  width: 100%;
  box-shadow: 38px 38px 74px 0 rgba(56,50,124,.06);
  background-color: ${({ theme }) => theme.primaryWhite};
  border-radius: 20px;
  margin-top: 20px;
`;

export const CardTitle = styled.h4`
  font-size: 14px;
  margin: 0 0 10px 0;
`;

export const CardInfo = styled.div`
  display: flex;
  color: ${({ theme }) => theme.primaryGrey};
  font-size: 12px;
  margin: 0 0 10px 0;
`;

export const CardDescription = styled.p`
  font-size: 12px;
  margin: 0;
  color: ${({ theme }) => theme.primaryGrey};
`;
