import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { TextField, Select, MenuItem, Button, Grid, Paper, Typography, FormControl, InputLabel } from '@mui/material';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const schema = yup.object().shape({
  search: yup.string().required('Campo obrigatório'),
  quantity: yup.number().required('Campo obrigatório'),
  date: yup.date().required('Campo obrigatório'),
  stock: yup.string().required('Campo obrigatório'),
  user: yup.string().required('Campo obrigatório')
});

const ItemsInput = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  const [originStock, setOriginStock] = useState('');

  return (
    <Paper elevation={3} style={{ padding: 20, margin: 'auto' }}>
      <Typography variant="h6" gutterBottom>
        Entrada de Itens
      </Typography>
      <Grid container spacing={2} component="form" onSubmit={handleSubmit(onSubmit)}>
        <Grid item xs={12}>
          <TextField
            sx={{ width: '100%' }}
            {...register('search')}
            error={!!errors.search}
            helperText={errors.search?.message}
            label="Buscar produto"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ width: '100%' }}
            {...register('quantity')}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            label="Quantidade"
            type="number"
          />
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ width: '100%' }}
            {...register('date')}
            error={!!errors.date}
            helperText={errors.date?.message}
            label="Data de entrada"
            type="date"
            InputLabelProps={{
              shrink: true
            }}
          />
        </Grid>
        <Grid item xs={3}>
          <FormControl sx={{ width: '100%' }}>
            <InputLabel id="origin-stock-label">Estoque de Origem</InputLabel>
            <Select labelId="origin-stock-label" value={originStock} onChange={(e) => setOriginStock(e.target.value)}>
              <MenuItem value="Stock 1">Stock 1</MenuItem>
              <MenuItem value="Stock 2">Stock 2</MenuItem>
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={3}>
          <TextField
            sx={{ width: '100%' }}
            {...register('user')}
            error={!!errors.user}
            helperText={errors.user?.message}
            label="Usuário responsável"
            defaultValue="Usuário Logado"
          />
        </Grid>
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
    </Paper>
  );
};

export default ItemsInput;
