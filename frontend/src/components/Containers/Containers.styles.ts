import styled from 'styled-components';
import IContainer from '../../interfaces/IContainer';

export const Container = styled.div<IContainer>`
  display: ${(props) => (props.grid ? 'grid' : 'flex')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${props => props.jc};
  align-items: ${props => props.ai};
  position: relative;

  ${(props) =>
    props.grid &&
    `
  grid-template-columns: repeat(3, minmax(200px, max-content));
  gap: 30px;
  `}
`;

export const SectionContainer = styled(Container)`
  padding: 40px;
`
