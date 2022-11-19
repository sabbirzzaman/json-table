import { useEffect, useState } from 'react';

const useUsers = (path) => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch(path)
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, [path]);

    return [users, setUsers];
};

export default useUsers;
