import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const StockList = () => {
  const stockItems = [
    {
      id: 1,
      unitType: 'Tipo 1',
      name: 'Nome 1',
      cnpj: 'CNPJ 1',
      street: 'Rua 1',
      number: 'Número 1',
      neighborhood: 'Bairro 1',
      city: 'Cidade 1',
      state: 'Estado 1'
    },
    {
      id: 2,
      unitType: 'Tipo 2',
      name: 'Nome 2',
      cnpj: 'CNPJ 2',
      street: 'Rua 2',
      number: 'Número 2',
      neighborhood: 'Bairro 2',
      city: 'Cidade 2',
      state: 'Estado 2'
    }
    // adicione mais itens conforme necessário
  ];

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/cadastro-estoque">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Tipo de Unidade</TableCell>
            <TableCell align="left">Nome/Razão Social</TableCell>
            <TableCell align="left">CNPJ</TableCell>
            <TableCell align="left">Rua</TableCell>
            <TableCell align="left">Número</TableCell>
            <TableCell align="left">Bairro</TableCell>
            <TableCell align="left">Cidade</TableCell>
            <TableCell align="left">Estado Sigla</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.unitType}</TableCell>
              <TableCell align="left">{item.name}</TableCell>
              <TableCell align="left">{item.cnpj}</TableCell>
              <TableCell align="left">{item.street}</TableCell>
              <TableCell align="left">{item.number}</TableCell>
              <TableCell align="left">{item.neighborhood}</TableCell>
              <TableCell align="left">{item.city}</TableCell>
              <TableCell align="left">{item.state}</TableCell>
              <TableCell align="left">
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

/*<Button sx={{ margin: '20px' }} variant="contained" color="primary" href="/free/cadastro-estoque">
          Novo
        </Button>*/
