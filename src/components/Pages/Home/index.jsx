import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import { login } from "../../../actions/authActions";
import { QUIZ_ROUTE } from "../../../routes/router";
import Input from "../../Common/Input";
import { cpfMask } from "../../../masks/cnpjMask";

const HomePage = () => {
  const [cpf, setCpf] = useState("");
  const [password, setPassword] = useState("");
  const navigateTo = useNavigate();

  const handleCpfChange = (e) => {
    setCpf(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await login(cpf, password);
      navigateTo(QUIZ_ROUTE); 
    } catch (error) {
      console.error('Erro ao realizar login:', error);
    }
    setCpf("");
    setPassword("");
  };
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-900 mt-6 text-center">
            Sign in to your Ancar Form account
          </h2>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <input type="hidden" name="remember" value="true" />
          <div className="rounded-md shadow-sm -space-y-px">
              <Input
                id="cpf"
                type="text"
                autoComplete="current-password"
                required
                label="CPF"
                value={cpfMask(cpf)}
                onChange={handleCpfChange}
              />
              <Input
                id="password"
                type="password"
                autoComplete="current-password"
                required
                label="Password"
                value={password}
                onChange={handlePasswordChange}
              />
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 text-sm font-medium text-white bg-blue-500 border border-transparent rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default HomePage;
