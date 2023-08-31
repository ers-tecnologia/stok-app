import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Select, MenuItem, Button, Grid, Paper, Typography } from '@mui/material';
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
    control,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(schema)
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Paper elevation={3} style={{ padding: 20, maxWidth: 500, margin: 'auto' }}>
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
        <Grid item xs={12}>
          <TextField
            sx={{ width: '100%' }}
            {...register('quantity')}
            error={!!errors.quantity}
            helperText={errors.quantity?.message}
            label="Quantidade"
            type="number"
          />
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <Controller
            sx={{ width: '100%' }}
            name="stock"
            control={control}
            render={({ field }) => (
              <Select {...field} error={!!errors.stock}>
                <MenuItem value="stock1">Estoque 1</MenuItem>
                <MenuItem value="stock2">Estoque 2</MenuItem>
              </Select>
            )}
          />
          {errors.stock && <p>{errors.stock.message}</p>}
        </Grid>
        <Grid item xs={12}>
          <TextField
            sx={{ width: '100%' }}
            {...register('user')}
            error={!!errors.user}
            helperText={errors.user?.message}
            label="Usuário responsável"
            defaultValue="Usuário Logado"
          />
        </Grid>
        <Grid item xs={12}>
          <Button variant="contained" color="primary" type="submit" sx={{ width: '50%', mx: 'auto' }}>
            Finalizar entrada
          </Button>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default ItemsInput;
