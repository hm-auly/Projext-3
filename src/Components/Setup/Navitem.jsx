import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,

} from "@heroui/navbar";
import { Link } from '@heroui/react';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button } from "@heroui/react";

function Navitem() {

    return (

        <div className='flex justify-start items-start md:justify-between  md:items-center w-full  flex-col md:flex-row'>
            <NavbarContent className='hidden md:flex'>
                <NavbarBrand><img src="/Images/Logo.svg" alt="" /></NavbarBrand>
            </NavbarContent>
            <NavbarContent >
                <NavbarItem className='flex gap-5 flex-col md:flex-row'>
                    <Link>Eat & Drink</Link>
                    <Link>Club <sup className='bg-blue-500 h-5  w-10 inline-flex items-center justify-center text-white rounded-full'>+Hot</sup></Link>
                    <Dropdown>
                        <DropdownTrigger>
                            <button className='border-none outline-none  flex items-center'>Things to do  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" className='text-blue-500' />
                            </svg>
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event " className='bg-white w-full md:w-28 '>
                            <DropdownItem >Water Sports</DropdownItem>
                            <DropdownItem >Day Parties</DropdownItem>
                            <DropdownItem >Outdoors</DropdownItem>
                            <DropdownItem >Rentals</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>

                    <Link><i class="fa-solid fa-cart-shopping text-2xl"></i></Link>

                    <Dropdown>
                        <DropdownTrigger>
                            <button className='border-none outline-none flex items-center' ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-8">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                            </svg>
                                Acount
                            </button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" className='bg-white w-full md:w-28'>
                            <DropdownItem >Water Sports</DropdownItem>
                            <DropdownItem >Day Parties</DropdownItem>
                            <DropdownItem >Outdoors</DropdownItem>
                            <DropdownItem >Rentals</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Link><Button className='bg-blue-500 rounded-xl text-white'>Contact Now</Button></Link>
                </NavbarItem>
            </NavbarContent>



        </div>







    )
}

export default Navitem;