import React, { useState } from 'react';
import { Button, InstWrapper, StepNum, StepDetail } from './InstElements';

const InstructionsList = ({ arr }) => {
  const [isActive, setIsActive] = useState(false);

  if (arr.length > 0) {
    return (
      <>
        <Button onClick={() => setIsActive(!isActive)}>
          {isActive ? 'Close Instructions' : 'See Instructions'}
        </Button>

        {isActive && (
          <InstWrapper>
            {arr.map((item, i) => (
              <div key={i}>
                <p>{item.name !== '' ? 'Step:' + item.name : ''}</p>
                {item.steps.map((s) => (
                  <div>
                    <StepNum>Step {s.number}:</StepNum>
                    <StepDetail>{s.step}</StepDetail>
                  </div>
                ))}
              </div>
            ))}
          </InstWrapper>
        )}
      </>
    );
  } else {
    return (
      <div>
        <p>No Instructions</p>
      </div>
    );
  }
};

export default InstructionsList;
