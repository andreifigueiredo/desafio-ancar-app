import { QUIZ_ENDPOINT } from "../routes/backendRoutes";

export const listQuizzes = async (limit, page) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}?limit=${limit}&page=${page}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
    if (response.ok) {
      const quizzes = await response.json();
      return quizzes;
    } else {
      throw response;
    }
  } catch (error) {
    console.error('Erro ao listar os quizzes:', error);
    throw error;
  }
};
