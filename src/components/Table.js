import React, { useEffect, useState } from 'react';
import TableBody from './TableBody';
import TableHead from './TableHead';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';

export default function Table({ users }) {
    // local states
    const [sortedUsers, setSortedUsers] = useState(users);
    const [isAscending, setIsAscending] = useState(true);
    const [searchKey, setSearchKey] = useState('');

    // function for sorting table
    const handleSortedUsers = (sortBy) => {
        if (sortBy === 'name') {
            const sortedValue = [...sortedUsers].sort((a, b) =>
                a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
            );

            setSortedUsers(sortedValue);
        } else if (sortBy === 'username') {
            const sortedValue = [...sortedUsers].sort((a, b) =>
                a.username.toLowerCase() < b.username.toLowerCase() ? -1 : 1
            );

            setSortedUsers(sortedValue);
        } else if (sortBy === 'email') {
            const sortedValue = [...sortedUsers].sort((a, b) =>
                a.email.toLowerCase() < b.email.toLowerCase() ? -1 : 1
            );

            setSortedUsers(sortedValue);
        } else if (sortBy === 'phone') {
            const sortedValue = [...sortedUsers].sort((a, b) =>
                a.phone.toLowerCase() < b.phone.toLowerCase() ? -1 : 1
            );

            setSortedUsers(sortedValue);
        } else if (sortBy === 'website') {
            const sortedValue = [...sortedUsers].sort((a, b) =>
                a.website.toLowerCase() < b.website.toLowerCase() ? -1 : 1
            );

            setSortedUsers(sortedValue);
        } else if (sortBy === 'id') {
            const sortedValue = [...sortedUsers].sort((a, b) => a.id - b.id);

            setSortedUsers(sortedValue);
        }
    };

    // handle sorting by order
    useEffect(() => {
        if (isAscending) {
            const sortedValue = [...sortedUsers].sort((a, b) => a.id - b.id);

            setSortedUsers(sortedValue);
        } else if (!isAscending) {
            const sortedValue = [...sortedUsers]
                .sort((a, b) => a.id - b.id)
                .reverse();

            setSortedUsers(sortedValue);
        }
    }, [isAscending]);

    // debounce handler function
    const debounceHandler = (fn, delay) => {
        let timeoutId;
        return (...arg) => {
            clearTimeout(timeoutId);

            timeoutId = setTimeout(() => {
                fn(...arg);
            }, delay);
        };
    };

    // get search value
    const doSearch = (value) => {
        setSearchKey(value);
    };

    // delay search by 500ms
    const handleSearch = debounceHandler(doSearch, 500);

    return (
        <div className="min-h-[400px] lg:min-w-[900px] md:min-w-[700px] sm:min-w-[400px] w-[325px] bg-white rounded-lg shadow-lg py-8 px-6">
            <div className="flex mb-5 gap-7">
                <input
                    type="text"
                    className="w-full flex items-center h-10 px-4 text-sm bg-gray-100 transition delay-75 ease-in-out translate-x-0 false rounded-full focus:outline-none focus:ring focus:ring-violet-300"
                    placeholder="Search for anything…"
                    onChange={(e) => handleSearch(e.target.value)}
                />

                <button
                    className="text-sm font-semibold transition delay-75 ease-in-out py-2 px-5 rounded-lg hover:bg-violet-200 hover:text-violet-800 bg-violet-200 text-violet-800 flex gap-2 items-center"
                    onClick={() => setIsAscending(!isAscending)}
                >
                    <span>{isAscending ? 'Ascending' : 'Descending'}</span>
                    {isAscending ? <IoIosArrowDown /> : <IoIosArrowUp />}
                </button>
            </div>

            <div className="flex items-center justify-center">
                <div className="overflow-x-auto">
                    <table className="table table-compact w-full">
                        <TableHead handleSortedUsers={handleSortedUsers} />
                        <TableBody users={sortedUsers} searchKey={searchKey} />
                    </table>
                </div>
            </div>
        </div>
    );
}
