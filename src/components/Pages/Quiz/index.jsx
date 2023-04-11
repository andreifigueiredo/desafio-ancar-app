const QuizPage = () => {
  const quizzes = [
    { id: 1, name: 'Quiz 1', description: 'Descrição do Quiz 1' },
    { id: 2, name: 'Quiz 2', description: 'Descrição do Quiz 2' },
    { id: 3, name: 'Quiz 3', description: 'Descrição do Quiz 3' },
    { id: 4, name: 'Quiz 4', description: 'Descrição do Quiz 4' },
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {quizzes.map(quiz => (
          <div
            key={quiz.id}
            className="bg-white shadow-md rounded-md p-4 hover:shadow-lg transition duration-300"
          >
            <h3 className="text-xl font-medium mb-2">{quiz.name}</h3>
            <p className="text-gray-600">{quiz.description}</p>
            <div className="mt-4 text-center">
              <button className="bg-blue-500 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-600">
                Iniciar Quiz
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuizPage;
