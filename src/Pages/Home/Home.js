import React from 'react';
import { Link } from 'react-router-dom';
import useList from '../../Hooks/useList';
import down from '../../images/down-arrow-svgrepo-com.svg';
import "./Home.css"


const Home = ({ date }) => {

    const [lists, setLists] = useList([]);
    // time Refresh 
    function timedRefresh(timeoutPeriod) {
        setTimeout("location.reload(true);", timeoutPeriod);
    }
    // handlekeyDown
    const handleKeyDown = (event) => {
        const value = event.target.value
        const data = { value, date }
        if (event.key === 'Enter') {
            // send data to the server
            fetch('https://vast-brook-93316.herokuapp.com/list', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                })
            window.onload = timedRefresh(1000)
        }
    }
    // handleDeleteList 
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Sir, Are you sure ?')
        if (proceed) {
            console.log('deleted', id);
            const url = `https://vast-brook-93316.herokuapp.com/list/${id}`;
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
    /*  =================== Click in the Checkbox ====================  */
    const handleMoving = (id) => {
        const item = lists.find((t) => t._id === id);
        handleCompleted(item);
        setTimeout(() => {
            handleRemoving(id);
        }, 1000);
    };
    const handleCompleted = (item) => {
        console.log(item);
        fetch(`https://vast-brook-93316.herokuapp.com/completed`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(item),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    const handleRemoving = (id) => {
        fetch(`https://vast-brook-93316.herokuapp.com/list/${id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
            });
    };
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-emerald-400 dark:text-gray-100 mx-2 lg:mx-auto my-32 shadow-2xl">
            <small className='font-serif font-bold text-lg'>You need to select a date !</small>
            {/* input for takeing what to do you ! */}
            <input onKeyDown={handleKeyDown} className=' border-4 outline-none border-red-200 w-full rounded text-gray-700 font-bold font-serif py-1 px-2' type="text" placeholder='Enter Your Work Title !' />
            {/* indicator array */}
            <img className='w-11' src={down} alt="down-array" />
            {/* latest to do data adding section */}
            {
                lists.slice(0, 1).map(l =>

                    <div key={l._id} className="flex items-center mb-4 border-b-4 border-red-200 pb-1">
                        <input onClick={() => handleMoving(l._id)} className='' type="checkbox" name="checkbox" id="all" />
                        <label htmlFor="all" className="ml-2 text-sm lg:text-lg font-bold font-serif text-gray-700 ">{l.value}</label>
                        {/* edit and delete button */}
                        <Link to={`/update/${l._id}`} className='to-btn bg-gray-700 px-5 font-bold font-serif text-slate-400 mx-2 hover:bg-opacity-70'>Edit</Link>
                        <button
                            onClick={() => handleDeleteProduct(l._id)}
                            className='to-btn bg-red-500 px-4 font-bold font-serif text-slate-400 mx-2 hover:bg-opacity-70 '>Delete</button>
                    </div>

                )
            }
        </div>
    );
};

export default Home;