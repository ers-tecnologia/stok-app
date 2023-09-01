import React from 'react';
import { TextField, Button, Grid, Paper, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const RegisterProduct = () => {
  const [categoria, setCategoria] = React.useState('');
  const [estado, setEstado] = React.useState('');

  const handleCategoriaChange = (event) => {
    setCategoria(event.target.value);
  };

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField label="ID" type="number" disabled fullWidth />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Patrimônio" type="number" fullWidth />
        </Grid>
        <Grid item xs={8}>
          <TextField label="Descrição" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Categoria</InputLabel>
            <Select value={categoria} onChange={handleCategoriaChange}>
              <MenuItem value={10}>Categoria 1</MenuItem>
              <MenuItem value={20}>Categoria 2</MenuItem>
              <MenuItem value={30}>Categoria 3</MenuItem>
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
          <TextField label="Estoque Mínimo" type="number" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Estoque Máximo" type="number" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Ponto de pedido" type="number" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth>
                Salvar
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="primary" fullWidth>
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
