import React from 'react'
import single from '../assets/single.png'
import double from '../assets/double.png'
import  triple from '../assets/triple.png'

const Cards = () => {
  return (
    <div className='w-full py-[6rem] bg-white px-6'>
         <div className='max-w-[1240px] grid md:grid-cols-3 gap-8 mx-auto px-9'>
            <div className='w-full py-7 shadow-xl rounded-lg my-4 flex flex-col items-center  duration-300 hover:scale-105 '>
                  <img  className='w-20 mx-auto' src={single} alt="" />
                  <h2 className='text-2xl text-center font-bold py-8'>Sinngle User</h2>
                  <p className='text-center font-bold text-4xl'>$149</p>
                  <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'> 1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
                  </div>
                  <button className='bg-[#00df9a] text-black px-6 py-2 rounded-md  w-[200px] my-6 '>Start Trial</button>
            </div>
            <div className='w-full py-7 shadow-xl bg-gray-100 rounded-lg flex flex-col my-8 md:my-0 items-center  duration-300 hover:scale-105 '>
                  <img  className='w-20 mx-auto' src={double} alt="" />
                  <h2 className='text-2xl text-center font-bold py-8'>Sinngle User</h2>
                  <p className='text-center font-bold text-4xl'>$149</p>
                  <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'> 1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
                  </div>
                  <button className='bg-black text-[#00df9a] px-6 py-2 rounded-md  w-[200px] my-6 '>Start Trial</button>
            </div>
            <div className='w-full py-7  rounded-lg flex flex-col items-center  my-4 shadow-xl duration-300 hover:scale-105 '>
                  <img  className='w-20 mx-auto' src={triple} alt="" />
                  <h2 className='text-2xl text-center font-bold py-8'>Sinngle User</h2>
                  <p className='text-center font-bold text-4xl'>$149</p>
                  <div className='text-center  font-medium'>
                    <p className='py-2 border-b mx-8 mt-8'> 500 GB Storage</p>
                    <p className='py-2 border-b mx-8'> 1 Granted User</p>
                    <p className='py-2 border-b mx-8'> Send up to 2 GB</p>
                  </div>
                  <button className='bg-[#00df9a] text-black px-6 py-2 rounded-md  w-[200px] my-6 '>Start Trial</button>
            </div>
         </div>
    </div>
  )
}

export default Cards