import { format } from 'date-fns';
import React from 'react';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';

const Calendar = ({date,setDate}) => {
    
    let footer = <p className='text-lg font-serif py-10 text-emerald-400 '>Please Select a day.</p>;
    if (date) {
        footer = <p className='text-lg font-serif py-10 text-emerald-400 '>You Selected {format(date, 'PP')}.</p>;
    }
    return (
        <div className='flex justify-center align-middle my-10 pb-5'>
            <DayPicker
                className=''
                mode="single"
                selected={date}
                onSelect={setDate}
                footer={footer}
            />
            {/* <p>Your Selected Date is {format(date, 'pp')}</p> */}
        </div>
    );
};

export default Calendar;