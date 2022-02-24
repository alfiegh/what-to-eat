import styled from 'styled-components';

export const HomeSection = styled.section`
  height: 100%;
`;

export const Title = styled.h1`
  /* background: rgb(49, 73, 64); */
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
  /* background: #e692a0; */
  height: auto;
  padding: 0.5rem;
  /* color: #ffffff; */
  width: auto;
  /* border-radius: 10px; */
  /* display: flex;
  justify-content: center;
  align-items: center; */
  text-align: center;
  font-weight: 200;
`;

export const Paragraph = styled.p`
  color: #000000;
  text-align: center;
  font-weight: 200;
  font-size: 1.2rem;
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

export const CardInput = styled.div`
  border-radius: 10px;
  background: blanchedalmond;
  padding: 1rem;
`;

export const List = styled.ul`
  /* display: flex;
  justify-content: space-around; */
  /* display: inline; */
`;

export const Item = styled.li`
  color: #000000;
  text-align: center;
  font-weight: 300;
  list-style: none;
`;

export const Label = styled.label`
  font-weight: 200;
`;
