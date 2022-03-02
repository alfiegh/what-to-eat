import React, { useState, useEffect } from 'react';
import { FcClock, FcTodoList } from 'react-icons/fc';
import { GiMeal } from 'react-icons/gi';
import Parser from 'html-react-parser';
import {
  MealsContainer,
  MealCard,
  MealImg,
  MealTitle,
  ReadyIn,
  Servings,
  ImgContainer,
  Details,
  Ingredients,
  Summary,
  DetailsP,
} from './RanMealElements';
import IngredientsList from '../Ingredients/IngredientsList';
import InstructionsList from '../Instructions/InstructionsList';

const RandomMeals = ({ result }) => {
  const { recipes } = result;
  const [uniqueId, setUniqueId] = useState('');
  const [btnActive, setBtnActive] = useState(0);

  // console.log(recipes);
  // console.log(uniqueId);

  const handleClick = (i, id) => {
    setUniqueId(id);
    setBtnActive(i);
  };

  return (
    <>
      <MealsContainer>
        {recipes &&
          recipes.map((meal, i) => (
            <MealCard
              key={meal.id}
              onClick={() => handleClick(i, meal.id)}
              className={meal.id === uniqueId ? 'active' : ''}
            >
              <ImgContainer>
                <MealImg src={meal.image} className='img-fluid' />
              </ImgContainer>

              <MealTitle>{meal.title}</MealTitle>
              <hr style={{ height: '1px', margin: '5px' }} />
              <Summary>
                <p>{Parser(meal.summary)}</p>
              </Summary>
              <Details>
                <ReadyIn>
                  <FcClock className='mx-2' />
                  {meal.readyInMinutes}m
                </ReadyIn>

                <Ingredients>
                  <FcTodoList className='mx-2' />{' '}
                  {
                    meal.extendedIngredients.filter(
                      (v, i, a) =>
                        a.findIndex((t) =>
                          ['id'].every((k) => t[k] === v[k])
                        ) === i
                    ).length
                  }
                </Ingredients>
                <Servings>
                  <GiMeal className='mx-2' /> {meal.servings}
                </Servings>
              </Details>
              <div className='d-flex justify-content-center'>
                <div style={{ width: 'calc(100%/2)', textAlign: 'center' }}>
                  <IngredientsList arr={meal.extendedIngredients} />
                </div>
                <div style={{ width: 'calc(100%/2)', textAlign: 'center' }}>
                  <InstructionsList arr={meal.analyzedInstructions} />
                </div>
              </div>
            </MealCard>
          ))}
      </MealsContainer>
    </>
  );
};

export default RandomMeals;
