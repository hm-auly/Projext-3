import React, { useState } from 'react'
import { button, Button } from '@heroui/react';

function MySlider() {
    const sliderInfo = [
        {
            img: "/Images/simg1.svg",
            hed: "Wizkid made in  lagos tour1",
            des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat1"
        },
        {
            img: "/Images/simg1.svg",
            hed: "Wizkid made in  lagos tour2",
            des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat2"
        },
        {
            img: "/Images/simg1.svg",
            hed: "Wizkid made in  lagos tour3",
            des1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat3"
        },
    ];
    const silder2Info = [
        {
            img: "/Images/simg2.svg",
            des: "Dec 12 2022"
        },
        {
            img: "/Images/simg3.svg",
            des: "TBS  Lagos"
        },
        {
            img: "/Images/simg4.svg",
            des: "9:00 PM "
        },
        {
            img: "/Images/simg5.svg",
            des: "N20,000"
        },
    ]

    const [curent, setcurent] = useState(0)
    const slider = sliderInfo[curent]

    const  henclick = (index) => {
        setcurent(index)
    }

    const handelprev = () => { 
        setcurent((prv) => ( 
            prv === 0 ? sliderInfo.length -1 : prv -1
        ))
    }
    const handelnext = () => {
        setcurent((prv) => (
            prv === sliderInfo.length -1 ? 0 : prv + 1
        ))
    }
    return (
        <section className='px-5'>
            <div>
                <div className='flex items-center justify-center gap-8'>
                    <div>
                        <button onClick={handelprev}>
                          <i class="fa-solid fa-angle-left text-3xl"></i>
                        </button>
                    </div>
                    <div className='flex md:w-[1027px] flex-col md:flex-row '>
                        <div>
                            <img src={slider.img} alt="" />
                        </div>
                        <div className='md:w-[380px] flex flex-col gap-8 mt-6'>
                           
                                <div  >
                                    <h3 className='md:text-4xl text-3xl font-bold py-5'>{slider.hed}</h3>
                                    <p>{slider.des1}</p>
                                </div>
                          
                            <div className='grid grid-cols-2 gap-5'>
                                {silder2Info.map(({ img, des }, i) => (
                                    <div key={i} className='flex gap-3 items-center'>
                                        <img src={img} alt="" />
                                        <p className='font-bold'>{des}</p>
                                    </div>
                                  ))} 
                            </div>
                            <div className='flex gap-10'>
                                <Button variant='border' className='border-blue-600 border-2 font-[450] rounded-md md:w-[178px]'>Add to cart</Button>
                                <Button className='bg-blue-600 text-white font-[450] rounded-md md:w-[178px]'>Book Now</Button>
                            </div>
                            <div className='flex gap-5 items-center '>
                                <p>Connect with us on:</p>
                                <div className='flex gap-7 items-center'>
                                    <i class="fa-brands fa-twitter text-blue-600"></i>
                                    <i class="fa-brands fa-square-instagram text-blue-600 "></i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button onClick={handelnext}>
                        <i class="fa-solid fa-angle-right text-3xl"></i>
                        </button>
                    </div>
                </div>
                <div className='flex gap-1 pt-5 justify-center items-center'>
                    {sliderInfo.map((_, index) => (
                      <div className=''>
                          <button onClick={() => henclick(index)} className={`h-2 w-2 block  rounded-full ${index === curent ? "bg-blue-600" : "bg-gray-500"}`}>

                            </button>
                      </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MySlider