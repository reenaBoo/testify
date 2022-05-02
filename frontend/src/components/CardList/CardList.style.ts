import styled from 'styled-components';
import { Container } from '../Containers/Containers.styles';

export const ListTitle = styled.h2`
  font-size: 16px;
  font-weight: 700;
  margin: 0;
  text-transform: capitalize;
`;

export const ListContainer = styled(Container)`
  padding: 20px 0;
`

export const ListRow = styled(Container)<{color: any}>`
  padding-bottom: 20px;
  border-bottom: 2px solid ${props => props.color};
`

export const DotsIcon = styled.div`
  width: 20px;
  background-image: radial-gradient(circle,#A1A5A9 1px,transparent 2px);
  background-size: 33.33%;
`
