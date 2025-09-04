'use client'
import React, { useEffect, useState } from 'react'

export default function Slider({ data }) {
    const [current, setcurrent] = useState(0);

    useEffect(
        ()=>{
            const interval = setInterval( ()=>{
                // console.log(`hello Ji kya haal h apke ${current}`)
                setcurrent((prev)=> prev === data.length - 1 ? 0 : prev + 1);
            },3000);  //change slide in every 3 seconds

            return ()=> clearInterval(interval);

        },
        []
    )

    return (
        <div className='w-full h-[300px] relative top-0 overflow-hidden'>
            {
                data.map(
                    (item, index) => (
                        <div key={index} className={`absolute top-0 w-full h-full transition-all duration-500 ease-in-out ` + (current === index ?'opacity-100 scale-100 ':'opacity-0 scale-0 ')}>
                            <img
                                src={item.image}
                                alt={item.title}
                                className="rounded-xl shadow-lg w-full h-96 object-cover"
                            />
                        </div>
                    )
                )
            }
        </div>
    )
}
