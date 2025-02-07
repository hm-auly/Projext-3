import React, { useState } from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem
} from "@heroui/navbar";
import Navitem from '../Setup/Navitem';

function MyNavber() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
  
    return (

        <Navbar  isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} className=' w-full md:h-[100px] h-[72px] bg-[#FFFFFF]'>
            <div className='w-[1240px] h-[72px] md:flex justify-between items-center hidden'>
            {/* <NavbarContent >
                <NavbarBrand><img src="/Images/Logo.svg" alt="" /></NavbarBrand>
            </NavbarContent>
            <NavbarContent >
                <NavbarItem className='flex gap-5'>
                    <Link>Eat & Drink</Link>
                    <Link>Club <sup className='bg-blue-500 h-5  w-10 inline-flex items-center justify-center text-white rounded-full'>+Hot</sup></Link>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered">Things to do  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" className='text-blue-500' />
                            </svg>
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" className='bg-white w-28'>
                            <DropdownItem >Water Sports</DropdownItem>
                            <DropdownItem >Day Parties</DropdownItem>
                            <DropdownItem >Outdoors</DropdownItem>
                            <DropdownItem >Rentals</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Link><img src="/Images/card.svg" alt="" /></Link>
                    <Dropdown>
                        <DropdownTrigger>
                            <Button variant="bordered"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"  />
                            </svg>
                               Acount
                            </Button>
                        </DropdownTrigger>
                        <DropdownMenu aria-label="Action event example" className='bg-white w-28'>
                            <DropdownItem >Water Sports</DropdownItem>
                            <DropdownItem >Day Parties</DropdownItem>
                            <DropdownItem >Outdoors</DropdownItem>
                            <DropdownItem >Rentals</DropdownItem>
                        </DropdownMenu>
                    </Dropdown>
                    <Link><Button className='bg-blue-500 rounded-xl text-white'>Contact Now</Button></Link>
                </NavbarItem>
            </NavbarContent> */}
            <Navitem />
            </div>








            <NavbarContent className="sm:hidden" justify='end'>
                <NavbarBrand justify="start"><img src="/Images/Logo.svg" alt="" /></NavbarBrand>
                <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
            </NavbarContent>

            <NavbarMenu className='bg-[#F5FAFF] overflow-hidden'>
       
        <Navitem />
      </NavbarMenu>
        </Navbar>
    )
}

export default MyNavber;