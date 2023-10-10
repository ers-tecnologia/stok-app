import React, { useEffect, useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel, Grid, Paper, Typography } from '@mui/material';
import { useNavigate } from '../../../node_modules/react-router-dom/dist/index';

const OutputItems = () => {
  const navigate = useNavigate();
  const [produtoId, setProdutoId] = useState([]);
  const [quantidade, setQuantidade] = useState();
  const [data, setData] = useState();
  const [estoqueId, setEstoqueId] = useState([]);
  const [estoques, setEstoques] = useState([]);
  const [usuarioId, setUsuarioId] = useState([]);
  const [solicitanteId, setSolicitanteId] = useState([]);
  const [solicitantes, setSolicitantes] = useState([]);
  const [gerarRecibo, setGerarRecibo] = useState(false);
  const [destinationStock, setDestinationStock] = useState('');
  const [tipoSaida, setTipoSaida] = useState();

  const handleSave = async () => {
    const response = await fetch('http://localhost:3000/api/saida-item/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ produtoId, quantidade, data, estoqueId, usuarioId, solicitanteId, gerarRecibo, tipoSaida })
    });

    if (response.ok) {
      navigate('/dashboard/default');
    } else {
      console.log('ERRO');
    }
  };

  const handleSearchChange = async (event) => {
    setProdutoId(event.target.value);

    if (produtoId) {
      try {
        let response = await fetch(`http://localhost:3000/api/saida-item/produtoId/${produtoId}`);
        let data = await response.json();

        if (!data) {
          response = await fetch(`http://localhost:3000/api/saida-item/descricao/${produtoId}`);
          data = await response.json();
        }
        console.log(data);
      } catch (error) {
        console.error('Erro ao buscar produto:', error);
      }
    }
  };

  const handleSolicitanteChange = (event) => {
    setSolicitanteId(event.target.value);
  };

  const handleEstoqueChange = (event) => {
    setEstoqueId(event.target.value);
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
      <Typography variant="h6" gutterBottom>
        Saída de Itens
      </Typography>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            sx={{ width: '100%' }}
            type="text"
            label="Pesquise por ID ou Descrição"
            value={produtoId}
            onChange={handleSearchChange}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ width: '100%' }}
            type="number"
            label="Quantidade"
            value={quantidade}
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <TextField sx={{ width: '100%' }} type="date" value={data} onChange={(e) => setData(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="origin-stock-label">Estoque de Origem</InputLabel>
            <Select labelId="origin-stock-label" value={estoqueId} onChange={handleEstoqueChange}>
              {estoques.map((estoque) => (
                <MenuItem key={estoque.id} value={estoque.id}>
                  {estoque.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ width: '100%' }}
            type="number"
            label="Usuário"
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ width: '100%' }}>
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
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="generate-receipt-label">Gerar recibo</InputLabel>
            <Select labelId="generate-receipt-label" value={gerarRecibo} onChange={(e) => setGerarRecibo(e.target.value)}>
              <MenuItem value={false}>Sim</MenuItem>
              <MenuItem value={true}>Não</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="output-type-label">Tipo de Saída</InputLabel>
            <Select labelId="output-type-label" value={tipoSaida} onChange={(e) => setTipoSaida(e.target.value)}>
              <MenuItem value="product">Saída de Produtos</MenuItem>
              <MenuItem value="transfer">Transferência entre Estoques</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        {tipoSaida === 'transfer' && (
          <Grid item xs={3}>
            <FormControl sx={{ width: '100%' }}>
              <InputLabel id="destination-stock-label">Estoque de Destino</InputLabel>
              <Select labelId="destination-stock-label" value={destinationStock} onChange={(e) => setDestinationStock(e.target.value)}>
                <MenuItem value="Stock 1">Stock 1</MenuItem>
                <MenuItem value="Stock 2">Stock 2</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        )}
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth onClick={handleSave}>
                Salvar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default OutputItems;
