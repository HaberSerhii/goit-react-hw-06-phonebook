import { Form, Field } from 'formik';
import styled from 'styled-components';

export const ContanctForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ContactLabel = styled.label``;

export const ContactInput = styled(Field)`
  :focus {
  }
`;

export const ContactErrorMessage = styled.div``;

export const AddButton = styled.button``;
