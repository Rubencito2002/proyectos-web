import React from 'react';
import { Button } from 'react-bootstrap';

const ContactItem = ({ contact, deleteContact }) => {
  return (
    <tr>
      <td>{contact.name}</td>
      <td>{contact.email}</td>
      <td>{contact.phone}</td>
      <td>
        <Button variant="danger" onClick={() => deleteContact(contact.id)}>
          Eliminar
        </Button>
      </td>
    </tr>
  );
};

export default ContactItem;
