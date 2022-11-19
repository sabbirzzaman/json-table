import React from 'react';

export default function Table({ users }) {
    return (
        <div className="min-h-[400px] min-w-[725px] bg-white rounded-lg shadow-lg py-8 px-6">
            <div className="flex mb-5 gap-7">
                <input type="text" className="w-full flex items-center h-10 px-4 text-sm bg-gray-100 transition delay-75 ease-in-out translate-x-0 false rounded-full focus:outline-none focus:ring focus:ring-violet-300" placeholder='Search...' />

                <button className="text-sm font-semibold transition delay-75 ease-in-out py-2 px-5 rounded-lg hover:bg-violet-200 hover:text-violet-800 bg-violet-200 text-violet-800">
                    Ascending
                </button>
            </div>

            <div className="flex items-center justify-center">
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
        </div>
    );
}
