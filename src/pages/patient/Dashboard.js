import React, { useEffect, useState, useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import Swal from 'sweetalert2';
import Listingpage from '../doctor/Listingpage';
import DateList from '../../components/DateList';
import SlotList from '../../components/SlotList';
import Button from '../../components/Button';
import ClientProfileCard from '../../components/ClientProfileCard';
import PreviousBookedListing from '../../components/PreviousBookedListing';
import Loader from '../../components/Loader';
import fetchApi from '../../utils/fetchMethod';
import { generateDates, getFutureTimes } from '../../utils/sharedMethods';

const Dashboard = () => {
  const location = useLocation();
  const [profile, setProfile] = useState({});
  const [selectedDate, setSelectedDate] = useState(null);
  const [doctorList, setDoctorList] = useState({ internal: [], external: [] });
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const listOfDates = useMemo(() => generateDates(), []);

  const fetchClientDetail = useCallback(async () => {
    try {
      const payload = { id: location.state?.id };
      const { data, error } = await fetchApi(2, 'client/profile', payload);
      if (data) setProfile({ ...data, id: data._id });
      if (error) Swal.fire({ icon: 'error', title: 'Error', text: error });
    } catch (err) {
      console.error('Error fetching client details:', err);
    }
  }, [location.state?.id]);

  const fetchDoctorList = useCallback(async (date) => {
    try {
      const { data } = await fetchApi(2, 'doctor/getByDate', { date });
      setDoctorList({ internal: data?.internalDoctors || [], external: data?.externalDoctors || [] });
    } catch (err) {
      console.error('Error fetching doctor list:', err);
    }
  }, []);

  const fetchDoctorProfile = async (id, date) => {
    try {
      const { data } = await fetchApi(2, 'doctor/profile', { id, date });
      if (data) setAvailableSlots(data.availableSlots || []);
    } catch (err) {
      console.error('Error fetching doctor profile:', err);
    }
  };

  const saveAppointment = useCallback(async () => {
    if (!selectedDoctor || !profile || !selectedDate || !selectedSlot) return;
    setIsLoading(true);
    try {
      const payload = {
        doctorId: selectedDoctor._id,
        patientId: profile._id,
        date: listOfDates[selectedDate].date,
        slot: selectedSlot,
      };
      const { data, error } = await fetchApi(2, 'appointments/addAppointment', payload);
      if (data) {
        Swal.fire({ icon: 'success', title: 'Success', text: data.message });
        fetchClientDetail();
      }
      if (error) Swal.fire({ icon: 'error', title: 'Error', text: error });
    } catch (err) {
      Swal.fire({ icon: 'error', title: 'Error', text: err.message });
    } finally {
      setIsLoading(false);
    }
  }, [selectedDoctor, profile, selectedDate, selectedSlot, fetchClientDetail]);

  useEffect(() => {
    fetchClientDetail();
  }, [fetchClientDetail]);

  const handleSelectDate = (index) => {
    setSelectedDate(index);
    fetchDoctorList(listOfDates[index].date);
  };

  const handleDoctorSelect = (doctor) => {
    setSelectedDoctor(doctor);
    fetchDoctorProfile(doctor._id, listOfDates[selectedDate].date);
  };

  return (
    <div className="p-3">
      <ClientProfileCard profile={profile} />
      <Heading title="Previous Booked Appointments" />
      <PreviousBookedListing doctorList={profile.appointments} />

      <Heading title="Select Date" />
      <DateList availabilityDates={listOfDates} selectedDate={selectedDate} handleSelect={handleSelectDate} />

      <Heading title="List of Doctors" />
      {doctorList.internal.length > 0 && (
        <Section title="Internal Doctors">
          <Listingpage doctorList={doctorList.internal} selectedDoctor={selectedDoctor} handleSelect={handleDoctorSelect} />
        </Section>
      )}
      {doctorList.external.length > 0 && (
        <Section title="External Doctors">
          <Listingpage doctorList={doctorList.external} selectedDoctor={selectedDoctor} handleSelect={handleDoctorSelect} />
        </Section>
      )}

      <Heading title="Select Slot" />
      <SlotList slots={getFutureTimes(availableSlots)} selectedSlot={selectedSlot} handleSelect={setSelectedSlot} />

      <Heading title="Selected Date and Selected Slot" />
      <div className="font-bold text-blue-700">
        {(listOfDates?.[selectedDate]?.date || 'No Date Selected') + ` & Slot: ${selectedSlot || ''}`}
      </div>

      {selectedDate !== null && selectedSlot && <Button title="Book Appointment" onClick={saveAppointment} />}
      {isLoading && <Loader />}
    </div>
  );
};

export default Dashboard;

const Heading = ({ title }) => <h2 className="text-center font-bold underline my-3">{title}</h2>;

const Section = ({ title, children }) => (
  <div>
    <div className='text-left font-bold text-blue-500'>{title}</div>
    {children}
  </div>
);
