import { useState } from "react";
import fetchApi from "../utils/fetchMethod";
import Loader from "./Loader";
import Swal from "sweetalert2";

export default function PrescriptionModal({setIsUpdated,isOpen,setIsOpen,item}) {
  const [prescription, setPrescription] = useState("");
  const [isLoading,setIsLoading] = useState(false);

  const addPrescription = async()=>{
    let payload = {doctorId:item.doctor.id,
        patientId:item.patient.id,
        date:item.date,
        slot:item.slot,
        prescription,
    }

    const {data,error} = await fetchApi(2,"appointments/addPrescription",payload);
     if(data){
      setIsLoading(false)
      setIsOpen(false)
      setIsUpdated(new Date())
     }
     if(error){
       Swal.fire({
              icon: 'error',
              title: 'error',
              text: error,
            });
     }
     setIsOpen(false)
  }

  const handleSubmit = () => {
    setIsLoading(true)
    addPrescription() 
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
     
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 relative">
            {/* Close Button */}
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              ✖
            </button>

            {/* Modal Title */}
            <h2 className="text-xl font-semibold mb-4">Add Prescription</h2>

            {/* Textarea Field */}
            <textarea
              className="w-full h-32 p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter prescription..."
              value={prescription}
              onChange={(e) => setPrescription(e.target.value)}
            ></textarea>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-green-600 text-white px-4 py-2 mt-4 rounded-md hover:bg-green-700"
            >
              Submit
            </button>
          </div>
        </div>
      )}
      {isLoading && <Loader/>}
    </div>
  );
}
