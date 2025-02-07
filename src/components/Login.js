import axios from 'axios';
import React, { useState } from 'react'
import Swal from 'sweetalert2';
import loginIcon from '../assets/login.png'
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
const [inputFields,setInputFields] = useState({});
const navigate = useNavigate();
const location = useLocation();

const handleChange = (key,value)=>{
    setInputFields((prev)=>{
        return {...prev,[key]:value}
    })
}

const userLogin = async(email,password)=>{
   try{
   let payload = {email,password}
    let response = location?.state.login==="patient" ? await axios.post("http://localhost:5001/client/login",payload): await axios.post("http://localhost:5001/doctor/login",payload)
    if(response.data){
        debugger
        localStorage.setItem("token",response.data.token);
        location?.state.login==="patient" ? navigate('/dashboard',{state:{id:response.data.user._id}}):navigate('/Doctordashboard',{state:{id:response.data.doctor.id}})
    
    }

   }catch(err){
    Swal.fire({
        icon: 'error',
        title: 'Error',
        text: err,
    });
   }
}


const handleSubmit = ()=>{
 userLogin(inputFields?.email,inputFields?.password)
}

  return (
    <div class="w-screen min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-800 px-4 sm:px-6 lg:px-8">
    <div class="relative py-3 sm:max-w-xs sm:mx-auto">
        <div class="min-h-96 px-8 py-6 mt-4 text-left bg-white dark:bg-gray-900  rounded-xl shadow-lg">
            <div class="flex flex-col justify-center items-center h-full select-none">
                <div class="flex flex-col items-center justify-center gap-2 mb-8">
                    <a href="https://amethgalarcio.web.app/" target="_blank">
                        <img className='h-10 w-10' src={loginIcon} class="w-8" />
                    </a>
                    <p class="m-0 text-[16px] font-semibold dark:text-white">{location?.state.login==="doctor"?"Doctor":"Patient"} Login to your Account</p>
                    <span class="m-0 text-xs max-w-[90%] text-center text-[#8B8E98]">Get started with our app, just start section and enjoy experience.
                    </span>
                </div>
                <div class="w-full flex flex-col gap-2">
                    <label class="font-semibold text-xs text-gray-400 ">Email</label>
                    <input class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="Username" onChange={(e)=>handleChange("email",e.target.value)} />

                </div>
            </div>
            <div class="w-full flex flex-col gap-2">
                <label class="font-semibold text-xs text-gray-400 ">Password</label>
                <input type="password" class="border rounded-lg px-3 py-2 mb-5 text-sm w-full outline-none dark:border-gray-500 dark:bg-gray-900" placeholder="••••••••" onChange={(e)=>handleChange("password",e.target.value)} />

            </div>
            <div className="mt-5">
                <button class="py-1 px-8 bg-blue-500 hover:bg-blue-800 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg cursor-pointer select-none" onClick={handleSubmit}>Login</button>
            </div>
        </div>
    </div>
</div>

  )
}

export default Login