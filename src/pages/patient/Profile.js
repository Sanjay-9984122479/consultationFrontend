import React, { useEffect, useState } from 'react'
import Form from '../../components/Form'
import fetchApi from '../../utils/fetchMethod';
import Swal from 'sweetalert2';
import { generateTimeSlots } from '../../utils/sharedMethods';
import validateForm from './validateForm';
import { PatientFields } from './formObject';
import { States } from '../../constant/appConstant';
import { useLocation, useNavigate } from 'react-router-dom';

const Profile = () => {
  const [errors,setErrors] = useState({});
  const [fields,setFields] = useState(PatientFields);
  const location = useLocation();
  const navigate = useNavigate();
  const [inputFields,setInputFields] = useState({
    city: "",
    name: "",
    mobile: "",
    profile: "",
    age: "",
    email: "",
    password: "",
  });

    

      const saveAndUpdatePatient = async()=>{
        let payload = {
          id:location?.state?.id||undefined,
          name:inputFields?.name,
          age:inputFields?.age,
          email:inputFields?.email,
          mobile:inputFields?.mobile,
          profile:inputFields?.profile,
          password:inputFields?.password,
          gender:inputFields?.gender,
          communication:inputFields?.communication,
          occupation:inputFields?.occupation,
          state:inputFields?.state,
          city:inputFields?.city,
          address:inputFields?.address
       
        }

      let {data, loading, error} =  !location?.state?.id ? await fetchApi(2,"client/register",payload):   await fetchApi(2,"client/update",payload)
      if(!loading && data){
        debugger
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: data.message,
        });
          navigate("/dashboard",{state:{id:data.user._id||data.id}})
      }
      if(error) {
        Swal.fire({
          icon: 'error',
          title: 'error',
          text: error,
      });
      }

      }

      const handleSubmit = (e)=>{
        e.preventDefault();
        const validationErrors = validateForm(inputFields);
        debugger
        
    if (Object.keys(validationErrors).length === 0) {
     
      saveAndUpdatePatient()
    } else {
      setErrors(validationErrors);
    }
  
      }

      useEffect(()=>{
        debugger
        if(fields && inputFields.state){

          let temp = fields?.map((item)=>{
            if(item.key==='city'){
              return {...item,list:States[inputFields?.state]}
            }
            return item;
           })
           setFields(temp);
        }
      },[inputFields.state])

      const fetchClientDetail= async()=>{
        let payload = {id:location.state.id}
        let {data, loading, error} = await fetchApi(2,"client/profile",payload)
        
        if(!loading && data){
         setInputFields({...data,id:data._id})
      
        }
        if(error) {
          Swal.fire({
            icon: 'error',
            title: 'error',
            text: error,
        });
        }
      }
  

      useEffect(()=>{
        if(location?.state?.id){
          fetchClientDetail()
        }
          

      },[location?.state?.id])


  return (<div>
    <Form title={"Patient Profile"} fields={fields} inputFields={inputFields} setInputFields={setInputFields} handleSubmit={handleSubmit} error={errors}/>

    <div className='text-blue-700 font-bold underline text-center' onClick={()=>navigate('/login',{state:{login:"patient"}})}> I have already Account</div>
    </div>
  )
}

export default Profile