import React, { useState } from "react";

interface DisplayTodoProps {
  todos: string[];
  deleteTodo: (index: number) => void;
  editTodo: (index: number, updatedTodo: string) => void;
  editing;
}

const DisplayTodo: React.FC<DisplayTodoProps> = ({
  todos,
  deleteTodo,
  editTodo,
}) => {
  const [isEditing, setIsEditing] = useState<number | null>(null);
  const [editValue, setEditValue] = useState<string>("");

  const handleSave = (index: number) => {
    if (editValue.trim() !== "") {
      editTodo(index, editValue);
      setIsEditing(null);
      setEditValue("");
    }
  };

  return (
    <ul className="w-full mt-4 space-y-3">
      {todos.map((todo, index) => (
        <li
          key={index}
          className="flex justify-between items-center p-4 bg-white border border-gray-300 rounded-md shadow-md"
        >
          {isEditing === index ? (
            <input
              type="text"
              className="flex-1 mr-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={editValue}
              onChange={(e) => setEditValue(e.target.value)}
            />
          ) : (
            <span className="flex-1 text-gray-800">{todo}</span>
          )}
          {isEditing === index ? (
            <>
              <button
                className="px-4 py-2 mr-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-200"
                onClick={() => handleSave(index)}
              >
                Save
              </button>
              <button
                className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition duration-200"
                onClick={() => setIsEditing(null)}
              >
                Cancel
              </button>
            </>
          ) : (
            <>
              <button
                className="px-4 py-2 mr-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
                onClick={() => {
                  setIsEditing(index);
                  setEditValue(todo);
                }}
              >
                Edit
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200"
                onClick={() => deleteTodo(index)}
              >
                Delete
              </button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DisplayTodo;
