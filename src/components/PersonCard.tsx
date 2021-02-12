import styled from 'styled-components';

import { Person } from '../types';

type Props = {
  person: Person
};

export const Card = styled.div`
  border: 1px solid black;
  border-radius: 2px;
  margin-bottom: 24px;
  margin-right: 24px;
  padding: 24px;
  width: 200px;
`;

export default function({ person }: Props) {
  return (
    <Card>
      <dl>
        <dt>Name</dt>
        <dd>{person.name}</dd>
        <dt>Height</dt>
        <dd>{person.height}</dd>
      </dl>
    </Card>
  );
}
