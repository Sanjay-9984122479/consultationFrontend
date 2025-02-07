import React, { useEffect, useState, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Form from '../../components/Form';
import fetchApi from '../../utils/fetchMethod';
import { generateDates, generateTimeSlots } from '../../utils/sharedMethods';
import validateForm from './validateForm';
import { DoctorFields } from './formObject';
import { States } from '../../constant/appConstant';

const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  // Default form values
  const defaultValues = useMemo(() => ({
    city: "", name: "", mobile: "", profile: "", age: "",
    email: "", specialization: "", experience: "", fromTime: "",
    toTime: "", slots: [], password: "", communication: "",
    fees: "", regNo: ""
  }), []);

  const [inputFields, setInputFields] = useState(defaultValues);
  const [errors, setErrors] = useState({});
  const [fields, setFields] = useState(DoctorFields);

  // Fetch doctor details (Optimized with useCallback)
  const fetchDoctorDetail = useCallback(async () => {
    if (!location?.state?.id) return;
    
    try {
      const { data } = await fetchApi(2, "doctor/profile", { id: location.state.id });
      if (data) setInputFields(data.doctor);
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Error', text: error.message });
    }
  }, [location?.state?.id]);

  // Fetch doctor details on mount when editing
  useEffect(() => {
    fetchDoctorDetail();
  }, [fetchDoctorDetail]);

  // Update city list when state changes
  useEffect(() => {
    if (fields && inputFields.state) {
      setFields((prevFields) =>
        prevFields.map((item) =>
          item.key === 'city' ? { ...item, list: States[inputFields.state] } : item
        )
      );
    }
  }, [inputFields.state]);

  // Save or Update Doctor
  const saveAndUpdateDoctor = async (slots, availability) => {
    const payload = {
      id: location?.state?.id || undefined,
      ...inputFields,
      availabilityDates: availability,
      slots,
    };

    try {
      const { data } = location?.state?.id
        ? await fetchApi(2, "doctor/update", payload)
        : await fetchApi(2, "doctor/register", payload);

      if (data) {
        navigate("/doctorDashboard", { state: { id: data.doctor?._id || data.id } });
        Swal.fire({ icon: 'success', title: 'Success', text: data.message });
      }
    } catch (error) {
      Swal.fire({ icon: 'error', title: 'Error', text: error.message });
    }
  };

  // Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const slots = generateTimeSlots(inputFields.fromTime, inputFields.toTime);
    const availability = generateDates(inputFields.availability);
    const validationErrors = validateForm({ ...inputFields, slots });

    if (Object.keys(validationErrors).length === 0) {
      saveAndUpdateDoctor(slots, availability);
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div>
      <Form 
        title="Doctor Profile" 
        fields={fields} 
        inputFields={inputFields} 
        setInputFields={setInputFields} 
        handleSubmit={handleSubmit} 
        error={errors} 
      />
      <div 
        className="text-blue-700 font-bold underline text-center cursor-pointer"
        onClick={() => navigate('/login', { state: { login: "doctor" } })}
      >
        I have already an Account
      </div>
    </div>
  );
};

export default Profile;
