import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const RequesterList = () => {
  const solicitanteItems = [
    {
      id: 1,
      name: 'Nome 1',
      telefone: '24574151',
      estoque: 'CNPJ 1',
    },
    {
      id: 2,
      name: 'Nome 2',
      telefone: '196498651',
      estoque: 'CNPJ 2',
    }
    // adicione mais itens conforme necessário
  ];

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/cadastro-solicitante">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="left">Telefone</TableCell>
            <TableCell align="left">Estoque</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {solicitanteItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.telefone}</TableCell>
              <TableCell align="left">{item.estoque}</TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={() => history.push(`/cadastro-estoque/${item.id}`)}>
                  <EditIcon/>
                </Button>
                <Button color="secondary" onClick={() => deleteItem(item.id)}>
                <DeleteIcon/>
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RequesterList;