import { get } from 'lodash';
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { isEmail, isInt, isFloat } from 'validator';
import axios from '../../services/axios';
import history from '../../services/history';
import { Form } from './styled';
import { Container } from '../../styles/GlobalStyles';
import Loading from '../../components/Loading';
import * as actions from '../../store/modules/auth/actions';

export default function Aluno({ match }) {
  const id = get(match, 'params.id', 0);
  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!id) return;

    async function getData() {
      try {
        setIsLoading(true);
        const { data } = await axios.get(`/alunos/${id}`);
        const Foto = get(data, 'Fotos[0].url', '');

        setNome(data.nome);
        setSobrenome(data.sobrenome);
        setEmail(data.email);
        setIdade(data.idade);
        setPeso(data.peso);
        setAltura(data.altura);

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        const status = get(err, 'response.status', 0);
        const errors = get(err, 'response.data.errors', []);

        if (status === 400) errors.map((error) => toast.error(error));
        history('/');
      }
    }
    getData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let formErrors = false;
    if (nome.length < 3 || nome.length > 155) {
      formErrors = true;
      toast.error('Nome precisa ter entre 3 e 155 caracteres');
    }

    if (sobrenome.length < 3 || sobrenome.length > 155) {
      formErrors = true;
      toast.error('Sobrenome precisa ter entre 3 e 155 caracteres');
    }

    if (!isEmail(email)) {
      formErrors = true;
      toast.error('Email inválido');
    }

    if (!isInt(String(idade))) {
      formErrors = true;
      toast.error('Idade precisa ser um número inteiro');
    }

    if (!isFloat(String(peso))) {
      formErrors = true;
      toast.error('Peso inválido');
    }

    if (!isFloat(String(altura))) {
      formErrors = true;
      toast.error('Altura inválida');
    }

    if (formErrors) return;

    try {
      setIsLoading(true);
      if (id) {
        // editando
        await axios.put(`alunos/${id}`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) editado(a) com sucesso!');
      } else {
        // criando
        await axios.post(`alunos/`, {
          nome,
          sobrenome,
          email,
          idade,
          peso,
          altura,
        });
        toast.success('Aluno(a) criado(a) com sucesso!');
        history.push('/');
      }
    } catch (err) {
      const status = get(err, 'response.status', 0);
      const data = get(err, 'response.data', {});
      const errors = get(data, 'errors', []);

      if (errors.length > 0) {
        errors.map((error) => toast.error(error));
      } else {
        toast.error('Erro desconhecido');
      }

      if (status === 401) dispatch(actions.loginFailure());
    }
    setIsLoading(false);
  };

  return (
    <Container>
      <Loading isLoading={isLoading} />

      <h1>{id ? 'Editar aluno' : 'Novo Aluno'} </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Nome"
        />
        <input
          type="text"
          value={sobrenome}
          onChange={(e) => setSobrenome(e.target.value)}
          placeholder="Sobrenome"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
          placeholder="Idade"
        />
        <input
          type="text"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
          placeholder="Peso"
        />
        <input
          type="text"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
          placeholder="Altura"
        />
        <button type="submit">Enviar</button>
      </Form>
    </Container>
  );
}

Aluno.propTypes = {
  match: PropTypes.shape({}).isRequired,
};
