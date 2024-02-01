import React from 'react';
import { List, Item, Button } from './ContactList.styled';

import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'components/Redux/selectors';
import { deleteContacts } from 'components/Redux/operations';

const ContactList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(contact => (
        <Item key={contact.id}>
          {contact.name + ': ' + contact.phone}
          {
            <Button
              type="button"
              name="delete"
              onClick={() => dispatch(deleteContacts(contact.id))}
            >
              Delete
            </Button>
          }
        </Item>
      ))}
    </List>
  );
};
export default ContactList;
