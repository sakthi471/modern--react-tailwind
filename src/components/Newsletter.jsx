import React from 'react'

const Newsletter = () => {
  return (
    <div className='w-full py-16 text-white'>
        <div className='max-w-[1240px] grid lg:grid-cols-3 mx-auto'>
            <div className='px-5 lg:col-span-2 p-6'>
                <h1 className='text-xl font-bold md:text-2xl lg:text-3xl'>Wants tips &tricks to optimize your flow?</h1>
                <p className=' text-sm'>Sign up to our newletter and stay up to data</p>
            </div>
            <div className='px-4'>
                <div className='flex flex-col py-5 sm:flex-row items-center gap-3w '>
                    <input  className='p-2 rounded-md text-black outline-none w-full lg:p-2 lg:w-auto' type="email" placeholder='Enter email' />
                    <button  className='bg-[#00df9a] text-black px-3 py-2 rounded-md mx-auto  w-[150px] mt-4 lg:w-[100px] sm:mt-0'>Notify Me</button>
                </div>
                <p className=''>Lorem ipsum dolor, sit amet consectetur <span className='text-[#00df9a] '>Privcy policy</span></p>
            </div>
        </div>  
    </div>
  )
}

export default Newsletter