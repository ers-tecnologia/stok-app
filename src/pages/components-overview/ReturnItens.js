import React from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem, Paper } from '@mui/material';

const ReturnItems = () => {
  const [estoqueDestino, setEstoqueDestino] = React.useState('');

  const handleEstoqueDestinoChange = (event) => {
    setEstoqueDestino(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField label="Busca do Produto" placeholder="ID, nome ou categoria" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Quantidade" type="number" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Data da Entrada" type="date" InputLabelProps={{ shrink: true }} sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={3}>
          <TextField label="Solicitante" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Estoque Destino</InputLabel>
            <Select value={estoqueDestino} onChange={handleEstoqueDestinoChange}>
              <MenuItem value={10}>Estoque 1</MenuItem>
              <MenuItem value={20}>Estoque 2</MenuItem>
              <MenuItem value={30}>Estoque 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <TextField label="Usuário Responsável" disabled value="Usuário Logado" sx={{ width: '100%' }} />
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={2}>
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
          </Grid>{' '}
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ReturnItems;
