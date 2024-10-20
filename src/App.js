import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';

const App = () => {
  // Pre-cargamos los contactos de ejemplo aquí
  const [contacts, setContacts] = useState([
    { id: 1, name: 'Juan Pérez', email: 'juan.perez@example.com', phone: '+1 555-123-4567' },
    { id: 2, name: 'María López', email: 'maria.lopez@example.com', phone: '+1 555-987-6543' },
    { id: 3, name: 'Carlos Fernández', email: 'carlos.fernandez@example.com', phone: '+1 555-345-6789' },
    { id: 4, name: 'Ana Rodríguez', email: 'ana.rodriguez@example.com', phone: '+1 555-234-5678' },
    { id: 5, name: 'Pedro García', email: 'pedro.garcia@example.com', phone: '+1 555-876-5432' },
    { id: 6, name: 'Laura Martínez', email: 'laura.martinez@example.com', phone: '+1 555-765-4321' },
    { id: 7, name: 'Luis González', email: 'luis.gonzalez@example.com', phone: '+1 555-456-7890' },
    { id: 8, name: 'Sofía Ramírez', email: 'sofia.ramirez@example.com', phone: '+1 555-678-9012' },
    { id: 9, name: 'Diego Sánchez', email: 'diego.sanchez@example.com', phone: '+1 555-890-1234' },
    { id: 10, name: 'Marta Torres', email: 'marta.torres@example.com', phone: '+1 555-654-3210' },
  ]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (id) => {
    setContacts(contacts.filter((contact) => contact.id !== id));
  };

  return (
    <Container>
      <h1 className="my-4 text-center">Gestor de Contactos</h1>
      <Row>
        <Col md={4}>
          <ContactForm addContact={addContact} />
        </Col>
        <Col md={8}>
          <ContactList contacts={contacts} deleteContact={deleteContact} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
