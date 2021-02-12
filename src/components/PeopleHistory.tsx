import styled from 'styled-components';

import PersonCard from './PersonCard';
import { Person } from '../types';

const Cards = styled.div`
  display: flex;
  justify-content: center;
`;

type Props = {
  handsHistory: Array<[ Person, Person ]>;
};

export default function({ handsHistory }: Props) {
  return (
    <>
      <div>People History</div>
      {handsHistory
        .map(([ one, two ], i) => (
          <Cards key={i}>
            <PersonCard person={one} />
            <PersonCard person={two} />
          </Cards>
        ))}
    </>
  );
}
