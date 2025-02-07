import React from 'react'



function ImageCard() {
    const imgCardInfo = [
        {img: "/Images/img1.svg", title: "Eat & Drink"},
        {img: "/Images/img2.svg", title: "Events"},
        {img: "/Images/img3.svg", title: "Clup"},
        {img: "/Images/img4.svg", title: "Things to do"}
        
        
    ]
  return (
    <section className='py-8'>
       <h1 className='md:text-5xl text-3xl font-bold text-center pb-3'>What are you in the mood for?</h1>
       <div className='flex justify-center '>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:w-[1240px] '>
            {imgCardInfo.map(({img, title}, i) => (
                <div key={i} className='flex  flex-col justify-center items-center '>
                    <img className='' src={img} alt="" />
                    <span className='text-xl font-semibold'>{title}</span>
                </div>
            ))}
        </div>
       </div>
    </section>
  )
}

export default ImageCard;