import React from 'react';
import { Card } from 'react-bootstrap';
import ContatoItem from './ContatoItem';

const ContatosList = ({ contatos, handleFavoritar, handleEdit, handleDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>Lista de Contatos</Card.Title>
        {contatos.length === 0 ? (
          <p>Nenhum contato encontrado.</p>
        ) : (
          contatos.map((contato) => (
            <ContatoItem
              key={contato.id}
              contato={contato}
              handleFavoritar={handleFavoritar}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))
        )}
      </Card.Body>
    </Card>
  );
};

export default ContatosList;
