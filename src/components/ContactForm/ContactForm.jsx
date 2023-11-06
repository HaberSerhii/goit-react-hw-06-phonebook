import React from 'react';

import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledField,
  ErrorMsg,
  InputContainer,
  ButtonForm,
  Text,
} from './ContactForm.styled';
import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contactsSlice';

const formSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^[a-zA-Z\s]+$/, 'Тільки латинські букви')
    .min(3, `Коротке ім'я`)
    .required(`Це поле обов'язкове для заповнення`),
  number: Yup.string()
    .matches(/^\d{3}-\d{2}-\d{2}$/, 'Формат номеру телефона: 000-00-00')
    .required(`Це поле обов'язкове для заповнення`),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={formSchema}
      onSubmit={(contact, actions) => {
        dispatch(addContact({ contact }));
        actions.resetForm();
      }}
    >
      <StyledForm>
        <InputContainer>
          <Text>Ім'я</Text>
          <StyledField type="text" name="name" />

          <ErrorMsg name="name" component="div" />
        </InputContainer>
        <InputContainer>
          <Text>Номер телефону</Text>
          <StyledField type="tel" name="number" />

          <ErrorMsg name="number" component="div" />
        </InputContainer>

        <ButtonForm type="submit">Додати контакт</ButtonForm>
      </StyledForm>
    </Formik>
  );
};

export default ContactForm;
