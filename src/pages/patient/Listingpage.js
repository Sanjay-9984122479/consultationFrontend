import React from 'react'
import PatientListCard from '../../components/PatientListCard'

const Listingpage = ({setIsUpdated,patientList,selectedPatient,handleSelect}) => {
  return (
    <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-5'>
       { patientList?.map((item,index)=><PatientListCard key={index} item={item} index={index} setIsUpdated={setIsUpdated} selectedPatient={selectedPatient} handleSelect={handleSelect}/>)}</div>
  )
}

export default Listingpage