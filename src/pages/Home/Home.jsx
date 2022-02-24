import React from 'react';
import cooking from '../../../src/images/cooking.png';
import Search from '../../components/SearchOptions/SearchOptions';
import StepsBanner from '../../Sections/StepsBanner/Steps';
import { Paragraph, Subtitle, Title } from './HomeElements';

export const Home = () => {
  return (
    <section className='container-fluid mt-5' style={{ height: '500px' }}>
      <div className='row'>
        <div className='col-md-4 offset-md-2 d-flex align-items-center'>
          <div>
            <Title>
              Wondering{' '}
              <span style={{ color: 'rgb(121,166,88' }}>what to eat?</span>{' '}
            </Title>

            <Subtitle>Wonder no more! Let us help you.</Subtitle>
            <Paragraph>
              We at WTE love meal prepping but we spent too much time thinking
              what our next meals are going to be, so we came with a simple
              solution:
            </Paragraph>
            <Paragraph>
              Let our app choose for you. It is rather simple: choose your diet
              style, if you want Lunch or Dinner ideas and how many dishes do
              you want.
            </Paragraph>
            <Paragraph>As simple as having cereal in the morning!</Paragraph>
          </div>
        </div>
        <div className='col-md-6'>
          <img src={cooking} className='img-fluid' alt='meal planner image' />
        </div>
      </div>
      {/* <div className='row'>
        <div className='col-md-4 offset-md-4 text-center'>
          <h3>Get me some ideas!</h3>
        </div>
      </div> */}
      <StepsBanner />
      <Search />
    </section>
  );
};

export default Home;
