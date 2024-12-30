import css from "./ContactList.module.css";

import { Contact } from "../Contact/Contact";

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul className={css["contact-list"]}>
      {contacts.map((contact) => {
        return (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            deleteContact={deleteContact}
          />
        );
      })}
    </ul>
  );
};
