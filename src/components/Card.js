import React, { useState } from 'react';
import Logo from '../assets/logo.png'

const Card = ({item,key,selectDoctor,handleSelect}) => {
  // const [selectDoctor,setSelectDoctor] = useState({})

  

  return (
    <div className='h-[270px] lg:w-[400px] md:w-[350px] bg-red-100 p-5 rounded-md' onClick={()=>handleSelect(key,item?.slots)}>
      <div className='w-full flex justify-center'> <input className='h-[25px] w-[25px] ' type="radio" name="option"  checked={selectDoctor?.[key]?true:false}/></div>
        <div className='flex gap-3'>
            <img className='h-20 w-20 rounded-full ' src={Logo}></img>
          <div> <h2 className='py-3 font-bold'>Doctor U.P. vishakhapatanam</h2>
          <div className='flex text-sm w-full justify-between gap-3'><span className='w-50'>Medical oncologiest</span><span className='w-50'>M.D. General Medicine</span></div>
          <div className='flex text-sm w-full justify-between gap-3 font-bold'><span className='w-50'>16 Years</span><span className='w-50'>Male</span></div>
          </div>
         
        </div>
        <div className='flex justify-between'>
            <span>Hindi,English</span>
            <span>Rs 1500</span>
          </div>
          <div className='flex justify-between text-blue-700 font-bold'>
            <span>Registration No.</span>
            <span>AB-412</span>
          </div>
          <button className='h-10 w-full bg-blue-800 text-white mt-4 rounded-md'> Book Online </button>
    </div>
  )
}

export default Card