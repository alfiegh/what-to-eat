import React from 'react';
import { Link } from 'react-router-dom';
import {
  AboutUsSection,
  Title,
  Paragraph,
  Links,
} from '../styledElements/AboutUsElements';

const AboutUs = () => {
  return (
    <AboutUsSection className='container'>
      <div className='col-md-6 offset-md-3 mt-5'>
        <Title>About Us</Title>
        <Paragraph>
          This app is still under development, for more info please feel free to
          check my{' '}
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
        <Paragraph>
          The purpose of this as is to provide a solution to meal preppers such
          as myself, often I find myself trying to figure out what meals to have
          during the week so I can arrange my groceries and more over I also
          need to be mindful of my calorie intake.
        </Paragraph>
      </div>
    </AboutUsSection>
  );
};

export default AboutUs;
