import { useDispatch, useSelector } from "react-redux";
import FormAdd from "./components/FormAdd";
import img from "./assets/checked.png";
import img2 from "./assets/remove.png";
import { removeTodo } from "./redux/features/todos/todoSlice";

function App() {
  const { list } = useSelector((state) => state.todo);
  // console.log(list);
  const dispatch = useDispatch();

  const handleRemove = (todoId) => {
    const isConfirmed = window.confirm("Are your sure to delete todo!");
    if (isConfirmed) {
      dispatch(removeTodo({ id: todoId }));
    }
  };

  return (
    <>
      <h2 className="text-3xl text-center my-4">Todo App Redux Toolkit</h2>
      <FormAdd />
      <div className="text-center">
        <h1 className="inline-block w-[500px] bg-purple-600 p-2 text-2xl">
          Todo App
        </h1>
        <table className="w-[500px] mx-auto bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th colSpan={2}>Action</th>
            </tr>
          </thead>
          <tbody>
            {list.map((item) => (
              <tr className="text-center" key={item.id}>
                <td className="py-2 px-4 border-b text-left">
                  <span className="font-bold"> {item.name}</span>
                  <br />
                  <span className="bg-gray-300 px-2 rounded-lg">
                    {item.createdAt}
                  </span>
                </td>
                <td className=" text-white rounded-lg">
                  <span className="bg-red-500 p-2 rounded-lg">Pending</span>
                </td>
                <td className="py-2 px-4 border-b">
                  <div className="flex items-center justify-between">
                    <img
                      src={img}
                      width={20}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                    <img
                      src={img2}
                      onClick={() => handleRemove(item.id)}
                      width={20}
                      style={{ cursor: "pointer" }}
                      alt=""
                    />
                  </div>
                </td>
                {/* Add more cells as needed */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default App;
