import React, { useEffect, useState } from 'react';
import { Button, List, ListWrapper, OrgList } from './IngElements';
const IngredientsList = ({ arr }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      <Button onClick={() => setIsActive(!isActive)}>
        {isActive ? 'Close Ingredients' : 'See Ingredients'}
      </Button>
      {isActive && (
        <ListWrapper>
          <OrgList style={{ paddingLeft: '0' }}>
            {arr.map((i) => (
              <List key={i.id} className='text-start'>
                {i.name}: {Math.fround(i.amount).toFixed(2)} {i.unit}{' '}
              </List>
            ))}
          </OrgList>
        </ListWrapper>
      )}
    </>
  );
};

export default IngredientsList;
