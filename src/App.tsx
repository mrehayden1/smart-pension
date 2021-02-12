import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { useState } from 'react';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';

import { Maybe, Starship, useAllPeopleQuery, useAllStarshipsQuery } from './generated/graphql';
import People from './components/People';
import PeopleHistory from './components/PeopleHistory';
import { Person } from './types';

const client = new ApolloClient({
  uri: 'https://swapi-graphql.netlify.app/.netlify/functions/index',
  cache: new InMemoryCache()
});

const Loading = styled.p`
  text-align: center;
`;

const Nav = styled.nav`
  margin-bottom: 24px;
  text-align: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li {
    display: inline-block;
  }
`;

function App() {
  const [ peopleHistory, setPeopleHistory ] = useState([] as Array<[ Person, Person ]>);
  const { data: peopleResponse } = useAllPeopleQuery();
  const { data: starshipsResponse } = useAllStarshipsQuery();

  function handlePeopleDeal(hands: [ Person, Person ]): void {
    setPeopleHistory(peopleHistory.concat([ hands ]));
  }

  // The SWAPI schema contains many nullable fields, so we need to do all this
  // to keep TypeScript happy.
  const people = peopleResponse && peopleResponse.allPeople && peopleResponse.allPeople.edges && (
    peopleResponse
      .allPeople
      .edges
      .map((edge): Person[] => {
        if (
          edge && edge.node && edge.node.name && edge.node.height
        ) {
          const { name, height } = edge.node;
          return [{ name, height }];
        } else {
          return [];
        }
      })
      .flat()
  );

  const starships = starshipsResponse && starshipsResponse.allStarships && starshipsResponse.allStarships.edges && (
    starshipsResponse
      .allStarships
      .edges
      .map((edge) => edge && edge.node ? [ edge.node ] : [])
      .flat()
  );

  return !people || !starships ? (
    <Loading>Loading...</Loading>
  ) : (
    <Router>
      <Nav>
        Play a new game<br/>
        <ul>
          <li>
            <Link to="/people">People</Link>
          </li>
          &nbsp;or&nbsp;
          <li>
            <Link to="/starships">Starships</Link>
          </li>
        </ul>
      </Nav>
      <Switch>
        <Route path="/people/history">
          <PeopleHistory handsHistory={peopleHistory} />
        </Route>
        <Route path="/people">
          <People onDeal={handlePeopleDeal} people={people} />
        </Route>
        <Route path="/starships">
          Starships
        </Route>
      </Switch>
    </Router>
  );
}

export default function() {
  return (
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
}
