import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const OutputItemsList = () => {
  const navigate = useNavigate();
  const [outputItems, setOuputItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://orion.vps-kinghost.net:3001/api/saida-item');
        const data = await response.json();
        console.log(data);
        setOuputItems(data);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, []);

  const deleteItem = async (id) => {
    try {
      await fetch(`http://orion.vps-kinghost.net:3001/api/saida-item/${id}`, { method: 'DELETE' });
      const response = await fetch('http://orion.vps-kinghost.net:3001/api/saida-item');
      const data = await response.json();
      setOuputItems(data);
    } catch (error) {
      console.error('Error deleting item: ', error);
    }
  };

  return (
    <TableContainer component={Paper}>
      <Button variant="contained" color="primary" component={Link} to="/saida-itens">
        Adicionar
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>ID</TableCell>
            <TableCell align="left">Descrição de Produto</TableCell>
            <TableCell align="left">Quantidade</TableCell>
            <TableCell align="left">Data</TableCell>
            <TableCell align="left">ID de Estoque.</TableCell>
            <TableCell align="left">ID de Usuário.</TableCell>
            <TableCell align="left">ID de Solicitante.</TableCell>
            <TableCell align="left">Gerar Recibo</TableCell>
            <TableCell align="left">Tipo de Saída</TableCell>
            <TableCell align="center">Ações</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {outputItems.map((item) => (
            <TableRow key={item.id}>
              <TableCell component="th" scope="row">
                {item.id}
              </TableCell>
              <TableCell align="left">{item.produto.descricao}</TableCell>
              <TableCell align="left">{item.quantidade}</TableCell>
              <TableCell align="left">{new Date(item.data).toLocaleDateString('pt-BR')}</TableCell>
              <TableCell align="left">{item.estoqueId}</TableCell>
              <TableCell align="left">{item.usuarioId}</TableCell>
              <TableCell align="left">{item.solicitanteId}</TableCell>
              <TableCell align="left">{item.gerarRecibo}</TableCell>
              <TableCell align="left">{item.tipoSaida}</TableCell>
              <TableCell align="center">
                <Button color="primary" onClick={() => navigate(`/saida-itens/${item.id}`)}>
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

export default OutputItemsList;
