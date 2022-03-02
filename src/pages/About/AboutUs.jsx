import React from 'react';
import aboutImg from '../../images/aboutImg.png';
import { AboutUsSection, Title, Paragraph, Links } from './AboutUsElements';

const AboutUs = () => {
  return (
    <AboutUsSection className='container-fluid mt-5'>
      <div className='row'>
        <div className='col-md-4 offset-md-2 d-flex justify-content-center align-items-center flex-column'>
          <Title>About Us</Title>
          <Paragraph>
            The purpose of this app is to provide a solution to meal preppers.
            Often we find ourselves trying to figure out what meals to have
            during the week so we can arrange groceries yet with how accesible
            food is nowadays it seems like the biggest issue is to think what to
            eat. Let us help you stop decision fatigue by using this app.
          </Paragraph>
          <Paragraph>
            This app is still under development, for more info please feel free
            to check my{' '}
            <Links to={{ pathname: 'https://alfonsoeg.com' }} target='_blank'>
              website
            </Links>{' '}
            or my{' '}
            <Links
              to={{ pathname: 'https://github.com/alfiegh' }}
              target='_blank'
            >
              Github
            </Links>
            .
          </Paragraph>
        </div>
        <div className='col-md-6'>
          <img src={aboutImg} className='img-fluid' alt='about us image' />
        </div>
      </div>
    </AboutUsSection>
  );
};

export default AboutUs;
