import React from 'react';
import { TextField, Button, Grid, FormControl, FormControlLabel, Checkbox} from '@mui/material';

const RegisterUser = () => {

  const [perfil, setPerfil] = React.useState({
    perfil1: false,
    perfil2: false,
  });

  const [estoque, setEstoque] = React.useState({
    estoque1: false,
    estoque2: false,
  });

  const handlePerfilChange = (event) => {
    setPerfil({ ...perfil, [event.target.name]: event.target.checked });
  };

  const handleEstoqueChange = (event) => {
    setEstoque({ ...estoque, [event.target.name]: event.target.checked });
  };

  return (
    <Grid container direction="column" spacing={2} sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <Grid item>
        <TextField label="ID" type="number" disabled sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Nome" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="E-mail" type="email" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Senha" type="password" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <FormControlLabel
            control={<Checkbox checked={perfil.perfil1} onChange={handlePerfilChange} name="perfil1" />}
            label="Perfil 1"
          />
          <FormControlLabel
            control={<Checkbox checked={perfil.perfil2} onChange={handlePerfilChange} name="perfil2" />}
            label="Perfil 2"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <FormControl component="fieldset">
          <FormControlLabel
            control={<Checkbox checked={estoque.estoque1} onChange={handleEstoqueChange} name="estoque1" />}
            label="Estoque 1"
          />
          <FormControlLabel
            control={<Checkbox checked={estoque.estoque2} onChange={handleEstoqueChange} name="estoque2" />}
            label="Estoque 2"
          />
        </FormControl>
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '50%', mx: 'auto' }}>
          Registrar
        </Button>
      </Grid>
    </Grid>
  )
}

export default RegisterUser;
