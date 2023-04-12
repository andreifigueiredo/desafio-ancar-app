import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listQuizzes } from '../../actions/quizActions';
import { QUIZZES_ROUTE, USERS_ROUTE } from '../../routes/router';
import { Grid, Card, CardContent, Typography, Button, Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, TablePagination } from '@mui/material';

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [count, setCount] = useState(0);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizzesData = await listQuizzes(rowsPerPage, page+1);
        setQuizzes(quizzesData.rows);
        setCount(quizzesData.count);
      } catch (error) {
        console.error('page', error);
        if (error && error.status === 401) {
          navigateTo('/');
        } else {
          console.error('Erro ao buscar os quizzes:', error);
        }
      }
    };
    fetchQuizzes();
  }, [page, rowsPerPage]);

  const handleCreateQuiz = () => {
    navigateTo(QUIZZES_ROUTE);
  };

  const handleCreateUser = () => {
    navigateTo(USERS_ROUTE);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <Box minHeight="100vh" bgcolor="#f8f9fa" display="flex" alignItems="center" justifyContent="center">
      <Grid container maxWidth="md" sx={{ mx: 'auto', px: 4 }}>
        <Card>
          <CardContent>
            <Box justifyContent="space-between" display="flex">
            <Typography variant="h6" component="div" sx={{ fontWeight: 'bold' }}>
              Questionários
            </Typography>
              <Button variant="contained" color="primary" onClick={handleCreateQuiz}>
                Criar Quiz
              </Button>
              <Button variant="contained" color="primary" onClick={handleCreateUser} sx={{ ml: 2 }}>
                Criar Usuário
              </Button>
            </Box>
            <TableContainer component={Paper}>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Nome</TableCell>
                    <TableCell>Descrição</TableCell>
                    <TableCell align="center">Ações</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {quizzes.map((quiz) => (
                    <TableRow key={quiz.id}>
                      <TableCell>{quiz.name}</TableCell>
                      <TableCell>{quiz.description}</TableCell>
                      <TableCell align="center">
                        <Button
                          onClick={() => navigateTo(`${QUIZZES_ROUTE}/${quiz.id}`)}
                          variant="contained"
                          color="secondary"
                          sx={{ borderRadius: 0 }}
                        >
                          Editar Quiz
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50]}
              component="div"
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </CardContent>
        </Card>
      </Grid>      
    </Box>
  );
};

export default HomePage;
