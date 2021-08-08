import { BsTrash } from "react-icons/bs";
import { MdContactPhone } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { getFilteredContacts } from "redux/selectors/contactsSelectors";
import { List, Item, Button } from "./ContactList.styled";
import { deleteContact } from "redux/slices/contactsSlice";

const ContactList = () => {
  const contacts = useSelector(getFilteredContacts);

  const dispatch = useDispatch();

  return (
    <List>
      {contacts.map(({ id, name, number }) => {
        return (
          <Item key={id}>
            <span>
              <MdContactPhone size="20" />
              {name}:
            </span>

            <span>{number}</span>

            <Button onClick={() => dispatch(deleteContact(id))}>
              <BsTrash size="20" />
            </Button>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
