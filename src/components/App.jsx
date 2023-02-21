import React, { useState } from 'react';
import { Message } from './feedback/Message';
import styled from 'styled-components';
import { Stats } from './feedback/Statistics';
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledBtn = styled.button`
  width: 75px;
  height: 25px;
  border-radius: 10px;
  border: none;
  &:hover {
    background-color: #2196f3;
    color: white;
  }
`;
const BtnList = styled.ul`
  display: flex;
  gap: 25px;
`;

export const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const handleIncrementGoodFeedback = () => setGoodFeedback(goodFeedback + 1);
  const handleIncrementNeutralFeedback = () =>
    setNeutralFeedback(neutralFeedback + 1);
  const handleIncrementBadFeedback = () => setBadFeedback(badFeedback + 1);

  const countTotalFeedback = () => {
    const total = goodFeedback + neutralFeedback + badFeedback;
    return total;
  };
  const countPositiveFeedbackPercentage = () => {
    const positivePercent =
      countTotalFeedback() === 0
        ? 0
        : (goodFeedback / countTotalFeedback()) * 100;
    return Number(positivePercent.toFixed(0));
  };
  return (
    <Container>
      <h1>Please leave feedback!</h1>
      <BtnList>
        <li>
          <StyledBtn onClick={handleIncrementGoodFeedback}>Good</StyledBtn>
        </li>
        <li>
          <StyledBtn onClick={handleIncrementNeutralFeedback}>
            Neutral
          </StyledBtn>
        </li>
        <li>
          <StyledBtn onClick={handleIncrementBadFeedback}>Bad</StyledBtn>
        </li>
      </BtnList>
      {countTotalFeedback() === 0 ? (
        <Message message="There is no feedback" />
      ) : (
        <Stats
          statTitle="Statistics"
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          total={countTotalFeedback()}
          percent={countPositiveFeedbackPercentage()}
        />
      )}
    </Container>
  );
};
