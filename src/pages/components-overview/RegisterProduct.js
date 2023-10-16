import React, { useEffect, useState } from 'react';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import { TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem, Typography } from '@mui/material';
import { Link, useNavigate, useParams } from 'react-router-dom';

const RegisterProduct = () => {
  const { id: itemId } = useParams();
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [patrimonio, setPatrimonio] = useState('');
  const [descricao, setDescricao] = useState('');
  const [estoqueMinimo, setEstoqueMinimo] = useState('');
  const [estoqueMaximo, setEstiqueMaximo] = useState('');
  const [pedido, setPedido] = useState();
  const [categoriaId, setCategoriaId] = React.useState('');
  const [categorias, setCategorias] = useState([]);
  const [estado, setEstado] = React.useState('');
  const [selectedFile, setSelectedFile] = React.useState(null);

  const handleCategoriaChange = (event) => {
    setCategoriaId(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  useEffect(() => {
    if (itemId) {
      const fetchData = async () => {
        try {
          const response = await fetch(`http://http://orion.vps-kinghost.net:3001/api/produto/${itemId}`);
          const data = await response.json();
          setId(data.id);
          setDescricao(data.descricao);
          setPatrimonio(data.patrimonio);
          setEstoqueMinimo(data.estoqueMinimo);
          setEstiqueMaximo(data.estoqueMaximo);
          setCategoriaId(data.categoriaId);
          setEstado(data.estado);
        } catch (error) {
          console.error('Error fetching data: ', error);
        }
      };

      fetchData();
    }
  }, [itemId]);

  useEffect(() => {
    const fetchCategorias = async () => {
      const response = await fetch('http://http://orion.vps-kinghost.net:3001/api/categoria');
      const data = await response.json();
      setCategorias(data);
    };

    fetchCategorias();
  }, []);

  const handleSave = async () => {
    const method = itemId ? 'PUT' : 'POST';
    const url = itemId
      ? `http://http://orion.vps-kinghost.net:3001/api/produto/${itemId}`
      : 'http://http://orion.vps-kinghost.net:3001/api/produto';

    const response = await fetch(url, {
      method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ patrimonio, descricao, categoriaId, estado, estoqueMinimo, estoqueMaximo })
    });

    if (response.ok) {
      navigate('/lista-produto');
    } else {
      console.log('ERRO');
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField label="ID" type="number" disabled fullWidth value={id} onChange={(e) => setId(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Patrimônio" type="number" fullWidth value={patrimonio} onChange={(e) => setPatrimonio(e.target.value)} />
        </Grid>
        <Grid item xs={9}>
          <TextField label="Descrição" fullWidth value={descricao} onChange={(e) => setDescricao(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select value={categoriaId} onChange={handleCategoriaChange}>
              {categorias.map((categoria) => (
                <MenuItem key={categoria.id} value={categoria.id}>
                  {categoria.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Estado</InputLabel>
            <Select value={estado} onChange={handleEstadoChange}>
              <MenuItem value={10}>Estado 1</MenuItem>
              <MenuItem value={20}>Estado 2</MenuItem>
              <MenuItem value={30}>Estado 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Estoque Mínimo"
            type="number"
            fullWidth
            value={estoqueMinimo}
            onChange={(e) => setEstoqueMinimo(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField
            label="Estoque Máximo"
            type="number"
            fullWidth
            value={estoqueMaximo}
            onChange={(e) => setEstiqueMaximo(e.target.value)}
          />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Ponto de pedido" type="number" fullWidth value={pedido} onChange={(e) => setPedido(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <input
            accept=".jpg,.png"
            style={{ display: 'none' }}
            id="upload-photo"
            type="file"
            onChange={handleFileChange} // Chama a função quando o arquivo é selecionado
          />
          <label htmlFor="upload-photo">
            <Button variant="contained" color="secondary" component="span" startIcon={<CloudUploadIcon />}>
              Foto produto
            </Button>
          </label>
          {selectedFile && <Typography variant="body1">Arquivo selecionado: {selectedFile.name}</Typography>}
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth onClick={handleSave}>
                Salvar
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" component={Link} to="/lista-produto" color="primary" fullWidth>
                Voltar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterProduct;
