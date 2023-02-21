import React from 'react';
import PropTypes from 'prop-types';

export const Stats = ({ good, neutral, bad, total, percent, statTitle }) => {
  return (
    <>
      <h2>{statTitle}</h2>
      <ul>
        <li>Good:{good}</li>
        <li>Neutral:{neutral}</li>
        <li>Bad:{bad}</li>
        <li>Total:{total}</li>
        <li>Positive feedback: {percent}%</li>
      </ul>
    </>
  );
};
Stats.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  percent: PropTypes.number,
  statTitle: PropTypes.string,
};
