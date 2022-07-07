import React, { useEffect, useState } from 'react';

const Complete = () => {
    const [completedTask, setCompletedTask] = useState([]);
    // fetch data 
    useEffect(() => {
        fetch("https://vast-brook-93316.herokuapp.com/completed")
            .then((res) => res.json())
            .then((data) => {
                if (data) {
                    setCompletedTask(data);
                }
            });
    });
        return (
            <div className="overflow-auto">
                <h2 className="text-center py-4 font-bold text-3xl font-serif text-emerald-700">Completed tasks</h2>
                <div className="px-4 pb-10 lg:px-12">
                    {
                        <div className="glass overflow-x-auto">
                            <table className="table w-full font-serif font-bold">
                                <thead>
                                    <tr className='bg-gray-300 text-xl'>
                                        <th>ID</th>
                                        <th>Task</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {completedTask.map((dt, index) => (
                                        <tr key={dt._id} className='text-center'>
                                            <td>{index + 1}</td>
                                            <td className="">{dt.value}</td>
                                            {
                                                <th>
                                                    <p className='bg-green-300 rounded-xl text-gray-600'>completed</p>
                                                </th>
                                            }
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    }
                </div>
            </div>
        );
    };

export default Complete;