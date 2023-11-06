import { Container, SubTitle, Title } from './App.styled';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { getContacts } from '../redux/selectors';
import { useSelector } from 'react-redux';

export const App = () => {
  const contacts = useSelector(getContacts);
  return (
    <Container>
      <Title>Телефона книга</Title>
      <ContactForm />
      <SubTitle>Контакти</SubTitle>
      <Filter />
      {contacts.length > 0 && <ContactList />}
    </Container>
  );
};
