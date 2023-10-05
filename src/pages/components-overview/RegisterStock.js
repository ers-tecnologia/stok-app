import React, { useState } from 'react';
import { TextField, Button, Grid, Paper } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegisterStock = () => {
  const [id, setId] = useState('');
  const [descricao, setDescricao] = useState('');
  const navigate = useNavigate();

  const handleSave = async () => {
    const response = await fetch('http://localhost:3000/api/estoque', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ descricao }),
    });

    if (response.ok) {
      navigate('/lista-estoque');
    } else {
      console.log("ERRO");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Grid container spacing={2}>
            <Grid item xs={1}>
              <TextField label="ID" type="number" disabled fullWidth value={id} onChange={(e) => setId(e.target.value)} />
            </Grid>

            <Grid item xs={11}>
              <TextField label="Descrição" fullWidth value={descricao} onChange={(e) => setDescricao(e.target.value)} />
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth onClick={handleSave}>
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