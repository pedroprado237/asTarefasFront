import React, { useState, useEffect } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AdicionarContato from './components/AdicionarContato';
import ContatosList from './components/ContatosList';
import EditarContato from './components/EditarContato';

const App = () => {
  const [contatos, setContatos] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [editingContactId, setEditingContactId] = useState(null);

  useEffect(() => {
    carregarContatos();
  }, []);

  const carregarContatos = () => {
    axios
      .get('http://localhost:3002/contatos')
      .then((response) => {
        setContatos(response.data);
      })
      .catch((error) => {
        console.error("Erro ao carregar os dados",error);
      });
  };

  const handleSubmit = (novoContato) => {
    if (editingContactId) {
      axios
        .put(`http://localhost:3002/contatos/${editingContactId}`, novoContato)
        .then(() => {
          setEditingContactId(null);
          carregarContatos();
        })
        .catch((error) => {
          console.error("Erro ao Adicionar os contatos",error);
        });
    } else {
      axios
        .post('http://localhost:3002/contatos', novoContato)
        .then(() => {
          carregarContatos();
        })
        .catch((error) => {
          console.error("Erro ao carregar os novos dados",error);
        });
    }
  };

  const handleEdit = (contatoId) => {
    setEditingContactId(contatoId);
  };

  const handleFavoritar = (contatoId, isFavorito) => {
    axios
      .patch(`http://localhost:3002/contatos/${contatoId}`, { favorito: !isFavorito })
      .then(() => {
        carregarContatos();
      })
      .catch((error) => {
        console.error("Erro ao adicionar aos favoritos",error);
      });
  };

  const handleDelete = (contatoId) => {
    axios
      .delete(`http://localhost:3002/contatos/${contatoId}`)
      .then(() => {
        carregarContatos();
      })
      .catch((error) => {
        console.error("Erro ao deletar o contato",error);
      });
  };

  return (
    <Container className="my-5">
      <Row className="justify-content-center">
        <Col xs={12} sm={8} md={6}>
          <Card className="mb-4">
            <Card.Body>
              {editingContactId ? (
                <EditarContato
                  contato={contatos.find((contato) => contato.id === editingContactId)}
                  handleSubmit={handleSubmit}
                />
              ) : (
                <AdicionarContato handleSubmit={handleSubmit} />
              )}
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <ContatosList
                contatos={contatos}
                favoritos={favoritos}
                setFavoritos={setFavoritos}
                handleEdit={handleEdit}
                handleFavoritar={handleFavoritar}
                handleDelete={handleDelete}
              />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default App;
