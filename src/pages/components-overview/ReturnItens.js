import React, { useEffect, useState } from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const ReturnItems = () => {
  const navigate = useNavigate();
  const [produtoId, setProdutoId] = useState([]);
  const [quantidade, setQuantidade] = useState();
  const [dataEntrada, setDataEntrada] = useState();
  const [estoqueId, setEstoqueId] = useState([]);
  const [estoques, setEstoques] = useState([]);
  const [solicitanteId, setSolicitanteId] = useState([]);
  const [solicitantes, setSolicitantes] = useState([]);

  const handleEstoqueChange = (event) => {
    setEstoqueId(event.target.value);
  };

  const handleSolicitanteChange = (event) => {
    setSolicitanteId(event.target.value);
  };

  const handleSearchChange = async (event) => {
    setProdutoId(event.target.value);

    if (produtoId) {
      try {
        let response = await fetch(`http://localhost:3000/api/devolucao-item/produtoId/${produtoId}`);
        let data = await response.json();

        if (!data) {
          response = await fetch(`http://localhost:3000/api/devolucao-item/descricao/${produtoId}`);
          data = await response.json();
        }
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    }
  };

  const handleSave = async () => {
    const response = await fetch('http://localhost:3000/api/devolucao-item/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produtoId, quantidade, dataEntrada, estoqueId, solicitanteId })
    });

    if (response.ok) {
      navigate('/dashboard/default');
    } else {
      console.log('ERRO');
    }
  };

  useEffect(() => {
    const fetchEstoque = async () => {
      const response = await fetch('http://localhost:3000/api/estoque');
      const data = await response.json();
      setEstoques(data);
    };

    fetchEstoque();
  }, []);

  useEffect(() => {
    const fetchSolicitante = async () => {
      const response = await fetch('http://localhost:3000/api/solicitante');
      const data = await response.json();
      setSolicitantes(data);
    };

    fetchSolicitante();
  }, []);

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            label="Busca do Produto"
            placeholder="ID, nome ou categoria"
            sx={{ width: '100%' }}
            value={produtoId}
            onChange={handleSearchChange}
          />
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
            <InputLabel id="solicitants-label">Solicitante</InputLabel>
            <Select labelId="solicitants-label" multiple value={solicitanteId} onChange={handleSolicitanteChange}>
              {solicitantes.map((solicitante) => (
                <MenuItem key={solicitante.id} value={solicitante.id}>
                  {solicitante.nome}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Estoque Destino</InputLabel>
            <Select labelId="origin-stock-label" value={estoqueId} onChange={handleEstoqueChange}>
              {estoques.map((estoque) => (
                <MenuItem key={estoque.id} value={estoque.id}>
                  {estoque.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Usuário Responsável" disabled value="Usuário Logado" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth onClick={handleSave}>
                Salvar
              </Button>
            </Grid>
          </Grid>{' '}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReturnItems;
