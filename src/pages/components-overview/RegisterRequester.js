import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegisterRequester = () => {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');


  const navigate = useNavigate();

  const handleSave = async () => {
    const response = await fetch('http://localhost:3000/api/solicitante', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ nome }),
    });

    if (response.ok) {
      navigate('/lista-solicitante');
    } else {
      console.log("ERRO");
    }
  };
  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={1}>
          <TextField label="ID" type="number" disabled fullWidth value={id} onChange={(e) => setId(e.target.value)} />
        </Grid>
        <Grid item xs={11}>
          <TextField label="Nome" fullWidth value={nome} onChange={(e) => setNome(e.target.value)} />
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" color="success" fullWidth onClick={handleSave}>
            Salvar
          </Button>
        </Grid>
        <Grid item xs={1}>
          <Button variant="contained" component={Link} to="/lista-solicitante" color="primary" fullWidth>
            Voltar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterRequester;
