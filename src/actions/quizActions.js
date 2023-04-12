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

// TODO: Daqui pra baixo fazer todas as actions

export const createQuiz = async (quizId) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}/${quizId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
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

export const updateQuiz = async (quizId) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}/${quizId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
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

export const deleteQuiz = async (quizId) => {
  try {
    const response = await fetch(`${QUIZ_ENDPOINT}/${quizId}`, {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`
      }
    });
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
