import React, { useEffect, useState } from 'react';
import { Button, List, ListWrapper, OrgList } from './IngElements';
const IngredientsList = ({ id, arr }) => {
  const [isActive, setIsActive] = useState(false);

  //   useEffect(() => {
  //     if (isActive) {
  //       setIsActive(false);
  //     } else {
  //       setIsActive(true);
  //     }
  //   }, [id]);

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
                {/* <span>
                <input type='checkbox' value={i} />
              </span> */}
                {i.name}: {Math.fround(i.amount)} {i.unit}{' '}
              </List>
            ))}
          </OrgList>
        </ListWrapper>
      )}
    </>
  );
};

export default IngredientsList;
