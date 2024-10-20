import React from 'react';
import { Table } from 'react-bootstrap';
import ContactItem from './ContactItem';

const ContactList = ({ contacts, deleteContact }) => {
  return (
    <div>
      <h2 className="my-4">Lista de Contactos</h2>
      {contacts.length === 0 ? (
        <p>No hay contactos agregados</p>
      ) : (
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Teléfono</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {contacts.map((contact) => (
              <ContactItem
                key={contact.id}
                contact={contact}
                deleteContact={deleteContact}
              />
            ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default ContactList;
