import styled from 'styled-components';

export const AboutSection = styled.section`
  height: 100%;
`;

export const Title = styled.h1`
  height: auto;
  padding: 0.5rem;
  /* color: #ffffff; */
  width: auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-weight: 400;
  letter-spacing: 2px;
`;

export const Subtitle = styled.h2`
  height: auto;
  padding: 0.5rem;
  width: auto;
  text-align: center;
  font-weight: 200;
`;

export const SubmitBtn = styled.button`
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
  font-weight: 200;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(179, 45, 40);
  }
`;

export const Label = styled.label`
  font-weight: 200;
`;
