import { Formik, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import Notiflix from 'notiflix';
import * as yup from 'yup';
import { getContacts } from '../../redux/selectors';
import { addContact } from '../../redux/contactsSlice';
import {
  Button,
  Input,
  Label,
  StyledErrorMessage,
  StyledForm,
} from './ContactsForm.styled';

const schema = yup.object().shape({
  name: yup.string().required(`Це поле обов'язкове для заповнення`),
  number: yup
    .string()
    .matches(
      /^\+?3?8?(0\d{9})$/,
      'Номер повинен починатися з +380-xx-xxx-xx-xx, дивись приклад в input'
    )
    .required(`Це поле обов'язкове для заповнення`),
});

export const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmitForm = ({ name, number }, { resetForm }) => {
    const sameName = contacts.find(contact => contact.name === name);

    if (sameName) {
      return Notiflix.Notify.failure(
        'Цей контакт вже є в твоїй телефоній книжці.'
      );
    }

    dispatch(addContact(name, number));
    resetForm();
  };

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      onSubmit={handleSubmitForm}
      validationSchema={schema}
    >
      <StyledForm>
        <Label>
          Ім'я
          <Input type="text" name="name" />
          <ErrorMessage name="name">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>

        <Label>
          Номер телефону
          <Input type="text" name="number" placeholder="+380931052345" />
          <ErrorMessage name="number">
            {msg => <StyledErrorMessage>{msg}</StyledErrorMessage>}
          </ErrorMessage>
        </Label>
        <Button type="submit">Додати контакт</Button>
      </StyledForm>
    </Formik>
  );
};
