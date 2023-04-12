import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { listQuizzes } from '../../actions/quizActions';
import { QUIZZES_ROUTE, USERS_ROUTE } from '../../routes/router';
import { Grid, Card, CardContent, Typography, Button, Box } from '@mui/material';

const HomePage = () => {
  const [quizzes, setQuizzes] = useState([]);
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const quizzesData = await listQuizzes(9, 1);
        setQuizzes(quizzesData);
      } catch (error) {
        console.log('page', error);
        if (error && error.status === 401) {
          navigateTo('/');
        } else {
          console.error('Erro ao buscar os quizzes:', error);
        }
      }
    };
    fetchQuizzes();
  }, [navigateTo]);

  const handleCreateQuiz = () => {
    navigateTo(QUIZZES_ROUTE); 
  };

  const handleCreateUser = () => {
    navigateTo(USERS_ROUTE);
  };

  return (
    <Box minHeight="100vh" bgcolor="#f8f9fa" display="flex" alignItems="center" justifyContent="center">
      <Grid container spacing={4} maxWidth="md" sx={{ mx: 'auto', px: 4 }}>
        {quizzes.map(quiz => (
          <Grid key={quiz.id} item xs={12} sm={6} md={4}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardContent>
                <Typography variant="h6" component="h3" sx={{ mb: 2 }}>
                  {quiz.name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {quiz.description}
                </Typography>
              </CardContent>
              <Button
                onClick={() => navigateTo(`${QUIZZES_ROUTE}/${quiz.id}`)}
                variant="contained"
                color="primary"
                sx={{ mt: 'auto', borderRadius: 0 }}
              >
                Editar Quiz
              </Button>
            </Card>
          </Grid>
        ))}
      </Grid>
      <Box position="absolute" bottom={16} left={0} right={0} display="flex" justifyContent="center">
        <Button variant="contained" color="primary" onClick={handleCreateQuiz} sx={{ mx: 2 }}>
          Criar Questionário
        </Button>
        <Button variant="contained" color="secondary" onClick={handleCreateUser} sx={{ mx: 2 }}>
          Criar Usuário
        </Button>
      </Box>
    </Box>
  );
};

export default HomePage;
