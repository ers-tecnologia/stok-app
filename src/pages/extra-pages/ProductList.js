import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const productItems = [
    {
      id: 1,
      patrimonio: 'Tipo 1',
      descricao: 'Nome 1',
      categoria: 'CNPJ 1',
      estado: 'Rua 1',
      estoque_max: 'Número 1',
      estoque_min: 'Bairro 1',
      data: 'Cidade 1',
      usuario_criacao: 'Estado 1'
    },
    {
      id: 2,
      patrimonio: 'Tipo 2',
      descricao: 'Nome 2',
      categoria: 'CNPJ 2',
      estado: 'Rua 2',
      estoque_max: 'Número 2',
      estoque_min: 'Bairro 2',
      data: 'Cidade 2',
      usuario_criacao: 'Estado 2'
    }
    // adicione mais itens conforme necessário
  ];

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
            <TableCell align="left">Data</TableCell>
            <TableCell align="left">Usuário de Criação</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {productItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.patrimonio}</TableCell>
              <TableCell align="left">{item.descricao}</TableCell>
              <TableCell align="left">{item.categoria}</TableCell>
              <TableCell align="left">{item.estado}</TableCell>
              <TableCell align="left">{item.estoque_max}</TableCell>
              <TableCell align="left">{item.estoque_min}</TableCell>
              <TableCell align="left">{item.data}</TableCell>
              <TableCell align="left">{item.usuario_criacao}</TableCell>
              <TableCell align="left">
                <Button color="primary" onClick={() => history.push(`/cadastro-produto/${item.id}`)}>
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

export default ProductList;