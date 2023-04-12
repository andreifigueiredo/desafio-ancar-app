import { QUIZ_ENDPOINT } from "../routes/backendRoutes";

export const listQuizzes = async (limit, page) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}?limit=${limit}&page=${page}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw response;
    }
  } catch (error) {
    console.error('Erro ao listar os quizzes:', error);
    throw error;
  }
};

export const getQuiz = async (quizId) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}/${quizId}`);
    if (response.ok) {
      return await response.json();
    } else {
      throw response;
    }
  } catch (error) {
    console.error('Erro ao listar os quizzes:', error);
    throw error;
  }
};

export const createQuiz = async (name, description, questions) => {
  try {
    const response = await fetch(QUIZ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, questions }),
    });

    if (response.ok) {
      return true; 
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);     
    }
  } catch (error) {
    console.error('Erro na criação de questionário:', error);
    throw error; 
  }
};

export const updateQuiz = async (quizId, name, description, questions) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}/${quizId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, description, questions }),
    });

    if (response.ok) {
      return true; 
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);     
    }
  } catch (error) {
    console.error('Erro na edição de questionário:', error);
    throw error; 
  }
};