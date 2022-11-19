import Table from './components/Table';
import useUsers from './hooks/useUsers';
import { Oval } from 'react-loader-spinner';

function App() {
    // get user data form useUsers hook
    const users = useUsers('https://jsonplaceholder.typicode.com/users');

    const usersData = users[0] || [];

    return usersData.length > 0 ? (
        <div className="flex justify-center items-center w-screen h-screen text-gray-700 bg-gradient-to-tr from-blue-200 via-indigo-200 to-pink-200">
            <Table users={usersData} />
        </div>
    ) : (
        <div className="h-screen flex bg-violet-100 items-center justify-center">
            <Oval
                height={50}
                width={50}
                color="#5b21b6"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                ariaLabel="oval-loading"
                secondaryColor="#ddd6fe"
                strokeWidth={4}
                strokeWidthSecondary={3}
            />
        </div>
    );
}

export default App;
