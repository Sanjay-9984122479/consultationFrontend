import React from 'react'

const DateCard = ({item,index,selectedDate,handleSelect})=>{

    console.log(index,"key")
   
       return <div className={` h-20 w-auto border border-gray-500 rounded-md p-3 cursor-pointer ${selectedDate? "bg-lime-500":"bg-gray-300"}`} onClick={()=>handleSelect(index)}>
           <div className='text-black-500 font-bold text-center text-gray-700'>{item.day}</div>
           <div className='text-black-500 font-bold text-center text-gray-700'>{item.date}</div>
       </div>
   }

export default DateCard