import React, { useEffect, useState } from 'react';

type TodoFromApi = {
  userId: number;
  title: string;
  completed: boolean;
};

type Todo = TodoFromApi & { id: string };

const fetchTodos = async (): Promise<TodoFromApi[]> => [
  {
    userId: 1,
    title: 'delectus aut autem',
    completed: true,
  },
  {
    userId: 1,
    title: 'quis ut nam facilis et officia qui',
    completed: false,
  },
];

export const TodosList = (): React.JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    fetchTodos().then((apiTodos) => {
      setTodos(
        apiTodos.map((todo) => ({
          ...todo,
          id: crypto.randomUUID(),
        })),
      );
    });
  }, []);

  if (todos.length === 0) {
    return <p>Loading todos...</p>;
  }

  return (
    <ul>
      {todos.map(({ id, userId, title, completed }) => (
        <li key={id}>
          <div>Todo for user {userId}</div>
          <div>Title: {title}</div>
          <div>Completed: {completed ? 'Yes' : 'No'}</div>
          <div>UUID Key: {id}</div>
        </li>
      ))}
    </ul>
  );
};
