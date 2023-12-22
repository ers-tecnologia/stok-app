import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  TextField
} from '@mui/material';

const Inventory = () => {
  const navigate = useNavigate();
  const [estoques, setEstoques] = useState([]);
  const [estoqueId, setEstoqueId] = useState('');
  const [products, setProducts] = useState([]);
  const [inventoryStarted, setInventoryStarted] = useState(false);
  const [newSaldos, setNewSaldos] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseEstoque = await fetch('http://localhost:3001/api/estoque');
        const dataEstoque = await responseEstoque.json();
        setEstoques(dataEstoque);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const fetchProducts = async () => {
    try {
      const responseSaldo = await fetch(`http://localhost:3001/api/saldo/inventario?estoqueId=${estoqueId}`);
      const dataSaldo = await responseSaldo.json();

      const productRequests = dataSaldo.map(async (saldoItem) => {
        const { produtoId, saldo } = saldoItem;

        const responseProduto = await fetch(`http://localhost:3001/api/produto/${produtoId}`);
        const dataProduto = await responseProduto.json();

        const responseEstoque = await fetch(`http://localhost:3001/api/estoque/${saldoItem.estoqueId}`);
        const dataEstoque = await responseEstoque.json();

        return {
          produtoId,
          saldo,
          descricaoProduto: dataProduto.descricao,
          descricaoEstoque: dataEstoque.descricao
        };
      });

      const productsData = await Promise.all(productRequests);
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching saldo: ', error);
    }
  };

  useEffect(() => {
    if (estoqueId) {
      fetchProducts();
    }
  }, [estoqueId]);

  const startInventory = () => {
    console.log('Inventário iniciado!');
    setInventoryStarted(true);
  };

  const saveInventory = async () => {
    try {
      const saveRequests = Object.entries(newSaldos).map(async ([productId, newSaldo]) => {
        console.log('Produto ID:', productId, 'Novo Saldo:', newSaldo);

        // Verificar se o novo saldo é um número ou uma string vazia antes de enviar a requisição
        if (!isNaN(newSaldo) || newSaldo === '') {
          const response = await fetch('http://localhost:3001/api/saldo', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              produtoId: productId,
              estoqueId: estoqueId,
              saldo: newSaldo
            })
          });

          if (!response.ok) {
            console.error(`Erro ao salvar saldo para o produto ${productId}`);
          }
        } else {
          console.error(`Novo saldo para o produto ${productId} não é um número válido.`);
        }
      });

      await Promise.all(saveRequests);

      console.log('Inventário salvo com sucesso!');
      setInventoryStarted(false);

      // Realizar o refresh da página
      window.location.reload();
    } catch (error) {
      console.error('Erro ao salvar inventário: ', error);
    }
  };

  const cancelInventory = () => {
    console.log('Inventário cancelado');
    setInventoryStarted(false);
    navigate('/inventario');
  };

  const handleNewSaldoChange = (productId) => (e) => {
    const value = e.target.value;

    // Garante que o valor seja convertido para número ou permaneça vazio
    const newSaldoValue = value !== '' ? parseFloat(value) : '';

    setNewSaldos((prevSaldos) => ({
      ...prevSaldos,
      [productId]: newSaldoValue
    }));
  };

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item xs={3}>
          <FormControl fullWidth>
            <InputLabel id="estoque-label">Estoque</InputLabel>
            <Select labelId="estoque-label" id="estoque" value={estoqueId} onChange={(e) => setEstoqueId(e.target.value)}>
              {estoques.map((estoque) => (
                <MenuItem key={estoque.id} value={estoque.id}>
                  {estoque.descricao}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>
        <Grid item xs={2}>
          <Box mb={1}>
            {inventoryStarted ? (
              <Button
                variant="contained"
                sx={{ backgroundColor: '#4CAF50', '&:hover': { backgroundColor: '#45a049' } }}
                onClick={saveInventory}
                fullWidth
              >
                Salvar
              </Button>
            ) : null}
          </Box>
        </Grid>
        <Grid item xs={2}>
          <Box mb={2}>
            {inventoryStarted ? (
              <Button
                variant="contained"
                sx={{ backgroundColor: '#f44336', '&:hover': { backgroundColor: '#d32f2f' } }}
                onClick={cancelInventory}
                fullWidth
              >
                Cancelar
              </Button>
            ) : (
              <Button variant="contained" color="primary" onClick={startInventory} fullWidth>
                Iniciar Inventário
              </Button>
            )}
          </Box>
        </Grid>
      </Grid>

      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Produto ID</TableCell>
              <TableCell>Descrição Produto</TableCell>
              <TableCell>Descrição Estoque</TableCell>
              <TableCell>Saldo</TableCell>
              <TableCell>Novo Saldo</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.produtoId}>
                <TableCell>{product.produtoId}</TableCell>
                <TableCell>{product.descricaoProduto}</TableCell>
                <TableCell>{product.descricaoEstoque}</TableCell>
                <TableCell>{product.saldo}</TableCell>
                <TableCell>
                  {inventoryStarted ? (
                    <TextField
                      fullWidth
                      id={`new-saldo-${product.produtoId}`}
                      variant="outlined"
                      type="number"
                      value={newSaldos[product.produtoId] !== undefined ? newSaldos[product.produtoId] : ''}
                      onChange={handleNewSaldoChange(product.produtoId)}
                    />
                  ) : null}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Inventory;
