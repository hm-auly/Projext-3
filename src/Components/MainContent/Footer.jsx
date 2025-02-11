import React from 'react'

const Icons = [
  { img: "/Images/f.svg" },
  { img: "/Images/t.svg" },
  { img: "/Images/i.svg" },
  { img: "/Images/in.svg" },
  { img: "/Images/y.svg" },
  { img: "/Images/tiktok.svg" }
];
const FooterLink = [
  {
    title: "Menu"
  },
  {
    link2: "Home",
    linkadd: "#"
  },
  {
    link2: "Eat",
    linkadd: "#"
  },
  {
    link2: "Drink",
    linkadd: "#"
  },
  {
    link2: "Events",
    linkadd: "#"
  },
  {
    link2: "Clup",
    linkadd: "#"
  },
  {
    link2: "Recreation",
    linkadd: "#"
  }
  ,
  // {
  //   link3: "Blog",
  //   linkadd: "#"
  // },
  // {
  //   link3: "Careers",
  //   linkadd: "#"
  // },
  // {
  //   link3: "Contact",
  //   linkadd: "#"
  // },
  // {
  //   link3: "FAQs",
  //   linkadd: "#"
  // }
];
const FooterLink3 = [
  {
    link3: "Blog",
    linkadd: "#"
  },
  {
    link3: "Careers",
    linkadd: "#"
  },
  {
    link3: "Contact",
    linkadd: "#"
  },
  {
    link3: "FAQs",
    linkadd: "#"
  }
]

const FooterLink2 = [
  {
    link:" Start Here",
    linkadd: "#"
  },
  {
    link:" Pay with Crypto",
    linkadd: "#"
  },
  {
    link:"Style Guide",
    linkadd: "#"
  },
  {
    link:" Password Protected",
    linkadd: "#"
  },
  {
    link:" 404 Not Found",
    linkadd: "#"
  },
  {
    link:" Licenses",
    linkadd: "#"
  },
  {
    link:" Changelog",
    linkadd: "#"
  },
 
];

const pertner = [
  {
    img: "/Images/pert.svg",
    head: "Become a Partner",
    des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Euismod pellentesque posuere.",
    btn: "Join Now"
  }
]




function Footer() {

  return (
    <section className='md:w-[1440px] container mx-auto py-10 px-5'>
      <div className='grid gap-5 grid-cols-1 md:grid-cols-4 '>

        {/* left div */}
        <div className='justify-self-start'>
          <div>
            <img src="/Images/Logo.svg" alt="" />
            <p className='pb-5 py-2'>Copyright {new Date().getFullYear()} © Auly ullah </p>
          </div>
          <div className='flex gap-3 items-center '>
            {Icons.map(({ img, des }, i) => (
              <div key={i}>
                <img src={img} alt="" />
                <p>{des}</p>
              </div>
            ))}
          </div>
        </div>
        {/* responsiv */}
        <div className='flex flex-col-reverse gap-5 md:flex-row justify-around col-span-3'>  
        {/* center div */}
        <div className='flex gap-16'>

          <div className=''>
            <h6 className='font-bold'>Menu</h6>
            <hr  className='h-2 mt-5 mb-3'/>
<div className='flex justify-between'>
            <div className=''>
            {FooterLink.map(({link2,  link3, linkadd }, i) => (
              <div key={i} className=' flex'>
                <div className='grid grid-cols-2  '>
                    <div className='flex justify-start items-center '>
                      <a className='leading-7 text-[#656B89]' href={linkadd}>{link2}</a>
                    </div>
                    {/* <div className='flex justify-start items-start  '>
                      <a  href={linkadd}>{link3}</a>
                    </div> */}
                </div>
              </div>
            ))}
          </div>
          <div>
            {FooterLink3.map(({link3, linkadd},i) => (
              <div key={i}>
                <a className='leading-7 text-[#656B89]' href={linkadd}>{link3}</a>
              </div>
            ))}
          </div>
          </div>
          </div>

          <div>
            <h6 className='font-bold'>Utility Pages</h6>
            <hr  className='h-2 mt-5 mb-3'/>
            {FooterLink2.map(({link, linkadd}, i) => (
              <div key={i}>
                <a className='leading-7 text-[#656B89]' href={linkadd}>{link}</a>
              </div>
            ))}
          </div>
        </div>
    {/* right div */}
        <div>
            <div className='lg:w-[288px] h-[313px] py-7 px-6 bg-[#F5FAFF] rounded-sm'>
              {pertner.map(({img, head, des, btn}, i) => (
                <div key={i}>
                  <img src={img} alt="" />
                  <div>
                    <h5 className='text-xl font-bold pt-5'>{head}</h5>
                    <p className='leading-7 py-5'>{des}</p>
                    <button className='font-bold bg-blue-500 w-full text-white py-3 px-7 rounded-sm'>{btn}</button>
                  </div>
                </div>
              ))}
            </div>
        </div>
      </div>


      </div>
    </section>
  )
}

export default Footer