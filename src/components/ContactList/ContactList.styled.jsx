import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  width: 350px;
  padding: 12px;
  border-radius: 5px;
  list-style: none;
`;

export const Item = styled.li`
  background-color: transparent;
  border: 1px solid white;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  gap: 5px;
  color: white;
  justify-content: space-between;
  font-size: 20px;
`;

export const Button = styled.button`
  padding: 8px 16px;
  font: inherit;
  cursor: pointer;
  background-color: transparent;
  color: white;
  border: none;

  &:hover {
    color: red;
  }
`;
