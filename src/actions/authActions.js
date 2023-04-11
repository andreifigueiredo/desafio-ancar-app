import { AUTH_ENDPOINT } from "../routes/backendRoutes";

export const login = async (cpf, password) => {
  try {
    const response = await fetch(`${AUTH_ENDPOINT}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username: cpf, password }),
    });

    if (response.ok) {
      return true; 
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);     
    }
  } catch (error) {
    console.error('Erro ao realizar login:', error);
    throw error; 
  }
};
