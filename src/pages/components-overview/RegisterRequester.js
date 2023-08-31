import React from 'react';
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl } from '@mui/material';

const RegisterRequester = () => {

  const [estoque, setEstoque] = React.useState('');

  const handleEstoqueChange = (event) => {
    setEstoque(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField label="ID" type="number" disabled fullWidth />
        </Grid>
        <Grid item xs={11}>
          <TextField label="Nome" fullWidth />
        </Grid>
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
    </Paper>
  );
};

export default RegisterRequester;