import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const UpdateList = () => {
    const {id} = useParams();
    const [texts, setTexts] = useState({});
    useEffect( () =>{
        const url = `https://vast-brook-93316.herokuapp.com/list/${id}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setTexts(data));
    }, [id]);

    const handleUpdateList = event =>{
        event.preventDefault();
        const value = event.target.new.value;

        const updateList = {value};

        // send data to the server
        const url = `https://vast-brook-93316.herokuapp.com/list/${id}`;
        fetch(url, {
            method: 'PUT',
            headers : { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
               },
            body: JSON.stringify(updateList)
        })
        .then(res => res.json())
        .then(data =>{
            // console.log('success', data);
            alert('list added successfully!!!');
            event.target.reset();
        })
    }
    return (
        <div className=' my-8'>
            <h2 className='text-center text-red-300 text-4xl font-serif font-bold'>Edit Your List Text !!</h2>
            <form className='flex flex-col justify-center align-middle' onSubmit={handleUpdateList}>
                <input className='w-60 lg:w-96 mx-auto font-serif font-bold border-4 border-rose-300 p-2 my-2 bg-slate-100' type="text" name="text" value={texts.value} disabled />
                <input className='w-60 lg:w-96 mx-auto font-serif font-bold border-4 border-green-300 p-2 my-3 bg-slate-200' type="text" name="new" placeholder='Your New Text Here !' required />
                <br />
                <input className='w-40 mx-auto py-1 bg-gray-600 font-serif font-bold text-xl text-gray-800 uppercase rounded-xl shadow-xl' type="submit" value="Update" />
            </form>
        </div>
    );
};

export default UpdateList;