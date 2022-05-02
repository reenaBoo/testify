import styled from 'styled-components';
import { NavLink } from "react-router-dom";

export const StyledAside = styled.aside<{pathProps: boolean}>`
  width: 250px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-right: 1px solid ${({ theme }) => theme.rowGrey};
  padding: 40px;
`;

export const Logo = styled.img`
  width: 50px;
  height: 50px;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 15px;
  line-height: 1.6;
  margin: 0 0 10px 0;
  display: flex;
  align-items: center;
  text-transform: capitalize;
  color: ${({ theme }) => theme.primaryGrey};
  padding: 10px 10px 10px 20px;
  &.active {
    color: ${({ theme }) => theme.backgroundColor};
    background-color: ${({ theme }) => theme.primaryBlue};
    border-radius: 20px;
  }
  &.active div {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
  &:hover {
    border-radius: 20px;
    outline: 1px solid ${({ theme }) => theme.primaryGrey};
  }
`;

export const LinkIcon = styled.div<{ icon: any }>`
  mask: url(${(props) => props.icon}) no-repeat;
  background-color: ${({ theme }) => theme.primaryGrey};
  margin-right: 20px;
  width: 22px;
  height: 22px;
`

export const LogOutButton = styled.button`
  border: none;
  text-decoration: none;
  font-size: 14px;
  padding: 10px 10px 10px 20px;
  color: ${({ theme }) => theme.primaryGrey};
  margin: 0;
  text-align: left;
  display: flex;
  align-items: center;
  background-color: transparent;

  &:hover {
    color: ${({ theme }) => theme.backgroundColor};
    background-color: ${({ theme }) => theme.primaryBlue};
    border-radius: 20px;
    cursor: pointer;
  }

  &:hover div {
    background-color: ${({ theme }) => theme.backgroundColor};
  }
`;
