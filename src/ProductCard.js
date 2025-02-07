import React, { useState } from 'react'

const ProductCard = ({data}) => {
    const [readMore,setReadMore] = useState();
  return (
    <div class="w-full mx-auto bg-white shadow-md rounded-lg overflow-hidden">
  <div class="">
    <div class=" flex justify-center h-48">
      <img class=" h-auto w-40 object-cover " src={data?.image} alt={data?.title}/>
    </div>
    <div class="p-6">
      <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{data?.title}</div>
      <a href="#" class="block mt-1 text-lg leading-tight font-medium text-black hover:underline">{data?.category}</a>
      <p class="mt-2 text-gray-500">{!readMore?(data?.description?.slice(0,50)+'...'):data?.description}</p>
      <div class="mt-4">
        <a href="#" class="text-indigo-500 hover:text-indigo-600 " onClick={()=>setReadMore(prev=>!prev)}>{!readMore?'Read More':'Less More'}</a>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductCard