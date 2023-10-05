import React, { useState } from 'react';
import { TextField, Button, Grid, FormControl, Paper, MenuItem, InputLabel, Select } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const RegisterUser = () => {
  const navigate = useNavigate();
  const [nome, setNome] = useState();
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [perfil, setPerfil] = useState();

  const handleEstadoChange = (event) => {
    setPerfil(event.target.value);
  };

  const handleSave = async () => {
    const response = await fetch('http://localhost:3000/api/usuario', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ nome, email, senha, perfil })
    });

    if (response.ok) {
      navigate('/lista-usuario');
    } else {
      console.log("ERRO");
    }
  };

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <TextField label="Nome" fullWidth value={nome} onChange={(e) => setNome(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <TextField label="E-mail" type="email" fullWidth value={email} onChange={(e) => setEmail(e.target.value)} />
        </Grid>
        <Grid item xs={2}>
          <TextField label="Senha" type="password" fullWidth value={senha} onChange={(e) => setSenha(e.target.value)} />
        </Grid>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel>Perfil</InputLabel>
            <Select value={perfil} onChange={handleEstadoChange}>
              <MenuItem value={perfil} onChange={(e) => setPerfil(e.target.value)} />
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Grid container spacing={1}>
            <Grid item xs={1}>
              <Button variant="contained" color="success" fullWidth onClick={handleSave}>
                Salvar
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Button variant="contained" component={Link} to="/lista-usuario" color="primary" fullWidth>
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
