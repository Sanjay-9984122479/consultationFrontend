import React, { useCallback, useEffect, useState } from 'react'
import DateList from '../../components/DateList'
import SlotList from '../../components/SlotList'
import Button from '../../components/Button'
import fetchApi from '../../utils/fetchMethod'
import Swal from 'sweetalert2'
import { useLocation } from 'react-router-dom'
import ClientProfileCard from '../../components/ClientProfileCard'
import DoctorProfileCard from '../../components/DoctorProfileCard'
import Listingpage from '../patient/Listingpage'
import moment from 'moment'

const Dashboard = () => {
  const location = useLocation();
  const [selectedDate, setSelectedDate] = useState(null);
  const [profile, setProfile] = useState({});
  const [isUpdated,setIsUpdated] = useState("");


  const fetchDoctorPofile = async (id = location.state.id, date) => {
    debugger
    let payload = { id: id, date }
    let { data, loading, error } = await fetchApi(2, "doctor/profile", payload)

    if (!loading && data) {
      setProfile(data)

    }
    if (error) {
      Swal.fire({
        icon: 'error',
        title: 'error',
        text: error,
      });
    }
  }

  useEffect(() => {
    fetchDoctorPofile(location.state.id)

  }, [location.state.id,isUpdated])

  console.log(profile, "profile");

  const handleSelectDate = useCallback((index) => {
    setSelectedDate(index); // Store the selected index directly
    fetchDoctorPofile(location.state.id, profile?.doctor?.availabilityDates?.[index].date)
  }, [location, profile]);

  const handlePatientSelect = () => {

  }

  let availabilityDates = profile?.doctor?.availabilityDates?.filter((item) => new Date(item.date) >= new Date())?.map((item)=>{return{...item,date:moment(item.date).format("DD-MM-YYYY")}})

  return (
    <div className='p-3'>
      <DoctorProfileCard profile={profile?.doctor} />
      <Heading title="Select Date" />
      <DateList availabilityDates={availabilityDates}
        selectedDate={selectedDate}
        handleSelect={handleSelectDate} />
      <Heading title="List of Patients" />
      {profile?.doctor?.appointments != 0 ? <Listingpage setIsUpdated={setIsUpdated} patientList={profile?.doctor?.appointments} handleSelect={handlePatientSelect} /> : <div className='text-blue-500 font-bold text-center'>"No One slots Booked"</div>}
      <Heading title="Non-Booking Slots" />
      <SlotList slots={profile?.availableSlots} handleSelect={() => { }} />

    </div>
  )
}

export default Dashboard


const Heading = ({ title }) => {
  return <h2 className='text-center font-bold underline'>{title}</h2>
}