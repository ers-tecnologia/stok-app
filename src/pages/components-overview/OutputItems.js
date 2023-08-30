import React from 'react';
import { useState } from 'react';
import { TextField, Button, FormControl, Select, MenuItem, InputLabel, Grid } from '@mui/material';

const OutputItems = () => {
  const [search, setSearch] = useState('');
  const [quantity, setQuantity] = useState('');
  const [date, setDate] = useState('');
  const [originStock, setOriginStock] = useState('');
  const [user, setUser] = useState('');
  const [solicitants, setSolicitants] = useState([]);
  const [generateReceipt, setGenerateReceipt] = useState(false);
  const [destinationStock, setDestinationStock] = useState('');
  const [outputType, setOutputType] = useState('');

  return (
    <Grid container direction="column" spacing={2} sx={{ maxWidth: '500px', margin: '0 auto' }}>
      <Grid item>
        <TextField
          sx={{ width: '100%' }}
          label="Pesquise por ID, nome ou categoria"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Grid>

      <Grid item>
        <TextField sx={{ width: '100%' }} label="Quantidade" value={quantity} onChange={(e) => setQuantity(e.target.value)} />
      </Grid>

      <Grid item>
        <TextField sx={{ width: '100%' }} type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </Grid>

      <Grid item>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="origin-stock-label">Estoque de Origem</InputLabel>
          <Select labelId="origin-stock-label" value={originStock} onChange={(e) => setOriginStock(e.target.value)}>
            {/* List of available stocks */}
            <MenuItem value="Stock 1">Stock 1</MenuItem>
            <MenuItem value="Stock 2">Stock 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <TextField sx={{ width: '100%' }} label="Usuário" value={user} onChange={(e) => setUser(e.target.value)} />
      </Grid>
      <Grid item>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="solicitants-label">Solicitante</InputLabel>
          <Select labelId="solicitants-label" multiple value={solicitants} onChange={(e) => setSolicitants(e.target.value)}>
            {/* List of available solicitants */}
            <MenuItem value="Solicitant 1">Solicitant 1</MenuItem>
            <MenuItem value="Solicitant 2">Solicitant 2</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="generate-receipt-label">Gerar recibo</InputLabel>
          <Select labelId="generate-receipt-label" value={generateReceipt} onChange={(e) => setGenerateReceipt(e.target.value)}>
            <MenuItem value={false}>Sim</MenuItem>
            <MenuItem value={true}>Não</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item>
        <FormControl sx={{ width: '100%' }}>
          <InputLabel id="output-type-label">Tipo de Saída</InputLabel>
          <Select labelId="output-type-label" value={outputType} onChange={(e) => setOutputType(e.target.value)}>
            <MenuItem value="product">Saída de Produtos</MenuItem>
            <MenuItem value="transfer">Transferência entre Estoques</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      {outputType === 'transfer' && (
        <Grid item>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="destination-stock-label">Estoque de Destino</InputLabel>
            <Select labelId="destination-stock-label" value={destinationStock} onChange={(e) => setDestinationStock(e.target.value)}>
              {/* List of available stocks */}
              <MenuItem value="Stock 1">Stock 1</MenuItem>
              <MenuItem value="Stock 2">Stock 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
      )}

      {/* Other components and logic */}
      <Grid item>
        <Button variant="contained" color="primary" type="submit">
          Finalizar Saída
        </Button>
      </Grid>
    </Grid>
  );
};

export default OutputItems;
