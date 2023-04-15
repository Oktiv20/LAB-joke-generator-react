import React from 'react';
import PropTypes from 'prop-types';

export default function Joker({ joke, btnDisplay }) {
  return (
    <>
      <h1>{ joke.setup }</h1>
      <p>{ btnDisplay !== 'Get Punchline' ? joke.punchline : '' }</p>
    </>
  );
}

Joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  btnDisplay: PropTypes.string,
};

Joker.defaultProps = {
  joke: {
    setup: 'Default Setup',
    punchline: 'Default Punchline',
  },
  btnDisplay: 'Get A Joke',
};
