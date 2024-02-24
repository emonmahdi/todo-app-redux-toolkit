import { useDispatch } from "react-redux";
import { addTodo } from "../redux/features/todos/todoSlice";
import { useState } from "react";

const FormAdd = () => {
  const [todo, setTodo] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.floor(Math.random() * 888888) + 100000,
      name: todo,
      isDone: false,
      createdAt: new Date().toLocaleString(),
    };

    dispatch(addTodo(newTodo));
    setTodo("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="mb-4 mt-5">
        <div className="flex items-center justify-center">
          <div className="bg-gray-200 p-8 rounded-lg">
            <input
              type="text"
              placeholder="Add Todo..."
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="p-2 w-[300px] mb-4 border border-gray-400 rounded"
            />
            <button
              onClick={handleSubmit}
              className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700 focus:outline-none focus:shadow-outline-blue"
            >
              Add Todo
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default FormAdd;
