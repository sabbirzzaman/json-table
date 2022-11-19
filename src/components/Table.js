import React from 'react';

export default function Table({ users }) {
    return (
        <div className="min-h-[400px] min-w-[725px] bg-white flex items-center justify-center rounded-lg shadow-lg py-8 px-6">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className="bg-violet-200 text-violet-800 rounded-tl-lg rounded-bl-lg">
                                ID
                            </th>
                            <th className="bg-violet-200 text-violet-800">
                                Name
                            </th>
                            <th className="bg-violet-200 text-violet-800">
                                Username
                            </th>
                            <th className="bg-violet-200 text-violet-800">
                                Email
                            </th>
                            <th className="bg-violet-200 text-violet-800">
                                Phone
                            </th>
                            <th className="bg-violet-200 text-violet-800 rounded-tr-lg rounded-br-lg">
                                Website
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) => (
                            <tr>
                                <th>{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>{user.phone}</td>
                                <td>{user.website}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
