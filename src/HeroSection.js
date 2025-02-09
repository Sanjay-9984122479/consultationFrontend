import React from 'react'
import img1 from './assets/Hero_img1.svg'
import img2 from './assets/Hero_img2.svg'
import img3 from './assets/Hero_img3.svg'
import avatar1 from './assets/Avatar (1).png'
import avatar2 from './assets/Avatar (2).png'
import avatar3 from './assets/Avatar.png'
import frame from './assets/Frame.svg'
import frame1 from './assets/Frame (1).svg'
import frame2 from './assets/Frame (2).svg'
import frame3 from './assets/Frame (3).svg'
import frame4 from './assets/Frame (4).svg'
import frame5 from './assets/Frame (5).svg'
import Logo from './assets/logo.png'
import customer1 from './assets/customer1.png'
import customer2 from './assets/customer2.png'
import customer3 from './assets/customer3.png'
import customer4 from './assets/customer3 (2).png'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
 const navigate = useNavigate();

 const handleLogin = (route)=>{
    navigate(route)
 }

    return (<>
        <div class="bg-red relative bg-[#05050e] ">

            <div class="w-full px-12 py-5 left-0 top-0 relative rounded-lg justify-between items-center inline-flex">
                <div class="w-[124.25px] h-8 justify-center items-center flex">
                    <div class="w-[124.25px] h-8 relative">
                        <div class="w-[121.35px] h-[29.50px] left-[1.42px] top-[1.31px] absolute">
                            <div class="w-[121.35px] h-[29.15px] left-0 top-[0.35px] absolute">
                                <img src={Logo} />
                            </div>
                        </div>
                    </div>
                </div>
                <button data-collapse-toggle="navbar-dropdown" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-dropdown" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div class="hidden md:flex md:w-auto justify-start items-center gap-8" id="navbar-dropdown">
                    <div class="justify-start items-center flex">
                        <div class="text-white text-sm font-medium font-['Inter']">Pateint</div>
                        <div class="w-5 h-5 relative"></div>
                    </div>
                    <div class="justify-start items-center flex">
                        <div class="text-white text-sm font-medium font-['Inter']">Doctors</div>
                        <div class="w-5 h-5 relative"></div>
                    </div>
              
                </div>
                <div class="justify-start items-center gap-10 flex">
                    <div class="px-6 py-3 bg-[#00d563] rounded-lg justify-center items-center gap-2.5 flex">
                        <div class="text-[#05050e] text-base font-medium font-['Inter'] cursor-pointer" onClick={()=>handleLogin("/clientProfile")}>Get Started User</div>
                    </div>
                </div>
            </div>
            <div className='w-full flex justify-center relative '>
                <div className='w-[50%] h-[50%] top-5 absolute flex justify-between z-10 '>
                    <div className='w-12 h-12 relative lg:left-16 lg:top-[30%] md:top-[30%] xs:top-[25%]'><img src={img1} /></div>
                    <div className='w-12 h-12'><img src={img2} /></div>
                    <div className='w-12 h-12 relative lg:right-16 lg:top-[30%] md:top-[30%] xs:top-[25%]'><img src={img3} /></div>
                </div>
                <div class="w-[50%] xl:h-[800px]  md:h-[850px] sm:h-[900px] h-[1000px] opacity-40 overflow-hidden">

                    <div class="w-full aspect-square flex justify-center items-center bg-[#1c2028] rounded-full mt-10">
                        <div class="w-[85%] aspect-square flex justify-center items-center bg-[#242a35] rounded-full">
                            <div class="w-[81%] aspect-square bg-[#303745] rounded-full"></div>
                        </div>

                    </div>
                </div>

                <div class="w-full h-[70%] left-0 top-52 absolute bg-gradient-to-b bg-[#05050e] pb-10">
                    <div class=" w-full flex justify-center items-center gap-12 ">
                        <div>
                            <div class="self-stretch h-[222px] flex-col justify-start items-center gap-8 flex">
                                <div class="px-2 py-1.5 rounded-[100px] border border-[#00d563] justify-start items-center gap-1.5 inline-flex">
                                    <div class="pr-1 justify-start items-start gap-2 flex">
                                        <div class="justify-start items-start flex">
                                            <img class="w-6 h-6 rounded-[200px] border" src={avatar1} />
                                            <img class="w-6 h-6 rounded-[200px] border border-white" src={avatar2} />
                                            <img class="w-6 h-6 rounded-[200px] border border-white" src={avatar3} />
                                        </div>
                                    </div>
                                    <div class="text-center text-[#00d563] text-xs font-medium font-['Inter'] leading-[18px]">Trusted by 2000+ People</div>
                                </div>
                                <div class="self-stretch text-center text-white lg:text-[64px] md:text-[32px] font-medium font-['Inter'] leading-[76.80px]">Simplify Your Doctor and pateient Relation with<br />Our All-in-One Teleconsultation.</div>
                            </div>
                            <div class="flex justify-center gap-7 mt-10 ">
                                <div class="justify-start items-start gap-10 flex">
                                    <div class="w-[175px] h-12 px-6 py-3 bg-[#00d563] rounded-lg justify-center items-center gap-2.5 flex">
                                        <div class="text-[#05050e] text-base font-medium font-['Inter'] cursor-pointer" onClick={()=>handleLogin("/doctorProfile")}>Doctor Here</div>
                                    </div>
                                </div>
                                <div class="rounded-lg border border-[#00d563] justify-start items-start gap-10 flex">
                                    <div class="w-[175px] h-12 px-6 py-3 rounded-lg justify-center items-center gap-2.5 flex">
                                        <div class="text-[#00d563] text-base font-medium font-['Inter'] cursor-pointer" onClick={()=>handleLogin("/clientProfile")}>Patient Here</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='w-full mt-40 flex justify-evenly flex-wrap relative z-10'>
                        <div className='w-[200px] flex place-items-center'>  <img className='w-[160px]' src={frame} /> </div>
                        <div className='w-[200px] flex place-items-center'>  <img className='w-[160px]' src={frame1} /> </div>
                        <div className='w-[200px] flex place-items-center'> <img className='w-[160px]' src={frame2} /> </div>
                        <div className='w-[200px] flex place-items-center'> <img className='w-[160px]' src={frame3} /> </div>
                        <div className='w-[200px] flex place-items-center'> <img className='w-[160px]' src={frame4} /> </div>
                        <div className='w-[200px] flex place-items-center'> <img className='w-[160px]' src={frame5} /> </div>
                    </div>
                </div>
            </div>


            {/* Story Section */}
            <div className='relative top-5 pb-10'>
                <div class="flex justify-center">
                <div class="px-2 py-1.5 rounded-[100px] border border-[#00d563] justify-start items-center gap-1.5 inline-flex">
                                    <div class="pr-1 justify-start items-start gap-2 flex">
                                        <div class="justify-start items-start flex">
                                            <img class="w-6 h-6 rounded-[200px] border" src={avatar1} />
                                            <img class="w-6 h-6 rounded-[200px] border border-white" src={avatar2} />
                                            <img class="w-6 h-6 rounded-[200px] border border-white" src={avatar3} />
                                        </div>
                                    </div>
                                    <div class="text-center text-[#00d563] text-xs font-medium font-['Inter'] leading-[18px]">Trusted by 2000+ People</div>
                                </div>
                </div>
                <div className='w-full flex justify-center items-center mt-10'><div class="w-[565px] text-center text-[#fbfcfc] text-5xl font-normal font-['Inter'] leading-[57.60px]">Real Stories from Happy Customers</div></div>
                <div className='w-full h-[650.86px] relative  grid grid-cols-1 px-20'>
                    <div className="h-[123px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-start items-center gap-6 inline-flex md:ml-20 xs:ml-0">
                        <img className="w-16 h-[90px] rounded-lg" src={customer1} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex">
                            <div><span className="text-white text-lg font-medium font-['Inter']">Mr. Amit Kashyap </span><span className="text-white text-sm font-medium font-['Inter']">(CEO, & MD)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal font-['Inter'] leading-tight block md:block xs:hidden ">I had an amazing experience with this online consultation platform. The doctor was very professional, listened to my concerns, and provided clear guidanc</div>
                        </div>
                    </div>
                    <div className="h-[123px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-end  items-center gap-6 inline-flex">
                        <img className="w-16 h-[90px] rounded-lg" src={customer2} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex">
                            <div><span className="text-white text-lg font-medium font-['Inter']">Aman Bharti </span><span className="text-white text-sm font-medium font-['Inter']">(Administrator)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal font-['Inter'] leading-tight md:block xs:hidden ">I never thought consulting a doctor online could be this easy. The response time was quick, and the advice I received was spot-on.</div>
                        </div>
                    </div>
                    <div className="h-[123px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-center items-center gap-6 inline-flex">
                        <img className="w-16 h-[90px] rounded-lg" src={customer1} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex">
                            <div><span className="text-white text-lg font-medium font-['Inter']">Dr. R.S. Rao </span><span className="text-white text-sm font-medium font-['Inter']">(Govt. Teacher)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal font-['Inter'] leading-tight md:block xs:hidden ">I was hesitant about online consultations, but this platform proved me wrong. The doctor was very knowledgeable, and the consultation felt just as thorough as an in-person visit</div>
                        </div>
                    </div>
                    <div className="h-[123px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-start items-center gap-6 inline-flex">
                        <img className="w-16 h-[90px] rounded-lg" src={customer3} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex ">
                            <div><span className="text-white text-lg font-medium font-['Inter']"> Sonali pal </span><span className="text-white text-sm font-medium font-['Inter']">(Shopkeeper)</span></div>
                            <div className="w-[313px] text-[#cfd0dc] text-base font-normal font-['Inter'] leading-tight md:block xs:hidden ">As a working mom, finding time for a doctor’s appointment is tough. This online consultancy made it so much easier to get medical advice from the comfort of my home</div>
                        </div>
                    </div>
                    <div class="h-[123px] px-3 py-2 bg-[#292f3b] rounded-2xl shadow justify-self-end items-center gap-6 inline-flex  md:mr-20 xs:mr-0 ">
                        <img className="w-16 h-[90px] rounded-lg" src={customer4} />
                        <div className="w-[313px] flex-col justify-start items-start gap-3 inline-flex ">
                            <div><span className="text-white text-lg font-medium font-['Inter']"> Divya Tripathi </span><span className="text-white text-sm font-medium font-['Inter']">(Bussinesman)</span></div>
                            <div class="w-[313px] text-[#cfd0dc] text-base font-normal font-['Inter'] leading-tight md:block xs:hidden">The pricing is reasonable, and the service is excellent. I got medical advice without waiting in long lines or spending a fortune</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}

export default HeroSection

