import PropTypes from 'prop-types';
import { Box, Typography, TextField, IconButton, Button, Alert } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const QuizForm = ({
  name,
  description,
  error,
  questions,
  onNameChange,
  onDescriptionChange,
  onQuestionChange,
  onRemoveQuestion,
  onAddQuestion,
  onSaveQuiz,
  onCancelQuiz,
  isCreating
}) => {
  return (
    <Box bgcolor="white" borderRadius={4} boxShadow="0px 0px 10px rgba(0,0,0,0.1)" p={2}>
      <Typography variant="h5" component="h2" gutterBottom>
        Editar Quiz
      </Typography>
      {error && 
        <Alert severity="error" onClose={() => setError(null)}>
          {error}
        </Alert>
      }
      <TextField
        label="Nome do Quiz"
        fullWidth
        variant="outlined"
        margin="normal"
        value={name}
        onChange={onNameChange}
      />
      <TextField
        label="Descrição do Quiz"
        fullWidth
        multiline
        rows={4}
        variant="outlined"
        margin="normal"
        value={description}
        onChange={onDescriptionChange}
      />
      <Typography variant="subtitle1" gutterBottom>
        Questões
      </Typography>
      {questions.map(({id, description}, index) => (
        <Box key={id || index} display="flex" alignItems="center">
          <TextField
            label={`Questão ${index + 1}`}
            fullWidth
            variant="outlined"
            margin="normal"
            value={description}
            onChange={event => onQuestionChange(index, event)}
          />
          {
            isCreating &&
              <IconButton
                aria-label="Remover questão"
                onClick={() => onRemoveQuestion(index)}
                size="small"
              >
                <DeleteIcon />
              </IconButton>
          }
        </Box>
      ))}
      {
        isCreating &&
          <Box display="flex" justifyContent="center" marginTop={2}>
            <Button variant="contained" onClick={onAddQuestion}>
              Adicionar Questão
            </Button>
          </Box>
      }
      <Box display="flex" justifyContent="flex-end" marginTop={2}>
        <Button variant="contained" color="primary" onClick={onSaveQuiz}>
          {isCreating ? "Criar Questionário" : "Salvar Questionáriio"}
        </Button>
        <Button variant="contained" color="secondary" onClick={onCancelQuiz} sx={{ marginLeft: 2 }}>
          Cancelar
        </Button>
      </Box>
    </Box>
  );
};

QuizForm.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  error: PropTypes.string,
  questions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      description: PropTypes.string
    })
  ).isRequired,
  onNameChange: PropTypes.func.isRequired,
  onDescriptionChange: PropTypes.func.isRequired,
  onQuestionChange: PropTypes.func.isRequired,
  onRemoveQuestion: PropTypes.func.isRequired,
  onAddQuestion: PropTypes.func.isRequired,
  onSaveQuiz: PropTypes.func,
  onCancelQuiz: PropTypes.func,
  isCreating: PropTypes.bool
};

export default QuizForm;
