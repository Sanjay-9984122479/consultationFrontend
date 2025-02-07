import React, { useState } from 'react';
import Logo from '../assets/logo.png'
import PrescriptionModal from './PopupBox';
import { Heading } from 'lucide-react';
import moment from 'moment';

const PatientListCard = ({setIsUpdated,key,handleSelect,item}) => {
  const [isOpen,setIsOpen] = useState(false)
   console.log(item,"I am in patient")

   function checkStatus(timeStr, dateStr) {
    // Combine date and time
    const combinedDateTime = moment(dateStr).set({
        hour: moment(timeStr, "H:mm").hour(),
        minute: moment(timeStr, "H:mm").minute(),
        second: 0,
    });

    const now = moment();
    return now.isBefore(combinedDateTime) ? "New" : "Completed";
}
  

  return (
    <div className='h-[300px] lg:w-[400px] md:w-[350px] bg-red-100 p-5 rounded-md' onClick={()=>handleSelect(key)}>
      {/* <div className='w-full flex justify-center'> <input className='h-[25px] w-[25px] ' type="radio" name="option"  checked={selectDoctor[key]?true:false}/></div> */}
      <div className='text-right w-auto font-bold p-1 bg-green-300'>{checkStatus(item.slot,item.date)}</div>
        <div className='flex gap-3'>
            <img className='h-20 w-20 rounded-full ' src={item?.patient?.profile} alt='Patient'></img>
          <div> <h2 className='py-3 font-bold'>{item?.patient?.name}</h2>
         
          <div className='flex text-sm w-full justify-between gap-3 font-bold'><span className='w-50'>Age {item?.patient?.age} Years</span><span className='w-50'>Gender :{item?.patient?.gender}</span></div>
          </div>
         
        </div>
        <div className='flex justify-between'>
            <span>{moment(item?.date).format('DD-MM-YYYY')}</span>
            <span>Slot :- {item?.slot}</span>
          </div>
          <div className='font-bold text-center underline'>Prescription Details</div>
          <div className='h-20 w-full p-2 text-wrap overflow-auto'>{item?.prescription}</div>
          <button className='h-10 w-full bg-blue-800 text-white mt-4 rounded-md' onClick={()=>setIsOpen(true)}> Give Prescription </button>
          <PrescriptionModal item={item} isOpen={isOpen} setIsOpen={setIsOpen} setIsUpdated={setIsUpdated}/>
          
    </div>
  )
}

export default PatientListCard