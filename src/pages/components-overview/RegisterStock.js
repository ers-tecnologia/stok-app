import { TextField, Button, Grid } from '@mui/material';

const RegisterStock = () => {
  return (
    <Grid container direction="column" spacing={2}>
      <Grid item>
        <TextField label="ID" type="number" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Tipo de Unidade" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Nome/Razão Social" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="CNPJ" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Rua" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Número" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Bairro" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Cidade" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Estado Sigla" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '100%' }}>
          Enviar
        </Button>
      </Grid>
    </Grid>
  );
};

export default RegisterStock;
