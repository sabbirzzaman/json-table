import React from 'react';

export default function Table({users}) {
    

    return (
        <div className="h-[400px] w-[725px] bg-white flex items-center justify-center rounded-lg shadow-lg py-8 px-4">
            <div className="overflow-x-auto">
                <table className="table table-compact w-full">
                    <thead>
                        <tr>
                            <th className='bg-violet-200 text-violet-800 rounded-tl-lg rounded-bl-lg'>ID</th>
                            <th className='bg-violet-200 text-violet-800'>Name</th>
                            <th className='bg-violet-200 text-violet-800'>Username</th>
                            <th className='bg-violet-200 text-violet-800'>Email</th>
                            <th className='bg-violet-200 text-violet-800'>Phone</th>
                            <th className='bg-violet-200 text-violet-800 rounded-tr-lg rounded-br-lg'>Website</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th>1</th>
                            <td>Leanne Graham</td>
                            <td>Bret</td>
                            <td>Sincere@april.biz</td>
                            <td>1-770-736-8031 x56442</td>
                            <td>hildegard.org</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
