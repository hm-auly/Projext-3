import React from 'react'

function MyLogos() {
    const LogosInfo = [
        {img: "/Images/img5.png", title: "Sight Seeing"},
        {img: "/Images/img6.png", title: "Volley Ball Game"},
        {img: "/Images/img7.png", title: "Wizkid Show"},
        {img: "/Images/img7.png", title: "Wizkid Show"},
        {img: "/Images/img5.png", title: "Sight Seeing"},
        {img: "/Images/img6.png", title: "Volley Ball Game"},
        {img: "/Images/img7.png", title: "Wizkid Show"},
        {img: "/Images/img7.png", title: "Wizkid Show"},
    ]
  return (
    <section className='px-5 py-5 max-w-[1440px] flex flex-col items-center justify-center h-auto text-center bg-[#9A9FBF1A]'>
       <div className=''> 
       <h1 className='md:text-5xl text-3xl font-bold text-center pb-3 md:text-start'>Top things to do in Lagos</h1>
       <div className='grid grid-cols-1   md:grid-cols-2 lg:grid-cols-4 lg:w-[1240px] '>
            {LogosInfo.map(({img, title}, i) => (
                <div key={i} className='flex flex-col w-[295px] h-[309px] '>
                  <div>
                      <img className='' src={img} alt="" />
                  </div>
                  <div >
                     <p className='font-bold text-xl '>{title}</p>
                  </div>
                </div>
            ))}
        </div>
       </div>
    </section>
  )
}

export default MyLogos