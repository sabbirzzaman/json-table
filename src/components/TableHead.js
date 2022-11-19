import React from 'react';
import { FaDotCircle } from 'react-icons/fa';

export default function TableHead({ handleSortedUsers, sortKey }) {
    return (
        <thead>
            <tr>
                <th
                    onClick={() => handleSortedUsers('id')}
                    className="bg-violet-200 text-violet-800 cursor-pointer rounded-tl-lg rounded-bl-lg"
                >
                    <div className="flex gap-2 items-center">
                        ID
                        <FaDotCircle visibility={sortKey === 'id' ? 'visible' : 'hidden'} />
                    </div>
                </th>
                <th
                    onClick={() => handleSortedUsers('name')}
                    className="bg-violet-200 cursor-pointer text-violet-800"
                >
                    <div className="flex gap-2 items-center">
                        Name
                        <FaDotCircle visibility={sortKey === 'name' ? 'visible' : 'hidden'} />
                    </div>
                </th>
                <th
                    onClick={() => handleSortedUsers('username')}
                    className="bg-violet-200 cursor-pointer text-violet-800"
                >
                    <div className="flex gap-2 items-center">
                        Username
                        <FaDotCircle visibility={sortKey === 'username' ? 'visible' : 'hidden'} />
                    </div>
                </th>
                <th
                    onClick={() => handleSortedUsers('email')}
                    className="bg-violet-200 cursor-pointer text-violet-800"
                >
                    <div className="flex gap-2 items-center">
                        Email
                        <FaDotCircle visibility={sortKey === 'email' ? 'visible' : 'hidden'} />
                    </div>
                </th>
                <th
                    onClick={() => handleSortedUsers('phone')}
                    className="bg-violet-200 cursor-pointer text-violet-800"
                >
                    <div className="flex gap-2 items-center">
                        Phone
                        <FaDotCircle visibility={sortKey === 'phone' ? 'visible' : 'hidden'} />
                    </div>
                </th>
                <th
                    onClick={() => handleSortedUsers('website')}
                    className="bg-violet-200 cursor-pointer text-violet-800 rounded-tr-lg rounded-br-lg"
                >
                    <div className="flex gap-2 items-center">
                        Website
                        <FaDotCircle visibility={sortKey === 'website' ? 'visible' : 'hidden'} />
                    </div>
                </th>
            </tr>
        </thead>
    );
}
