import { useSelector } from 'react-redux';
import { getContacts } from '../../redux/selectors';
import { Container, MainTitle, Title } from './App.syled';
import { ContactsForm } from '../ContactsForm/ContactsForm';
import { Filter } from '../Filter/Filter';
import { ContactsList } from '../ContactsList/ContactsList';

export function App() {
  const contacts = useSelector(getContacts);

  return (
    <Container>
      <MainTitle>Телефона книга</MainTitle>
      <ContactsForm />
      <Title>Контакти</Title>
      <Filter />
      {contacts.length !== 0 && <ContactsList />}
    </Container>
  );
}
