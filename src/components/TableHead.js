import React from 'react';

export default function TableHead({handleSortedUsers}) {
    return (
        <thead>
            <tr>
                <th onClick={() => handleSortedUsers('id')} className="bg-violet-200 text-violet-800 cursor-pointer rounded-tl-lg rounded-bl-lg">
                    ID
                </th>
                <th onClick={() => handleSortedUsers('name')} className="bg-violet-200 cursor-pointer text-violet-800">
                    Name
                </th>
                <th onClick={() => handleSortedUsers('username')} className="bg-violet-200 cursor-pointer text-violet-800">
                    Username
                </th>
                <th onClick={() => handleSortedUsers('email')} className="bg-violet-200 cursor-pointer text-violet-800">
                    Email
                </th>
                <th onClick={() => handleSortedUsers('phone')} className="bg-violet-200 cursor-pointer text-violet-800">
                    Phone
                </th>
                <th onClick={() => handleSortedUsers('website')} className="bg-violet-200 cursor-pointer text-violet-800 rounded-tr-lg rounded-br-lg">
                    Website
                </th>
            </tr>
        </thead>
    );
}
