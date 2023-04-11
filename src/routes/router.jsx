import { Routes, Route } from 'react-router-dom';
import HomePage from '../pages/Home';
import QuizzesPage from '../pages/Quizzes';
// import QuizPage from '../components/Pages/Quiz';


export const HOME_ROUTE = '/';
export const USER_ROUTE = '/user';
export const QUIZZES_ROUTE = '/quiz';
export const QUIZ_ROUTE = '/quiz/:id';

const Router = () => (
  <Routes>
    <Route index element={<HomePage/>} />
    <Route path={HOME_ROUTE} element={<HomePage/>} />
    <Route path={QUIZZES_ROUTE} element={<QuizzesPage/>} />
    {/* <Route path={QUIZ_ROUTE} element={<QuizPage />} />  */}
    
  </Routes>
);

export default Router;