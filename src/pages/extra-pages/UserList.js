import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const StockList = () => {
  const stockItems = [
    {
      id: 1,
      name: 'Nome 1',
      email: 'CNPJ 1',
      senha: 'Rua 1',
      perfil: 'Número 1',
      estoque: 'Bairro 1'
    },
    {
      id: 2,
      name: 'Nome 2',
      email: 'CNPJ 2',
      senha: 'Rua 2',
      perfil: 'Número 2',
      estoque: 'Bairro 2'
    }
    // adicione mais itens conforme necessário
  ];

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/cadastro-usuario">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Senha</TableCell>
            <TableCell align="left">Perfil</TableCell>
            <TableCell align="left">Estoque</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.email}</TableCell>
              <TableCell align="left">{item.senha}</TableCell>
              <TableCell align="left">{item.perfil}</TableCell>
              <TableCell align="left">{item.estoque}</TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={() => history.push(`/cadastro-estoque/${item.id}`)}>
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

export default StockList;
