import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const ProductList = () => {
  const [produto, setProduto] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/produto');
        const data = await response.json();
        console.log(data);
        setProduto(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    try {
      await fetch(`http://localhost:3000/api/produto/${id}`, { method: 'DELETE' });
      const response = await fetch('http://localhost:3000/api/produto');
      const data = await response.json();
      setProduto(data);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/cadastro-produto">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Patrimônio</TableCell>
            <TableCell align="left">Descrição</TableCell>
            <TableCell align="left">Categoria</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left">Estoque Min.</TableCell>
            <TableCell align="left">Estoque Max.</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {produto.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.patrimonio}</TableCell>
              <TableCell align="left">{item.descricao}</TableCell>
              <TableCell align="left">{item.categoriaId}</TableCell>
              <TableCell align="left">{item.estado}</TableCell>
              <TableCell align="left">{item.estoqueMaximo}</TableCell>
              <TableCell align="left">{item.estoqueMinimo}</TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={() => history.push(`/cadastro-produto/${item.id}`)}>
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

export default ProductList;
