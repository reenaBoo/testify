import React from 'react';
import { StyledCard, CardTitle, CardInfo, CardDescription } from './Card.style';

function Card() {
  return (
    <StyledCard>
      <CardTitle>Lorem</CardTitle>
      <CardInfo>name, date</CardInfo>
      <CardDescription>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
        galley of type and scrambled it to make a type specimen book. It has survived
      </CardDescription>
    </StyledCard>
  );
}

export default Card;
