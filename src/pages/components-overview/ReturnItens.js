import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, Paper, Select, MenuItem, InputLabel, FormControl } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

const RegisterStock = () => {
  const { id: itemId } = useParams();
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estoqueId, setEstoqueId] = useState('');
  const [estoques, setEstoques] = useState([]);
  const [produtoId, setProdutoId] = useState('');
  const [quantidade, setQuantidade] = useState('');
  const [dataEntrada, setDataEntrada] = useState('');
  const [produtosId, setProdutosId] = useState([]);

  const handleEstoqueChange = (event) => {
    setEstoqueId(event.target.value);
  };

  const handleSolicitanteChange = (event) => {
    setSolicitanteId(event.target.value);
  };

  const handleProdutoIdChange = async (event) => {
    setProdutoId(event.target.value);

    if (event.target.value) {
      try {
        let response = await fetch(`http://localhost:3001/api/devolucao-item/produtoId/${event.target.value}`);
        let data = await response.json();

        if (!data) {
          response = await fetch(`http://localhost:3001/api/devolucao-item/descricao/${event.target.value}`);
          data = await response.json();
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    }
  };

  const navigate = useNavigate();

  const handleSave = async () => {
    const method = itemId ? 'PUT' : 'POST';
    const url = itemId ? `http://localhost:3001/api/devolucao-item/${itemId}` : 'http://localhost:3001/api/devolucao-item';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ descricao, estoqueId })
    });

    if (response.ok) {
      navigate('/lista-devolucao-itens');
    } else {
      console.log('ERRO');
    }
  };

  useEffect(() => {
    const fetchProduto = async () => {
      const response = await fetch('http://localhost:3001/api/produto');
      const data = await response.json();
      setProdutosId(data);
    };

    fetchProduto();
  }, []);

  useEffect(() => {
    if (itemId) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://localhost:3001/api/devolucao-item/${itemId}`);
          const data = await response.json();
          setId(data.id);
          setProdutoId(data.produtoId);
          setQuantidade(data.quantidade);
          setDataEntrada(data.dataEntrada);
          setEstoqueId(data.estoqueId);
          setSolicitanteId(data.solicitanteId);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData();
    }
  }, [itemId]);

  useEffect(() => {
    const fetchEstoque = async () => {
      const response = await fetch('http://localhost:3001/api/estoque');
      const data = await response.json();
      setEstoques(data);
    };

    fetchEstoque();
  }, []);

  useEffect(() => {
    const fetchSolicitante = async () => {
      const response = await fetch('http://localhost:3001/api/solicitante');
      const data = await response.json();
      setSolicitantes(data);
    };

    fetchSolicitante();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField label="ID" type="number" disabled fullWidth value={id} onChange={(e) => setId(e.target.value)} />
        </Grid>
        <Grid item xs={11}>
          <FormControl fullWidth>
            <InputLabel id="produtoId-label">Buscar por Produtos</InputLabel>
            <Select labelId="produtoId-label" value={produtoId} onChange={handleProdutoIdChange}>
              {produtosId.map((produto) => (
                <MenuItem key={produto.id} value={produto.id}>
                  {produto.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Quantidade"
            type="number"
            sx={{ width: '100%' }}
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            label="Data da Entrada"
            type="date"
            InputLabelProps={{ shrink: true }}
            sx={{ width: '100%' }}
            value={dataEntrada}
            onChange={(e) => setDataEntrada(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="estoque-label">Estoque</InputLabel>
            <Select labelId="estoque-label" id="estoque" value={estoqueId} onChange={(e) => setEstoqueId(e.target.value)}>
              {estoques.map((estoque) => (
                <MenuItem key={estoque.id} value={estoque.id}>
                  {estoque.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        <Grid item xs={6}>
          <TextField label="Descrição Sub-Estoque" fullWidth value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="success" fullWidth onClick={handleSave}>
            Salvar
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" component={Link} to="/lista-sub-estoque" color="primary" fullWidth>
            Voltar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterStock;
