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
  const [ingredients, setIngredients] = useState([]);
  const [instructions, setInstructions] = useState([]);
  const [isVisible, setIsVisible] = useState(false);
  const [arrayIds, setArrayIds] = useState([]);

  console.log(recipes);
  console.log(ingredients);
  // console.log(instructions);
  // console.log(uniqueId);
  // console.log(arrayIds);

  const handleClick = (i, id, extIngredients, directions) => {
    setUniqueId(id);
    setBtnActive(i);
    // const uniqueIng = extIngredients.filter(
    //   (v, i, a) => a.findIndex((t) => ['id'].every((k) => t[k] === v[k])) === i
    // );
    setIngredients(extIngredients);
    setInstructions(directions);
    // setIsVisible(!isVisible);
  };

  // const setArrOfIds = () => {
  //   if (recipes) return recipes.map((r) => r.id);
  // };
  // console.log(setArrOfIds());

  // useEffect(() => {
  //   if (recipes) {
  //     const allIds = recipes.map((r) => r.id);
  //     setArrayIds(allIds);
  //   }
  // }, [recipes]);

  // const showIngredients = () => {
  //   console.log('ingredients');
  //   setIsVisible(!isVisible);
  // };

  // useEffect(() => {
  //   setIngredients(recipes.extIngredients);
  // }, [uniqueId]);

  // let arrOfIds = recipes.map((r) => r.id);
  // console.log(arrOfIds);
  // const currentRecipeId = () => {
  //   let found = arrayIds.find((e) => e === uniqueId);
  //   return found;
  //   return arr.filter((str) => {
  //     return str === id;
  //   });
  // };
  // console.log(found);

  // console.log(currentRecipeId());

  // let uniqBy = ingredients.filter(
  //   (v, i, a) => a.findIndex((t) => ['id'].every((k) => t[k] === v[k])) === i
  // );

  // console.log(uniqBy);

  return (
    <>
      <MealsContainer>
        {recipes &&
          recipes.map((meal, i) => (
            <MealCard
              key={meal.id}
              // onMouseEnter={setUniqueId(meal.id)}
              onClick={() =>
                handleClick(
                  i,
                  meal.id,
                  meal.extendedIngredients,
                  meal.analyzedInstructions
                )
              }
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
                {/* <button onClick={showIngredients}>
                  {isVisible ? 'Close Ingredients' : 'See Ingredients'}
                </button> */}
                <div style={{ width: 'calc(100%/2)', textAlign: 'center' }}>
                  <IngredientsList id={uniqueId} arr={ingredients} />
                </div>
                <div style={{ width: 'calc(100%/2)', textAlign: 'center' }}>
                  <InstructionsList arr={instructions} />
                </div>
              </div>
            </MealCard>
          ))}
      </MealsContainer>

      {/* <div className='container-fluid'>
        <div className='row'>
          {uniqueId && ingredients && (
            <div className='col-md-4'>
              <p className='text-start mt-3'>Get the ingredients ready: </p>
              <ul>
                {ingredients.map((i) => (
                  <li key={i.id} className='text-start'>
                    {i.name}: {Math.fround(i.amount)} {i.unit}{' '}
                    <span>
                      <input type='checkbox' value={i} />
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {uniqueId && instructions && (
            <div className='col-md-8'>
              {instructions.map((item, i) => (
                <div key={i} style={{ background: 'white' }}>
                  <div>
                    <p>{item.name !== '' ? 'Step:' + item.name : ''}</p>
                    {item.steps.map((s) => (
                      <div>
                        <p>Step {s.number}:</p>
                        <p>{s.step}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div> */}
    </>
  );
};

export default RandomMeals;
