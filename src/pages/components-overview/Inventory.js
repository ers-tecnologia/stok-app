import React from 'react';
import {
  Checkbox,
  Button,
  FormControlLabel,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box
} from '@mui/material';

const Inventory = () => {
  // Adicione a lógica para buscar os dados dos produtos aqui
  const products = [
    { id: 1, stockBalance: 100, physicalCount: 120, name: 'Produto 1', category: 'Categoria 1' },
    { id: 2, stockBalance: 200, physicalCount: 180, name: 'Produto 2', category: 'Categoria 2' }
  ];

  return (
    <div>
      <h1>Inventário</h1>
      <Box mb={2}>
        <Button variant="contained" color="primary" sx={{}}>
          Iniciar Inventário
        </Button>
      </Box>
      <FormControlLabel control={<Checkbox />} label="Inventário por produto" />
      <FormControlLabel control={<Checkbox />} label="Inventário por categoria" />
      <FormControlLabel control={<Checkbox />} label="Inventário por estoque" />
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Saldo do produto em estoque</TableCell>
              <TableCell>Saldo físico da contagem</TableCell>
              <TableCell>Nome do produto</TableCell>
              <TableCell>Categoria</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                <TableCell>{product.stockBalance}</TableCell>
                <TableCell>{product.physicalCount}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inventory;
