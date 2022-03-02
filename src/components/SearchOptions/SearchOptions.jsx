import React, { useState } from 'react';
import axios from 'axios';

import RandomMeals from '../RandomMeals/RandomMeals';

// import {
//   GiSandwich,
//   GiCurledLeaf,
//   GiMilkCarton,
//   GiEggPod,
//   GiPlantSeed,
//   GiMeat,
// } from 'react-icons/gi';
import {
  AboutSection,
  Subtitle,
  Title,
  SubmitBtn,
  Label,
} from './SearchElements';

const Search = () => {
  const [dietStyle, setDietStyle] = useState('');
  const [mealType, setMealType] = useState('');
  const [result, setResult] = useState({});
  const [number, setNumber] = useState('');

  const handleSubmit = async () => {
    try {
      const { data } = await axios.get(
        `https://api.spoonacular.com/recipes/random?apiKey=cd5e125467d7474887e544648d109cef&tags=${dietStyle},${mealType}&number=${number}`
      );

      setResult(data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <AboutSection className='container'>
      <div className='row'>
        <div className='col-md-10 offset-md-1'>
          <Title className='text-center mt-4'>Ok Chef! I am ready! </Title>

          <Subtitle>Let's find your meals</Subtitle>
        </div>
        <form className='col-md-8 offset-md-2'>
          <div className='form-group'>
            {/* <div className='my-2'>
              <ul className='nav nav-pills no-gutters text-center my-2'>
                <li className='nav-item col-4 col-sm-2'>
                  Standard <br />
                  <GiSandwich className='display-4' />
                </li>
                <li className='nav-item col-4 col-sm-2'>
                  Vegetarian <br /> <GiCurledLeaf className='display-4' />
                </li>
                <li className='nav-item col-4 col-sm-2'>
                  Lacto-Veg
                  <br /> <GiMilkCarton className='display-4' />
                </li>
                <li className='nav-item col-4 col-sm-2'>
                  Ovo-Veg <br /> <GiEggPod className='display-4' />
                </li>
                <li className='nav-item col-4 col-sm-2'>
                  Vegan <br /> <GiPlantSeed className='display-4' />
                </li>
                <li className='nav-item col-4 col-sm-2'>
                  Keto <br /> <GiMeat className='display-4' />
                </li>
              </ul>
            </div> */}
            <Label htmlFor='exampleFormControlSelect1'>Diet Style</Label>
            <select
              value={dietStyle}
              onChange={(e) => setDietStyle(e.target.value)}
              className='form-control'
              id='exampleFormControlSelect1'
            >
              <option value=''>Select your style</option>
              <option value=''>Standard</option>
              <option value='vegetarian'>Vegetarian</option>
              <option value='lacto-vegetarian'>Lacto-Vegetarian</option>
              <option value='ovo-vegetarian'>Ovo-Vegetarian</option>
              <option value='vegan'>Vegan</option>
              <option value='ketogenic'>Keto</option>
            </select>
          </div>

          <div className='form-group mt-2'>
            <Label htmlFor='exampleFormControlSelect1'>Meal Type</Label>
            <select
              value={mealType}
              onChange={(e) => setMealType(e.target.value)}
              className='form-control'
              id='exampleFormControlSelect1'
            >
              <option value=''>Choose lunch or dinner</option>
              <option value='breakfast'>Breakfast</option>
              <option value='lunch'>Lunch</option>
              <option value='dinner'>Dinner</option>
            </select>
          </div>
          <div className='form-group mt-2'>
            <Label htmlFor='exampleFormControlSelect1'>Number of meals</Label>
            <select
              value={number}
              onChange={(e) => setNumber(e.target.value)}
              className='form-control'
              id='exampleFormControlSelect1'
            >
              <option value=''>How many meals</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
            </select>
          </div>
        </form>
        <div className='col-md-6 offset-md-3 mt-4 d-flex justify-content-center'>
          <SubmitBtn onClick={() => handleSubmit()}>Submit</SubmitBtn>
        </div>
      </div>

      {result && (
        <div className='container'>
          <RandomMeals result={result} />
        </div>
      )}
    </AboutSection>
  );
};

export default Search;
