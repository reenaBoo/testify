import styled from 'styled-components';
import searchIcon from '../../assets/images/search-icon.svg';

export const StyledForm = styled.form`
  width: 300px;
  padding: 5px;
  border: none;
  position: relative;
  align-self: flex-end;
  margin-bottom: 20px;
`;

export const SearchInput = styled.input`
  padding: 10px 15px;
  margin: 0;
  width: 100%;
  color: ${({ theme }) => theme.primaryBlack};
  font-size: 12px;
  border: 1px solid ${({ theme }) => theme.rowGrey};
  border-radius: 10px;
  &:focus {
    outline: 1.2px solid #6e98ff;
    box-shadow: 0 10px 20px rgb(0 0 0 / 5%)
  }
`;
export const SearchButton = styled.button`
  position: absolute;
  right: 10px;
  top: 12px;
  width: 22px;
  height: 22px;
  background-image: url(${searchIcon});
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  &:hover {
    cursor: pointer;
  }
`;
