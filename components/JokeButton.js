import React, { useState } from 'react';
import getJoke from '../api/jokeData';
import Joker from './Joker';

export default function JokeButton() {
  const [joke, setJoke] = useState({});
  const [btnDisplay, setbtnDisplay] = useState('Get A Joke');

  const getAJoke = () => {
    getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery,
      });

      setbtnDisplay('Get Punchline');
    });
  };

  return (
    <>
      <Joker joke={joke} btnDisplay={btnDisplay} />
      {
        btnDisplay === 'Get A Joke' || btnDisplay === 'Get A New Joke' ? <button type="button" onClick={getAJoke}>{btnDisplay}</button>
          : <button type="button" onClick={() => setbtnDisplay('Get A New Joke')}>{btnDisplay}</button>
      }
    </>
  );
}
