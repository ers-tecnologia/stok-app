import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const StockList = () => {
  const stockItems = [
    {
      id: 1,
      descricao: 'fdsiauvfçdaunfçaugdçuaçdugnçasdungçdsungçaungdçngaçngçn'
    },
    {
      id: 2,
      descricao: 'çfdlandçgoiançogndçaong'
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
            <TableCell align="left">Descrição</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {stockItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.descricao}</TableCell>
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

/*<Button sx={{ margin: '20px' }} variant="contained" color="primary" href="/free/cadastro-estoque">
          Novo
        </Button>*/
