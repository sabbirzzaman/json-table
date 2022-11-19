import React from 'react';

export default function TableBody({ users }) {
    return (
        <tbody>
            {users.map((user) => (
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
