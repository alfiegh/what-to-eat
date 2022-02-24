import React from 'react';
import Carrot from '../../images/carrot.svg';
import Apple from '../../images/apple.svg';
import Pear from '../../images/pear.svg';
import Smoothie from '../../images/juice.svg';
import { Steps, StepSection, StepSub, StepP, StepH4 } from './StepsElements';

const StepsBanner = () => {
  return (
    <StepSection>
      <div className='row mb-3'>
        <div className='col text-center'>
          <StepSub>So, how does it work?</StepSub>
        </div>
      </div>
      <div className='row  d-flex justify-content-evenly'>
        <div className='col-md-3'>
          <div className='d-flex flex-row'>
            <Steps>Step </Steps>

            <img
              src={Carrot}
              alt='carrot'
              style={{ maxWidth: '2rem', maxHeight: '2rem' }}
            />
          </div>
          <StepP>
            You choose a diet style. We understand everyone have different
            preferences when it comes to their diets so we offer a range of
            different diets to try and fit all needs. We offer different styles
            of vegetarian diets and even keto, paleo and other options are
            available upon request.
          </StepP>
        </div>
        <div className='col-md-3'>
          <div className='d-flex flex-row'>
            <Steps>Step</Steps>

            <img
              src={Apple}
              alt=''
              style={{ maxWidth: '2rem', maxHeight: '2rem' }}
            />
            <img
              src={Apple}
              alt='apple'
              style={{ maxWidth: '2rem', maxHeight: '2rem' }}
            />
          </div>

          <StepP>
            Our analysis has shown most of the time people either skip breakfast
            or have something on the go. All in all it seems that there isn't
            much of an effort when it comes to waht to have for breakfast so we
            have included only options for Lunch and Dinner.
          </StepP>
        </div>
        <div className='col-md-3'>
          <div className='d-flex flex-row'>
            <Steps>Step</Steps>

            <img
              src={Pear}
              alt=''
              style={{ maxWidth: '2rem', maxHeight: '2rem' }}
            />
            <img
              src={Pear}
              alt=''
              style={{ maxWidth: '2rem', maxHeight: '2rem' }}
            />
            <img
              src={Pear}
              alt='pear'
              style={{ maxWidth: '2rem', maxHeight: '2rem' }}
            />
          </div>
          <StepP>
            We got you covered when it comes to quantities. You can choose to
            get ideas for up to 5 different random meals. Why not more? Meal
            prepping normally happens during the week, we believe in having a
            break during the weekends for people to enjoy themselves.
          </StepP>
        </div>
      </div>
      <div className='row'>
        <div
          className='d-flex flex-row justify-content-center'
          style={{ marginBottom: '1rem' }}
        >
          <StepH4 className='mx-2'>
            So let's recap: choose, submit, sit, relax. Easy as that!
          </StepH4>
          <img
            src={Smoothie}
            alt='juice'
            style={{ maxWidth: '2rem', maxHeight: '2rem', marginTop: '1rem' }}
          />
        </div>
      </div>
    </StepSection>
  );
};

export default StepsBanner;
