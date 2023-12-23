import React, { useEffect, useState } from 'react';
import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const StockList = () => {
  const navigate = useNavigate();
  const [returnItens, setReturnItens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/devolucao-item');
        const data = await response.json();
        setReturnItens(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    try {
      await fetch(`http://localhost:3001/api/devolucao-item/${id}`, { method: 'DELETE' });
      const response = await fetch('http://localhost:3001/api/devolucao-item');
      const data = await response.json();
      setReturnItens(data);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  useEffect(() => {
    fetchSubEstoques();
    fetchEstoques();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/sub-estoque">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Descrição</TableCell>
            <TableCell align="left">Descrição do Estoque</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {subEstoques.map((item) => (
            <TableRow key={item.id}>
              <TableCell>{item.id}</TableCell>
              <TableCell align="left">{item.descricao}</TableCell>
              <TableCell align="left">{estoques.find((estoque) => estoque.id === item.estoqueId)?.descricao || 'N/A'}</TableCell>
              <TableCell align="center">
                <Button disabled color="primary" onClick={() => navigate(`/sub-estoque/${item.id}`)}>
                  <EditIcon />
                </Button>
                <Button disabled color="secondary" onClick={() => deleteItem(item.id)}>
                  <DeleteIcon />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StockList;
