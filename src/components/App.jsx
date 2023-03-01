import React, { useState } from 'react';
import { Message } from './feedback/Message';
import { Stats } from './feedback/Statistics';
import { Container, StyledBtn, BtnList } from './styled-components/styles';

export const App = () => {
  const [goodFeedback, setGoodFeedback] = useState(0);
  const [neutralFeedback, setNeutralFeedback] = useState(0);
  const [badFeedback, setBadFeedback] = useState(0);

  const options = ['good', 'neutral', 'bad'];
  const handleIncrementFeedback = option => {
    switch (option) {
      case 'good':
        setGoodFeedback(goodFeedback + 1);
        break;
      case 'neutral':
        setNeutralFeedback(neutralFeedback + 1);
        break;
      case 'bad':
        setBadFeedback(badFeedback + 1);
        break;
      default:
    }
  };

  const total = goodFeedback + neutralFeedback + badFeedback;
  const positivePercent =
    total === 0 ? 0 : ((goodFeedback / total) * 100).toFixed(0);

  return (
    <Container>
      <h1>Please leave feedback!</h1>
      <BtnList>
        {options.map(option => (
          <li key={option}>
            <StyledBtn onClick={() => handleIncrementFeedback(option)}>
              {option}
            </StyledBtn>
          </li>
        ))}
      </BtnList>
      {total === 0 ? (
        <Message message="There is no feedback" />
      ) : (
        <Stats
          statTitle="Statistics"
          good={goodFeedback}
          neutral={neutralFeedback}
          bad={badFeedback}
          total={total}
          percent={positivePercent}
        />
      )}
    </Container>
  );
};
