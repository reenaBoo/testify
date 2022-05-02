import React from 'react';
import { ListContainer, ListTitle, DotsIcon, ListRow } from './CardList.style';
import ICardList from '../../interfaces/ICardList';
import Card from '../Card/Card';

function CardList({ title, color }: ICardList) {
  return (
    <ListContainer column>
      <ListRow jc={'space-between'} color={color}>
        <ListTitle>{title}</ListTitle>
        <DotsIcon />
      </ListRow>
      <Card />
      <Card />
    </ListContainer>
  );
}

export default CardList;
