import PropTypes from 'prop-types';
import ContactListItem from '../ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContacts }) => {
  return (
    <List>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          phone={number}
          onDelete={onDeleteContacts}
        ></ContactListItem>
      ))}
    </List>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContacts: PropTypes.func.isRequired,
};

export default ContactList;
