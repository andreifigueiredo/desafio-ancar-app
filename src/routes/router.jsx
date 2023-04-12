import { Routes, Route } from 'react-router-dom';
import CreateUserPage from '../pages/Users';
import HomePage from '../pages/Home';
import QuizPage from '../pages/Quiz';
import CreateQuizPage from '../pages/Quizzes';


export const HOME_ROUTE = '/';
export const USERS_ROUTE = '/user';
export const QUIZZES_ROUTE = '/quiz';
export const QUIZ_ROUTE = '/quiz/:id';

const Router = () => (
  <Routes>
    <Route index element={<HomePage/>} />
    <Route path={HOME_ROUTE} element={<HomePage/>} />
    <Route path={QUIZ_ROUTE} element={<QuizPage />} /> 
    <Route path={QUIZZES_ROUTE} element={<CreateQuizPage />} /> 
    <Route path={USERS_ROUTE} element={<CreateUserPage />} />
  </Routes>
);

export default Router;