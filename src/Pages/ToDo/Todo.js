import React from 'react';
import { Link } from 'react-router-dom';
import useList from '../../Hooks/useList';

const Todo = () => {
    const [lists, setLists] = useList([]);
    
    // heandleDeleteProduct
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Sir, Are you sure ?')
        if (proceed) {
            console.log('deleted', id);
            const url = `http://localhost:5000/list/${id}`;
            fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        const remaining = lists.filter(list => list._id !== id);
                        setLists(remaining);
                    }
                })

        }
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-2 lg:gap-4 mx-10'>
            {
                lists.map(l =>
                    <div key={l._id} className="container flex flex-col w-full max-w-lg p-6 mx-auto my-8 divide-y rounded-lg divide-gray-700 bg-emerald-200 shadow-2xl">
                        <div className="flex justify-between p-4">
                            <div className="flex space-x-4">
                                <input className='' type="checkbox" name="checkbox" id="all" />
                                <label htmlFor="all" className="ml-2 text-lg lg:text-xl font-bold font-serif text-gray-700 ">{l.value}</label>
                            </div>
                        </div>
                        <div className="p-2 space-y-2">
                        <p className='font-bold font-serif'>Date: {l.date}</p>
                            {/* edit and delete button */}
                            <Link to={`/update/${l._id}`} className='to-btn bg-gray-700 px-5 py-1 font-bold font-serif text-slate-400 mx-2 hover:bg-opacity-70' >Edit</Link>
                            <button
                                onClick={() => handleDeleteProduct(l._id)}
                                className='to-btn bg-red-500 px-4 font-bold font-serif text-slate-400 mx-2 hover:bg-opacity-70'>
                                Delete
                            </button>
                        </div>
                    </div>
                )
            }



        </div>
    );
};

export default Todo;