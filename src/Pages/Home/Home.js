import React from 'react';
import down from '../../images/down-arrow-svgrepo-com.svg'

const Home = () => {
    const handleKeyDown = (event) => {
        const value = event.target.value
        const data = { value }
        if (event.key === 'Enter') {
            // send data to the server
            fetch('http://localhost:5000/list', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(res => res.json())
                .then(data => {
                    console.log('success', data);
                    // event.target.reset();
                })
        }
    }
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-emerald-400 dark:text-gray-100 mx-2 lg:mx-auto my-32 shadow-2xl">
            {/* input for takeing what to do you ! */}
            <input onKeyDown={handleKeyDown} className=' border-4 outline-none border-red-200 w-full rounded text-gray-700 font-bold font-serif py-1 px-2' type="text" placeholder='Enter Your Work Title !' />
            {/* indicator array */}
            <img className='w-11' src={down} alt="" />
            {/* latest to do data adding section */}

        </div>
    );
};

export default Home;