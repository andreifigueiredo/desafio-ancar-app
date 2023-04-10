const QuizPage = () => {
  const quizzes = [
    { id: 1, name: 'Quiz 1', description: 'Descrição do Quiz 1' },
    { id: 2, name: 'Quiz 2', description: 'Descrição do Quiz 2' },
    { id: 3, name: 'Quiz 3', description: 'Descrição do Quiz 3' },
    { id: 4, name: 'Quiz 4', description: 'Descrição do Quiz 4' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-md rounded-md p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold mb-6">Lista de Questionários</h2>
        <ul>
          {quizzes.map(quiz => (
            <li key={quiz.id} className="mb-4">
              <h3 className="text-xl font-medium">{quiz.name}</h3>
              <p className="text-gray-600">{quiz.description}</p>
            </li>
          ))}
        </ul>
        <div className="mt-8 text-center">
          <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
            Iniciar Quiz
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;