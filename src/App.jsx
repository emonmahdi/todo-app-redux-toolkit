import { useSelector } from "react-redux";
import FormAdd from "./components/FormAdd";

function App() {
  const { list } = useSelector((state) => state.todo);
  // console.log(list);
  // const dispatch = useDispatch();
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
                <td className="py-2 px-4 border-b">{item.id}</td>
                <td className="py-2 px-4 border-b">{item.name}</td>
                <td className="py-2 px-4 border-b">{item.age}</td>
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
