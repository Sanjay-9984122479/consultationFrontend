import { Check } from 'lucide-react';
import React from 'react';

const Listingpage = ({ doctorList, selectedDoctor, handleSelect }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-5">
      {doctorList?.map((item, index) => (
        <Card 
          key={index} 
          item={item} 
          index={index} 
          selectedDoctor={selectedDoctor} 
          handleSelect={handleSelect} 
        />
      ))}
    </div>
  );
};

export default Listingpage;


const Card = ({ item, selectedDoctor, handleSelect }) => {
  console.log(selectedDoctor,item,"datas")
  const isSelected = selectedDoctor?._id === item._id; // Ensure selection persists

  return (
    <div 
      className={`h-[250px] lg:w-[400px] md:w-[350px] p-5 rounded-md cursor-pointer transition 
        ${isSelected ? "bg-green-200 border-2 border-green-500" : "bg-red-100"}`}
      onClick={() => handleSelect(item)}
    >
     {isSelected && (
        <div className="relative  right-2 bg-green-500 p-1 rounded-full">
          <Check className="text-lime-700" size={24} />
        </div>
      )}

      <div className="flex gap-3">
        <img className="h-20 w-20 rounded-full" src={item.profile || "/default-doctor.png"} alt="Doctor"/>
        <div>
          <h2 className="py-3 font-bold">{item.name || "Doctor Name"}</h2>
          <div className="flex text-sm w-full justify-between gap-3">
            <span className="w-50">{item.specialization || "Specialization"}</span>
            <span className="w-50">{"Experience " + (item.experience ||"N/A") } Years</span>
          </div>
         
        </div>
      </div>

      <div className="flex justify-between">
        <span>{item.communication || "Languages"}</span>
        <span>Rs {item.fees || "Price"}</span>
      </div>

      <div className="flex justify-between text-blue-700 font-bold">
        <span>Registration No.</span>
        <span>{item.regNo || "N/A"}</span>
      </div>

      <button className={`h-10 w-full text-white mt-4 rounded-md ${isSelected?"bg-gray-300":"bg-blue-800"}`} disabled={isSelected?true:false}>
        Select Doctor
      </button>
    </div>
  );
};
