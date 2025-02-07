import React from 'react';

const DateList = ({ availabilityDates, handleSelect, selectedDate }) => {
  return (
    <div className="flex gap-3 p-5">
      {availabilityDates?.map((item, index) => (
        <DateCard 
          key={index} 
          item={item} 
          index={index} 
          selected={selectedDate === index} // Compare with selectedDate index
          handleSelect={handleSelect} 
        />
      ))}
    </div>
  );
};

export default DateList;


const DateCard = ({ item, index, selected, handleSelect }) => {
    return (
      <div 
        className={`h-20 w-auto border border-gray-500 rounded-md p-3 cursor-pointer transition 
          ${selected ? "bg-lime-500" : "bg-gray-300"}`} 
        onClick={() => handleSelect(index)}
      >
        <div className="text-gray-700 font-bold text-center">{item.day}</div>
        <div className="text-gray-700 font-bold text-center">{item.date}</div>
      </div>
    );
  };
  