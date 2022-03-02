import React from 'react';
import { Link } from 'react-router-dom';
import {
  ContactSection,
  Title,
  Paragraph,
  FormLabel,
  SendBtn,
} from './ContactElements';

const Contact = () => {
  return (
    <ContactSection className='container'>
      <div className='col-md-8 offset-md-2 text-center mt-5'>
        <h1>This is a trial app, for more info reach me via:</h1>
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '2rem',
            fontWeight: '300',
            color: 'rgb(121,166,88)',
            marginTop: '5rem',
          }}
          to={{ pathname: 'https://alfonsoeg.com' }}
          target='_blank'
        >
          https://alfonsoeg.com
        </Link>
        <br />
        <Link
          style={{
            textDecoration: 'none',
            fontSize: '2rem',
            fontWeight: '300',
            color: 'rgb(121,166,88)',
          }}
          to={{ pathname: 'https://twitter.com/alfonsoeg' }}
          target='_blank'
        >
          Twitter
        </Link>
      </div>
      {/* <div className='col-md-6 offset-md-3 mt-5'>
        <Title>Contact</Title>
        <Paragraph>
          Because I alone am bearing the server and hosting costs to this
          application, I have made it private. If you would like to get access
          to it please contact the developer using the form below.
        </Paragraph>
        <form>
          <div className='mb-3'>
            <FormLabel htmlFor='exampleInputEmail1'>Email address</FormLabel>
            <input
              type='email'
              className='form-control'
              id='exampleInputEmail1'
              aria-describedby='emailHelp'
            />
            <div id='emailHelp' className='form-text'>
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className='mb-3'>
            <FormLabel
              htmlFor='exampleInputPassword1'
              className='form-FormLabel'
            >
              Password
            </FormLabel>
            <input
              type='password'
              className='form-control'
              id='exampleInputPassword1'
            />
          </div>
          <div class='form-group mb-3'>
            <FormLabel for='comment'>Comment:</FormLabel>
            <textarea class='form-control' rows='5' id='comment'></textarea>
          </div>

          <SendBtn type='submit'>Send</SendBtn>
        </form>
      </div> */}
    </ContactSection>
  );
};

export default Contact;
