import React from 'react';
import { StyledForm, SearchInput, SearchButton } from './SearchForm.styles';

function SearchForm() {
  return (
    <StyledForm>
      <SearchInput placeholder="Search..." />
      <SearchButton type="submit"/>
    </StyledForm>
  );
}

export default SearchForm;
