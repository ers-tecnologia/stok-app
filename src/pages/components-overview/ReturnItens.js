import React from 'react';
import { TextField, Button, Grid, FormControl, InputLabel, Select, MenuItem } from '@mui/material';

const ReturnItens = () => {

  const [estoqueDestino, setEstoqueDestino] = React.useState('');

  const handleEstoqueDestinoChange = (event) => {
    setEstoqueDestino(event.target.value);
  };

  return (
    <Grid container direction="column" spacing={2} sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <Grid item>
        <TextField label="Busca do Produto" placeholder="ID, nome ou categoria" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Quantidade" type="number" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Data da Entrada" type="date" InputLabelProps={{ shrink: true }} sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <TextField label="Solicitante" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <FormControl fullWidth>
          <InputLabel>Estoque Destino</InputLabel>
          <Select
            value={estoqueDestino}
            onChange={handleEstoqueDestinoChange}
          >
            {/* estoques vindos do backend */}
            <MenuItem value={10}>Estoque 1</MenuItem>
            <MenuItem value={20}>Estoque 2</MenuItem>
            <MenuItem value={30}>Estoque 3</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item>
        <TextField label="Usuário Responsável" disabled value="Usuário Logado" sx={{ width: '100%' }} />
      </Grid>
      <Grid item>
        <Button variant="contained" color="primary" sx={{ width: '50%', mx: 'auto' }}>
          Finalizar Entrada
        </Button>
      </Grid>
    </Grid>
  )
}

export default ReturnItens;
