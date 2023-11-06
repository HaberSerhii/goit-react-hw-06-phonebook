import { Form, Field, ErrorMessage } from 'formik';
import styled from 'styled-components';

export const Text = styled.p`
  margin-bottom: 15px;
`;
export const StyledForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const StyledField = styled(Field)`
  padding: 10px;
  border: 1px solid transparent;
  border-radius: 5px;
  transition: border-color 0.3s ease;
  width: 400px;

  @media screen and (max-width: 768px) {
    width: 250px;
  }

  &:focus {
    border-color: transparent;
  }
`;

export const Label = styled.label`
  position: absolute;
  top: 10px;
  left: 10px;
  transition: transform 0.3s, font-size 0.3s, color 0.3s;
  pointer-events: none;
  color: black;
`;

export const ErrorMsg = styled(ErrorMessage)`
  font-size: 14px;
  color: white;
  font-style: italic;
  font-weight: 600;
  margin-top: 10px;
  pointer-events: none;
`;

export const InputContainer = styled.div`
  position: relative;
`;

export const ButtonForm = styled.button`
  margin-top: 15px;
  font-size: 15px;
  padding: 10px 15px;
  background-color: transparent;
  color: white;
  border: 1px solid white;
  border-radius: 15px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  @media screen and (max-width: 768px) {
    font-size: 10px;
    width: 150px;
  }

  &:active {
    background-color: white;
  }
`;
