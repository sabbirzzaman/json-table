import React from 'react';

export default function TableBody({ users, searchKey }) {
    // filtered table by search key
    const filterBySearch = (user) => {
        if (searchKey) {
            if (String(user.id) === String(searchKey)) {
                return user;
            } else if (user.name.toLowerCase().includes(searchKey.toLowerCase())) {
                return user;
            } else if (user.username.toLowerCase().includes(searchKey.toLowerCase())) {
                return user;
            } else if (user.email.toLowerCase().includes(searchKey.toLowerCase())) {
                return user;
            } else if (user.phone.toLowerCase().includes(searchKey.toLowerCase())) {
                return user;
            } else if (user.website.toLowerCase().includes(searchKey.toLowerCase())) {
                return user;
            }
        } else {
            return user;
        }
    };

    return (
        <tbody>
            {users.filter(filterBySearch).map((user) => (
                <tr key={user.id}>
                    <th>{user.id}</th>
                    <td>{user.name}</td>
                    <td>{user.username}</td>
                    <td>{user.email}</td>
                    <td>{user.phone}</td>
                    <td>{user.website}</td>
                </tr>
            ))}
        </tbody>
    );
}
