import React from 'react';

import { List, Item, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getVisibleContacts } from '../../redux/selectors';

const ContactList = () => {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(removeContact());

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ' : ' + contact.number}
          {
            <Button type="button" name="delete" onClick={handleDelete}>
              &times;
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
