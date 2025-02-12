import React from 'react'

const imgInfo = [
    {img: "/Images/see1.svg"},
    {img: "/Images/see2.svg"},
    {img: "/Images/see3.svg"},
    {img: "/Images/see4.svg"},
    {img: "/Images/see5.svg"},
    {img: "/Images/see6.svg"},
]

function SeeGalery() {
  return (
    <section className='container mx-auto py-5 px-5'>
        <h2 className='py-3 md:py-4  pmd:text-2xl text-xl font-bold leading-8'>See How people are chilling on <span className='text-blue-600'> Chillsbay</span></h2>
        <div className='grid grid-cols-2 md:grid-cols-6 '>
            {imgInfo.map(({img},i) => (
                <div key={i}>
                    <div className=''>
                        <img className='w-full' src={img} alt="" />
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default SeeGalery