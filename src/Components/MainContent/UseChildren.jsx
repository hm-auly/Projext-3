import React from 'react'

function UseChildren() {
    const cardInfo = [
        {
            img: "/Images/img12.svg",
            hed: "Your  entire  trip in one checkout!",
            des: "Add multiple experiences to your cart and checkout on one click."
        },
        {
            img: "/Images/img13.svg",
            hed: "Pay with Crypto on the go",
            des: "Enjoy the freedom of universal payments for a seamless marketplace experience"
        },
        {
            img: "/Images/img14.svg",
            hed: "Free Cancellation and ticket transfer",
            des: "Resell your tickets or cancel your reservations at zero cost 24 hours before. one click."
        },
    ]
  return (
    <section>

        <div className='px-5 py-5'>
            <h1 className='text-2xl font-bold text-center py-5'>Why Use Chillsbay?</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:w-[1200px] mx-auto bg-blue-50 md:px-16 py-5 md:gap-36 gap-10 '>
                {cardInfo.map(({img, hed, des}, i) => (
                    <div key={i} className='flex flex-col justify-center items-center text-center gap-3'>
                        <div>
                            <img src={img} alt="" />
                        </div>
                        <div>
                            <h5 className='text-3xl font-bold pb-3'>{hed}</h5>
                            <p className=''>{des}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default UseChildren