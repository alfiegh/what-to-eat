import styled from 'styled-components';

export const Button = styled.button`
  /* width: auto;
  padding: 8px;
  border: none;
  border-radius: 10px;
  color: white;
  background: red;
  font-weight: 400; */
  border-radius: 50px;
  background: rgb(218, 56, 50);
  white-space: nowrap;
  padding: 5px 11px;
  color: #ffffff;
  font-size: 16px;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-bottom: 1rem;
  font-weight: 200;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgb(179, 45, 40);
  }
`;

export const InstWrapper = styled.div`
  width: 100%;
  padding-left: 5px;
  height: 300px;
  overflow: scroll;
`;

export const StepNum = styled.p`
  font-weight: 400;
  text-align: start;
`;

export const StepDetail = styled.p`
  font-weight: 300;
  text-align: justify;
`;
