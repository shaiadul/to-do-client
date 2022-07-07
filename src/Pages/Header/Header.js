import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css"
import home from "../../images/home01.svg"

const Header = () => {
    return (
        <header className="text-gray-600 body-font bg-emerald-400 shadow-2xl">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <Link to="#" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                    <Link to="home">
                        <p className='text-4xl text-center font-bold font-serif'>TO<span className=' text-red-400'>Do</span></p>
                    </Link>
                </Link>
                <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                    <Link to="home" className="mr-5"><img className='w-8' src={home} alt="" /></Link>
                    <Link to="todo" className="mr-5 text-black text-xl lg:text-2xl font-serif hover:text-red-400">to-do</Link>
                    <Link to="completed" className="mr-5 text-black text-xl lg:text-2xl font-serif hover:text-red-400">Complete</Link>
                    <Link to="calendar" className="mr-5 text-black text-xl lg:text-2xl font-serif hover:text-red-400">Calendar</Link>
            
                </nav>
                
            </div>
        </header>
    );
};

export default Header;