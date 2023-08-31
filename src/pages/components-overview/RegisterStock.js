import { TextField, Button, Grid, Paper } from '@mui/material';

const RegisterStock = () => {
  return (
    <Paper elevation={3} style={{padding: 20, margin: 'auto'}}>
      <Grid container  spacing={2}>
        <Grid item xs={12}>
          <TextField label="ID" type="number" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Tipo de Unidade" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Nome/Razão Social" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="CNPJ" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Rua" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Número" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Bairro" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Cidade" fullWidth />
        </Grid>
        <Grid item xs={6}>
          <TextField label="Estado Sigla" fullWidth />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" fullWidth>
            Enviar
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default RegisterStock;

