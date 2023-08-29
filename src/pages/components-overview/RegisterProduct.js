import React from 'react';
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

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
    <Grid container direction="column" spacing={2} sx={{ maxWidth: '600px', margin: '0 auto' }}>
      <Grid item>
        <TextField label="ID" type="number" disabled sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Patrimônio" type="number" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Descrição" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel>Categoria</InputLabel>
          <Select
            value={categoria}
            onChange={handleCategoriaChange}
          >
            {/*  categorias vindo do backend */}
            <MenuItem value={10}>Categoria 1</MenuItem>
            <MenuItem value={20}>Categoria 2</MenuItem>
            <MenuItem value={30}>Categoria 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel>Estado</InputLabel>
          <Select
            value={estado}
            onChange={handleEstadoChange}
          >
            {/*  estados vindos do backend */}
            <MenuItem value={10}>Estado 1</MenuItem>
            <MenuItem value={20}>Estado 2</MenuItem>
            <MenuItem value={30}>Estado 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField label="Estoque Mínimo" type="number" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Estoque Máximo" type="number" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField type="date" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Usuário de Criação" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
          Inserir
        </Button>
      </Grid>
      <Grid item>
        <TextField label="Pesquisar" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
          Editar Produto
        </Button>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
          Desativar Produto
        </Button>
      </Grid>
    </Grid>
  )
}

export default RegisterProduct;
