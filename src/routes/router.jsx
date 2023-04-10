import { Routes, Route } from 'react-router-dom';
import HomePage from '../components/Pages/Home';
import QuizPage from '../components/Pages/Quiz';

export const HOME_ROUTE = '/';
export const USER_ROUTE = '/user';
export const QUIZ_ROUTE = '/quiz';

const Router = () => (
  <Routes>
    <Route index element={<HomePage/>} />
    <Route path={HOME_ROUTE} element={<HomePage/>} />
    <Route path={QUIZ_ROUTE} element={<QuizPage/>} />
  </Routes>
);

export default Router;