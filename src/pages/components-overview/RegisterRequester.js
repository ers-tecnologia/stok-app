import React from 'react';
import { TextField, Button, Grid, Select, MenuItem, InputLabel, FormControl, Paper } from '@mui/material';

const RegisterRequester = () => {
  const [estoque, setEstoque] = React.useState('');

  const handleEstoqueChange = (event) => {
    setEstoque(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container direction="column" spacing={2} sx={{ maxWidth: '500px', margin: '0 auto' }}>
        <Grid item>
          <TextField label="ID" type="number" disabled sx={{ width: '100%' }} />
        </Grid>
        <Grid item>
          <TextField label="Nome" sx={{ width: '100%' }} />
        </Grid>
        <Grid item>
          <TextField label="Telefone" inputProps={{ maxLength: 14 }} sx={{ width: '100%' }} />
        </Grid>
        <Grid item>
          <FormControl fullWidth>
            <InputLabel>Estoque</InputLabel>
            <Select value={estoque} onChange={handleEstoqueChange}>
              {/* estoques vindos do backend */}
              <MenuItem value={10}>Estoque 1</MenuItem>
              <MenuItem value={20}>Estoque 2</MenuItem>
              <MenuItem value={30}>Estoque 3</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item>
          <Button variant="contained" color="primary" sx={{ width: '50%', mx: 'auto' }}>
            Registrar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterRequester;
