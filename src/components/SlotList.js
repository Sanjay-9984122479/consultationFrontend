import React from 'react';

const SlotList = ({ slots, selectedSlot, handleSelect }) => {
  return (
    <div className="flex gap-3 p-5 w-full flex-wrap">
      {slots?.map((item, index) => (
        <SlotCard 
          key={index} 
          item={item} 
          handleSelect={handleSelect} 
          isSelected={selectedSlot === item} 
        />
      ))}
    </div>
  );
};

export default SlotList;

const SlotCard = ({ item, handleSelect, isSelected }) => {
  return (
    <div 
      className={`w-auto border border-gray-500 rounded-md p-3 cursor-pointer transition 
        ${isSelected ? "bg-lime-500" : "bg-gray-300"}`}
      onClick={() => handleSelect(item)}
    >
      <div className="text-black-500 font-bold text-center">{item}</div>
    </div>
  );
};
