import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const AboutUsSection = styled.section`
  height: auto;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const Title = styled.h1`
  text-align: start;
  letter-spacing: 2px;
  margin-top: 0;
  font-weight: 400;
  text-transform: uppercase;
`;

export const Subtitle = styled.h2`
  /* background: #e692a0; */
  height: auto;
  padding: 0.5rem;
  /* color: #ffffff; */
  width: auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  font-weight: 200;
  text-align: justify;
  margin-top: 1rem;
`;

export const Links = styled(Link)`
  color: rgb(218, 56, 50);
  text-decoration: none;
`;

export const SignInBtn = styled.button`
  border-radius: 50px;
  background: rgb(218, 56, 50);
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 2rem;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: #fff;
    color: rgb(218, 56, 50);
  }
`;
