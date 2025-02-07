import React from 'react'
import { useNavigate } from 'react-router-dom'

const ClientProfileCard = ({profile}) => {

    console.log(profile,"profile")

  const navigate = useNavigate();


  return (
    <div className='w-full grid grid-column-3 '>    <div className='flex gap-3'>
    <img className='h-20 w-20 rounded-full ' src={profile?.profile}></img>
  <div> <h2 className='py-3 font-bold'>{profile?.name}</h2>
  <div className='flex text-sm w-full justify-between gap-3 font-bold'><span className='w-50'>{profile?.age}</span><span className='w-50'>{profile?.gender}</span></div>
  <div className='flex text-sm w-full justify-between gap-3'><span className='w-50'>{profile.occupation}</span><span className='w-50'>{profile.communication}</span></div>
  </div>
 
</div>

<div className='text-blue-700 underline cursor-pointer font-bold' onClick={()=>navigate("/clientProfile",{state:{id:profile.id}})}>Edit Profile</div>
</div>
  )
}

export default ClientProfileCard