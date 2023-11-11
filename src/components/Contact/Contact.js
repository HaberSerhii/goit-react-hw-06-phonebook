import { ContactItem, DelBnt, Text } from './Contact.styled';

export const Contact = ({ name, number, deleteContact }) => {
  return (
    <ContactItem>
      <Text>{name}</Text>
      <Text>{number}</Text>
      <DelBnt type="button" onClick={deleteContact}>
        Delete
      </DelBnt>
    </ContactItem>
  );
};
