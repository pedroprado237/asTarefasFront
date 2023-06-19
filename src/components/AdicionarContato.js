import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AdicionarContato = ({ handleSubmit }) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');

  const handleNomeChange = (event) => {
    setNome(event.target.value);
  };

  const handleTelefoneChange = (event) => {
    setTelefone(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const novoContato = {
      nome,
      telefone,
    };
    handleSubmit(novoContato);
    setNome('');
    setTelefone('');
  };

  return (
    <Form onSubmit={handleFormSubmit}>
      <h2>Adicionar Contato</h2>
      <Form.Group>
        <Form.Label>Nome:</Form.Label>
        <Form.Control type="text" value={nome} onChange={handleNomeChange} required />
      </Form.Group>
      <Form.Group>
        <Form.Label>Telefone:</Form.Label>
        <Form.Control type="text" value={telefone} onChange={handleTelefoneChange} required />
      </Form.Group>
      <Button variant="primary" type="submit">Adicionar</Button>
    </Form>
  );
};

export default AdicionarContato;
