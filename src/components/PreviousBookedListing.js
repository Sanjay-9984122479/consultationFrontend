import { Check } from 'lucide-react';
import React from 'react';

const PreviousBookedListing = ({ doctorList, }) => {
  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3 p-5">
      {doctorList?.map((item, index) => (
        <Card 
          key={index} 
          item={item} 
         
        />
      ))}
    </div>
  );
};

export default PreviousBookedListing;


const Card = ({ item }) => {
let data = item.doctor

  return (
    <div 
      className={`h-[250px] lg:w-[400px] md:w-[350px] p-5 rounded-md cursor-pointer transition bg-blue-200 border-2 border-green-500`}
      
    >
  

      <div className="flex gap-3">
        <img className="h-20 w-20 rounded-full" src={data.profile || "/default-doctor.png"} alt="Doctor"/>
        <div>
          <h2 className="py-3 font-bold">{data.name || "Doctor Name"}</h2>
          <div className="flex text-sm w-full justify-between gap-3">
            <span className="w-50">{data.specialization || "Specialization"}</span>
            <span className="w-50">{data.qualification || "Qualification"}</span>
          </div>
          <div className="flex text-sm w-full justify-between gap-3 font-bold">
            <span className="w-50">{data.experience || "Experience"} Years</span>
            {/* <span className="w-50">{item.email || "email"}</span> */}
          </div>
        </div>

      </div>

      <div className="flex justify-between">
        <span>Rs {data.fees || "Price"}</span>
        <span>Slot :- {item?.slot}</span>
      </div>
    
          <div className='font-bold text-center underline'>Prescription Details</div>
          <div className='h-20 w-full p-2 text-wrap overflow-auto text-red-400 text-center'>{item?.prescription||"No Prescription"}</div>

      
    </div>
  );
};
