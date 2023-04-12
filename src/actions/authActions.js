import { AUTH_ENDPOINT } from "../routes/backendRoutes";

export const signUp = async (name, cpf, password) => {
  try {
    const response = await fetch(`${AUTH_ENDPOINT}/signup`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, cpf, password }),
    });

    if (response.ok) {
      return true; 
    } else {
      const errorData = await response.json();
      throw new Error(errorData.message);     
    }
  } catch (error) {
    console.error('Erro ao realizar cadastro:', error);
    throw error; 
  }
};
