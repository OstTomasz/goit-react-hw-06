import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";
import { useSelector } from "react-redux";
import { selectContacts } from "../../redux/contacts/contactsSelectors";

export const ContactList = () => {
  const contacts = useSelector(selectContacts);

  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
        />
      ))}
    </ul>
  );
};
