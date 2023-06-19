import React, { useState, useEffect } from 'react';
import { Form, Button } from 'react-bootstrap';

const EditarContato = ({ contato, handleSubmit }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  useEffect(() => {
    setNome(contato.nome);
    setTelefone(contato.telefone);
  }, [contato]);

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const contatoAtualizado = {
      id: contato.id,
      nome,
      telefone,
    };
    handleSubmit(contatoAtualizado);
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <h2>Editar Contato</h2>
      <Form.Group>
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" value={nome} onChange={handleNomeChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Telefone:</Form.Label>
        <Form.Control type="text" value={telefone} onChange={handleTelefoneChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">Atualizar</Button>
    </Form>
  );
};

export default EditarContato;
