import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container } from '@mui/material';
import QuizForm from '../../components/QuizForm';
import { HOME_ROUTE } from '../../routes/router';
import { createQuiz } from '../../actions/quizActions';

const CreateQuizPage = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [questions, setQuestions] = useState([]);
  const [error, setError] = useState("");
  const navigateTo = useNavigate();

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
    setQuestions([...questions, { description: '' }]);
  };

  const handleRemoveQuestion = (index) => {
    const updatedQuestions = [...questions];
    updatedQuestions.splice(index, 1);
    setQuestions(updatedQuestions);
  };

  const handleCreateQuiz = async () => {
    try {
      await createQuiz(
        name,
        description,
        questions
      );
      navigateTo(HOME_ROUTE);
    } catch (error) {
      console.error('Erro ao criar o cadastro:', error);
      setError(error.message);
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
          error={error}
          onNameChange={handleNameChange}
          onDescriptionChange={handleDescriptionChange}
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
