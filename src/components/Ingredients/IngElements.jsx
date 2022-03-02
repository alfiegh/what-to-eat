import styled from 'styled-components';

export const Button = styled.button`
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

export const OrgList = styled.ol`
  padding-right: 5px;
  margin-top: 1rem;
`;
export const List = styled.li`
  list-style: none;
  text-align: start;
  margin-top: 5px;
  font-weight: 300;

  &:before {
    content: '✓';
  }
`;

export const ListWrapper = styled.div`
  width: 100%;

  height: 300px;
  overflow: scroll;
`;
