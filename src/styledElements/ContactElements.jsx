import styled from 'styled-components';

export const ContactSection = styled.section`
  height: auto;

  @media screen and (max-width: 768px) {
    height: 100vh;
  }
`;

export const Title = styled.h1`
  background: rgb(49, 73, 64);
  height: auto;
  padding: 0.5rem;
  color: #ffffff;
  width: auto;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Paragraph = styled.p`
  color: white;
  text-align: justify;
  font-weight: 500;
`;

export const FormLabel = styled.label`
  color: white;
  font-weight: 300;
`;

export const SendBtn = styled.button`
  border-radius: 10px;
  width: 100%;
  background: rgb(218, 56, 50);
  white-space: nowrap;
  padding: 10px 22px;
  color: #ffffff;
  margin-top: 1rem;
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
