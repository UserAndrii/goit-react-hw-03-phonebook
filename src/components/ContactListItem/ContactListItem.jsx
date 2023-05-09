import PropTypes from 'prop-types';
import { Item, Name, Number, Button } from './ContactListItem.styled';

const ContactListItem = ({ id, name, phone, onDelete }) => {
  return (
    <Item>
      <div>
        <Name>{name}: </Name>
        <Number>{phone}</Number>
      </div>
      <Button type="button" aria-label="delete" onClick={() => onDelete(id)}>
        Delete
      </Button>
    </Item>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  phone: PropTypes.string,
  onDelete: PropTypes.func.isRequired,
};

export default ContactListItem;
