import React from 'react';
import { Button, Card } from 'react-bootstrap';

const ContatoItem = ({ contato, handleFavoritar, handleEdit, handleDelete }) => {
  return (
    <Card>
      <Card.Body>
        <Card.Title>{contato.nome}</Card.Title>
        <Card.Text>{contato.telefone}</Card.Text>
        <Button variant={contato.favorito ? 'danger' : 'primary'} onClick={() => handleFavoritar(contato.id, contato.favorito)}>
          {contato.favorito ? 'Remover dos favoritos' : 'Adicionar aos favoritos'}
        </Button>
        <Button variant="secondary" onClick={() => handleEdit(contato.id)}>Editar</Button>
        <Button variant="danger" onClick={() => handleDelete(contato.id)}>Excluir</Button>
      </Card.Body>
    </Card>
  );
};

export default ContatoItem;
