import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import QuizForm from '../../components/QuizForm';
import { HOME_ROUTE } from '../../routes/router';
import { getQuiz, updateQuiz } from '../../actions/quizActions';

const QuizPage = () => {
  const [quiz, setQuiz] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const { id: quizId } = useParams(); 
  const navigateTo = useNavigate();

  useEffect(() => {
    const fetchQuiz = async () => {
      try {
        const quizData = await getQuiz(quizId);
        setQuiz(quizData);
        setName(quizData.name);
        setDescription(quizData.description);
        setQuestions(quizData.questions);
      } catch (error) {
        console.error('Erro ao buscar o quiz:', error);
        if (error && error.status === 401) {
          navigateTo('/');
        }
      }
    };
    fetchQuiz();
  }, [navigateTo]);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleQuestionChange = (index, event) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].description = event.target.value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    setQuestions([...questions, { id: Date.now(), description: '' }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleCancelQuiz = () => {
    navigateTo(HOME_ROUTE);
  }

  const handleUpdateQuiz = async () => {
    try {
      await updateQuiz(quizId, name, description, questions);
      navigateTo(HOME_ROUTE);
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
      setError(error.message);
    }
  };

  // TODO: CORRIGIR REMOÇÃO DE QUESTÕES
  return (
    <Box minHeight="100vh" bgcolor="#f8fafc" display="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="sm">
        <QuizForm 
          name={name} 
          description={description}
          questions={questions}
          error={error}
          onNameChange={handleNameChange}
          onDescriptionChange={handleDescriptionChange}
          onQuestionChange={handleQuestionChange}
          onRemoveQuestion={handleRemoveQuestion}
          onAddQuestion={handleAddQuestion}
          onSaveQuiz={handleUpdateQuiz}
          onCancelQuiz={handleCancelQuiz}
          isCreating={false}  
        />
      </Container>
    </Box>
  );
};

export default QuizPage;
