import React from 'react';
import useList from '../../Hooks/useList';
import down from '../../images/down-arrow-svgrepo-com.svg'

const Home = () => {

    const [lists, setLists] = useList([]);
    // time Refresh 
    function timedRefresh(timeoutPeriod) {
        setTimeout("location.reload(true);", timeoutPeriod);
    }
    // handlekeyDown
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
                })
            window.onload = timedRefresh(1000)
        }
    }
    return (
        <div className="relative flex flex-col items-center max-w-lg gap-4 p-6 rounded-md sm:py-8 sm:px-12 bg-emerald-400 dark:text-gray-100 mx-2 lg:mx-auto my-32 shadow-2xl">
            {/* input for takeing what to do you ! */}
            <input onKeyDown={handleKeyDown} className=' border-4 outline-none border-red-200 w-full rounded text-gray-700 font-bold font-serif py-1 px-2' type="text" placeholder='Enter Your Work Title !' />
            {/* indicator array */}
            <img className='w-11' src={down} alt="" />
            {/* latest to do data adding section */}
            {
                lists.slice(-1).map(l => <>
                    <div>
                        <div class="flex items-center mb-4 border-b-4">
                            <input className='' type="checkbox" name="checkbox" id="all" />
                                <label for="all" class="ml-2 text-xl font-bold font-serif text-gray-700 ">{l.value}</label>
                                {/* edit and delete button */}
                                <button>x</button><button>y</button>
                        </div>
                    </div>
                    {/* {l.value} */}
                </>)
            }
        </div>
    );
};

export default Home;