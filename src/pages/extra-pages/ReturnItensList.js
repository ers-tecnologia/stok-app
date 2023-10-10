import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ReturnItensList = () => {
  const navigate = useNavigate();
  const [returnItens, setReturnItens] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/devolucao-item');
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
      await fetch(`http://localhost:3000/api/devolucao-item/${id}`, { method: 'DELETE' });
      const response = await fetch('http://localhost:3000/api/devolucao-item');
      const data = await response.json();
      setReturnItens(data);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/devolucao-itens">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">ID de Produto</TableCell>
            <TableCell align="left">Quantidade</TableCell>
            <TableCell align="left">Data de Entrada</TableCell>
            <TableCell align="left">ID de Solicitante</TableCell>
            <TableCell align="left">ID de Estoque.</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {returnItens.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.produtoId}</TableCell>
              <TableCell align="left">{item.quantidade}</TableCell>
              <TableCell align="left">{item.dataEntrada}</TableCell>
              <TableCell align="left">{item.solicitanteId}</TableCell>
              <TableCell align="left">{item.estoqueId}</TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={() => navigate(`/devolucao-itens/${item.id}`)}>
                  <EditIcon />
                </Button>
                <Button color="secondary" onClick={() => deleteItem(item.id)}>
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

export default ReturnItensList;
