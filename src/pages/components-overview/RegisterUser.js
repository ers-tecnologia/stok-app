import React from 'react';
import { TextField, Button, Grid, FormControl, FormControlLabel, Checkbox} from '@mui/material';

const RegisterUser = () => {
  const [estado, setEstado] = React.useState('');

  const handleEstadoChange = (event) => {
    setEstado(event.target.value);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField label="Nome" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <TextField label="E-mail" type="email" fullWidth />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Senha" type="password" fullWidth />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Perfil</InputLabel>
            <Select value={estado} onChange={handleEstadoChange}>
              <MenuItem value={10}>Perfil 1</MenuItem>
              <MenuItem value={20}>Perfil 2</MenuItem>
              <MenuItem value={30}>Perfil 3</MenuItem>
            </Select>
          </FormControl>
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

export default RegisterUser;
