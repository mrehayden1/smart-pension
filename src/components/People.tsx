import { Component, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import Button from './Button';
import PersonCard from './PersonCard';
import { Person } from '../types';
import { pickPair } from '../util';

type Props = {
  onDeal?: (hands: [ Person, Person ]) => void;
  people: Person[];
}

type State = {
  hands: [ Person, Person ] | null;
}

const Cards = styled.div`
  display: flex;
  justify-content: center;
`;

const Result = styled.strong`
  display: block;
  margin-bottom: 24px;
  text-align: center;
`;

const Footer = styled.div`
  text-align: center;
`;

export default class People extends Component<Props, State> {

  constructor(props: Props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);

    const { onDeal, people } = props;
    const hands = pickPair(people);
    this.state = { hands };

    onDeal && hands && onDeal(hands);
  }

  handleClick() {
    const { onDeal, people } = this.props;
    const hands = pickPair(people);
    this.setState({ hands });
    onDeal && hands && onDeal(hands);
  }

  render() {
    const { hands } = this.state;

    if (hands === null) {
      return (
        <div>Not enough people to play.</div>
      );
    } else {
      const [ one, two ] = hands;
      return (
        <>
          <Result>
            {one.height === two.height ? 'Draw' : (
              one.height > two.height ? (
                'Player 1 Wins'
              ) : (
                'Player 2 Wins'
              )
            )}
          </Result>
          <Cards>
            <div>
              Player 1 {one.height > two.height ? '- Winner' : ''}
              <PersonCard person={one} />
            </div>
            <div>
              Player 2 {two.height > one.height ? '- Winner' : ''}
              <PersonCard person={two} />
            </div>
          </Cards>
          <Footer>
            <Button onClick={this.handleClick}>
              Next Game
            </Button>
            <p>
              <Link to={'/people/history'}>
                See game history
              </Link>
            </p>
          </Footer>
        </>
      );
    }
  }
}
