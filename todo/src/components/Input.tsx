import { useState } from "react";
import DisplayTodo from "./DisplayTodo";

const Input: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<string[]>([]);

  const addTodo = () => {
    if (todo.trim() !== "") {
      setTodos([...todos, todo]);
      setTodo("");
    }
  };

  const deleteTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  const editTodo = (index: number, updatedTodo: string) => {
    const updatedTodos = todos.map((item, i) =>
      i === index ? updatedTodo : item
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="flex flex-col items-center p-6 gap-6 bg-gray-100 rounded-lg shadow-lg max-w-lg mx-auto">
      <div className="flex gap-4">
        <input
          type="text"
          placeholder="Enter a new todo"
          className="w-72 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 shadow-sm"
          value={todo}
          onChange={(event) => setTodo(event.target.value)}
        />
        <button
          className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200 shadow-md"
          onClick={addTodo}
        >
          Add
        </button>
      </div>
      <DisplayTodo todos={todos} deleteTodo={deleteTodo} editTodo={editTodo} />
    </div>
  );
};

export default Input;
