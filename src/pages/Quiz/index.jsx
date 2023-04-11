import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Box, Container } from '@mui/material';
import QuizForm from '../../components/QuizForm';

const QuizPage = ({ quizId }) => {
  const [quiz, setQuiz] = useState({});
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const navigateTo = useNavigate();

  const getQuiz = async (quizId) => {
    return {
      name: 'Nome do Quiz',
      description: 'Descrição do Quiz',
      questions: [
        { id: 1, description: 'Pergunta 1' },
        { id: 2, description: 'Pergunta 2' },
        { id: 3, description: 'Pergunta 3' },
      ],
    };
  };
  
  const updateQuiz = async (quizId, updatedQuiz) => {
    console.log('Mock: updateQuiz', quizId, updatedQuiz);
  };
  
  const deleteQuiz = async (quizId) => {
    console.log('Mock: deleteQuiz', quizId);
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

  const handleUpdateQuiz = async () => {
    try {
      const updatedQuiz = {
        ...quiz,
        name,
        description,
        questions,
      };
      await updateQuiz(quizId, updatedQuiz);
      navigateTo(`/quizzes/${quizId}`);
    } catch (error) {
      console.error('Erro ao atualizar o quiz:', error);
    }
  };

  const handleDeleteQuiz = async () => {
    try {
      await deleteQuiz(quizId);
      navigateTo('/quizzes');
    } catch (error) {
      console.error('Erro ao deletar o quiz:', error);
    }
  };

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
          onSaveQuiz={handleUpdateQuiz}
          onDeleteQuiz={handleDeleteQuiz}
          isCreating={false}  
        />
      </Container>
    </Box>
  );
};

QuizPage.propTypes = {
  quizId: PropTypes.string.isRequired,
};

export default QuizPage;
