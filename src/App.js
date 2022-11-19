import Table from "./components/Table";
import useUsers from "./hooks/useUsers";

function App() {
  const users = useUsers('https://jsonplaceholder.typicode.com/users');

  return (
    <div className="flex justify-center items-center w-screen h-screen text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
      <Table />
    </div>
  );
}

export default App;
