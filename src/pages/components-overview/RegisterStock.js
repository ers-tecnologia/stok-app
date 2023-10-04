import React from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { Link } from 'react-router-dom';

const RegisterStock = () => {




  
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <TextField label="ID" type="number" fullWidth />
            </Grid>

            <Grid item xs={11}>
              <TextField label="Descrição" fullWidth />
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth>
                Salvar
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" component={Link} to="/lista-estoque" color="primary" fullWidth>
                Voltar
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterStock;
