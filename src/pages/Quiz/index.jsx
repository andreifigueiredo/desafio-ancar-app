// import { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { getQuiz, updateQuiz, deleteQuiz } from '../../../actions/quizActions';
// import { QUIZZES_ROUTE } from '../../../routes/router';
// import Input from '../../Common/Input';
// import PropTypes from 'prop-types';

// const EditQuizPage = ({ quizId }) => {
//   const [quiz, setQuiz] = useState({});
//   const [name, setName] = useState('');
//   const [description, setDescription] = useState('');
//   const [questions, setQuestions] = useState([]);
//   const navigateTo = useNavigate();

//   useEffect(() => {
//     const fetchQuiz = async () => {
//       try {
//         const quizData = await getQuiz(quizId);
//         setQuiz(quizData);
//         setName(quizData.name);
//         setDescription(quizData.description);
//         setQuestions(quizData.questions);
//       } catch (error) {
//         console.error('Erro ao buscar o quiz:', error);
//         if (error && error.status === 401) {
//           navigateTo('/');
//         }
//       }
//     };
//     fetchQuiz();
//   }, [navigateTo]);

//   const handleQuestionChange = (index, event) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions[index] = event.target.value;
//     setQuestions(updatedQuestions);
//   };

//   const handleAddQuestion = () => {
//     setQuestions([...questions, '']);
//   };

//   const handleRemoveQuestion = (index) => {
//     const updatedQuestions = [...questions];
//     updatedQuestions.splice(index, 1);
//     setQuestions(updatedQuestions);
//   };

//   const handleUpdateQuiz = async () => {
//     try {
//       const updatedQuiz = {
//         ...quiz,
//         name,
//         description,
//         questions,
//       };
//       await updateQuiz(quizId, updatedQuiz);
//       navigateTo(`${QUIZZES_ROUTE}/${quizId}`);
//     } catch (error) {
//       console.error('Erro ao atualizar o quiz:', error);
//     }
//   };

//   const handleDeleteQuiz = async () => {
//     try {
//       await deleteQuiz(quizId);
//       navigateTo(QUIZZES_ROUTE);
//     } catch (error) {
//       console.error('Erro ao deletar o quiz:', error);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <h2 className="text-2xl font-medium mb-2">Editar Quiz</h2>
//         <div className="bg-white shadow-md rounded-md p-4">
//           <Input
//             label="Nome"
//             id="name"
//             value={name}
//             onChange={(event) => setName(event.target.value)}
//           />
//           <Input
//             label="Descrição"
//             id="description"
//             value={description}
//             onChange={(event) => setDescription(event.target.value)}
//           />
//           <h3 className="text-lg font-medium mt-4 mb-2">Perguntas</h3>
//           {questions.map((question, index) => (
//             <div key={index} className="flex mb-2">
//               <Input
//                 label={`Pergunta ${index + 1}`}
//                 id={`question-${index}`}
//                 value={question}
//                 onChange={(event) => handleQuestionChange(index, event)}
//               />
//               <button
//                 type="button"
//                 className="ml-2 bg-red-500 text-white font-medium py-2
//                 px-4 rounded-md hover:bg-red-600 focus:bg-red-600 transition duration-300"
//                 onClick={() => handleRemoveQuestion(index)}
//               >
//                 Remover
//               </button>
//             </div>
//           ))}
//           <button
//             type="button"
//             className="mt-2 bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:bg-blue-600 transition duration-300"
//             onClick={handleAddQuestion}
//           >
//             Adicionar Pergunta
//           </button>
//           <div className="mt-4 flex justify-between">
//             <button
//               type="button"
//               className="bg-red-500 text-white font-medium py-2 px-4 rounded-md hover:bg-red-600 focus:bg-red-600 transition duration-300"
//               onClick={handleDeleteQuiz}
//             >
//               Deletar Quiz
//             </button>
//             <button
//               type="button"
//               className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600 focus:bg-blue-600 transition duration-300"
//               onClick={handleUpdateQuiz}
//             >
//               Salvar Alterações
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// EditQuizPage.propTypes = {
//   quizId: PropTypes.string.isRequired,
// };

// export default EditQuizPage;
