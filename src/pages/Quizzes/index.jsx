import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import QuizForm from '../../components/QuizForm';
import { HOME_ROUTE } from '../../routes/router';

const CreateQuizPage = () => {
  const [quiz, setQuiz] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigateTo = useNavigate();

  
  const createQuiz = async (quizId, updatedQuiz) => {
    console.log('Mock: createQuiz', quizId, updatedQuiz);
  };

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

  const handleCreateQuiz = async () => {
    try {
      const updatedQuiz = {
        ...quiz,
        name,
        description,
        questions,
      };
      await createQuiz(quizId, updatedQuiz);
      navigateTo(`/quizzes/${quizId}`);
    } catch (error) {
      console.error('Erro ao atualizar o quiz:', error);
    }
  };

  const handleCancelQuiz = () => {
    navigateTo(HOME_ROUTE);
  }

  return (
    <Box minHeight="100vh" bgcolor="#f8fafc" display="flex" alignItems="center" justifyContent="center">
      <Container maxWidth="sm">
        <QuizForm 
          name={name} 
          description={description}
          questions={questions}
          onNameChange={setName}
          onDescriptionChange={setDescription}
          onQuestionChange={handleQuestionChange}
          onRemoveQuestion={handleRemoveQuestion}
          onAddQuestion={handleAddQuestion}
          onSaveQuiz={handleCreateQuiz}
          onCancelQuiz={handleCancelQuiz}
          isCreating={true}  
        />
      </Container>
    </Box>
  );
};

export default CreateQuizPage;
