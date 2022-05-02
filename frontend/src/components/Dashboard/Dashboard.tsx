import React from 'react';
import { Container, SectionContainer } from '../Containers/Containers.styles';
import CardList from '../CardList/CardList';
import { lists } from '../../utils/contants';
import { SectionTitle } from './Dashboard.styles';
import SearchForm from "../SearchForm/SearchForm";

function Dashboard({ title }: any) {
  return (
    <SectionContainer column>
      <SearchForm/>
      <SectionTitle>{title}</SectionTitle>
      <Container grid>
        {lists.map(({text, color}, index) => (
          <CardList title={text} color={color} key={`list-${index}`} />
        ))}
      </Container>
    </SectionContainer>
  );
}

export default Dashboard;
