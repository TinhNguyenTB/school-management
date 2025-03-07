'use client'

import Calendar from 'react-calendar';
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css';
import Image from 'next/image';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const events = [
    {
        id: 1,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 2,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
        id: 3,
        title: "Lorem ipsum dolor",
        time: "12:00 PM - 2:00 PM",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
];

const EventCalendar = () => {
    const [value, onChange] = useState<Value>(new Date());
    return (
        <div className='bg-white p-4 rounded-md'>
            <Calendar locale='en-GB' onChange={onChange} value={value} />
            <div className='flex items-center justify-between'>
                <h1 className='text-lg font-semibold my-4'>Events</h1>
                <Image src={'/moreDark.png'} alt='moreDark' width={20} height={20} />
            </div>
            <div className='flex flex-col gap-4'>
                {events.map(item => (
                    <div className='p-2 rounded-md border-2 border-gray-100 border-t-4 odd:border-t-mySky even:border-t-myPurple'
                        key={item.id}
                    >
                        <div className='flex items-center justify-between'>
                            <h1 className='font-semibold text-gray-600'>{item.title}</h1>
                            <span className='text-gray-400 text-xs'>{item.time}</span>
                        </div>
                        <p className='mt-2 text-gray-500 text-sm'>{item.description}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default EventCalendar