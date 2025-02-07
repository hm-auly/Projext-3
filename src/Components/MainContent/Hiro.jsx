import React from 'react'
import {
    Autocomplete,
    AutocompleteItem
} from "@heroui/autocomplete";
import {Button} from "@heroui/react";

function Hiro() {
    return (
        <section className="bg-[url('/Images/hero.png')] w-full  bg-no-repeat bg-cover h-[100vh]  overflow-hidden mx-auto ">
            <div className='md:w-[794px] md:pl-10 flex flex-col gap-8 mt-10 justify-center items-center md:items-start px-10'>
                <h1 className='text-2xl md:text-6xl w-2xl font-bold text-white text-center md:text-start'>Find amazing things to do anytime, anywhere in Lagos.</h1>
                <div className='md:w-[726px] h-114px rounded-[8px] p-7 bg-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  place-items-center gap-5'>

                    <div>
                        <p>Location</p>
                        <Autocomplete placeholder='Oshodi' className='bg-white w-[100%]' >

                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                        </Autocomplete>
                    </div>

                    <div>
                        <p>Date</p>
                        <Autocomplete placeholder='Date' className='bg-white w-[100%]' >

                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                        </Autocomplete>
                    </div>

                    <div>
                        <p>Activities</p>
                        <Autocomplete placeholder='Night Clubs' className='bg-white w-[100%]' >

                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                            <AutocompleteItem value={"hablu programmer"} className='bg-white'>
                                hablu programmer
                            </AutocompleteItem>
                        </Autocomplete>
                    </div>
                    <div>
                        
                        <Button className='text-white w-[100%] bg-blue-600 px-7 py-2 rounded-md mt-6'>Search</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hiro