import React from 'react'
import beachVid from '../assets/beachVid.mp4';
import {AiOutlineSearch} from 'react-icons/ai';

const Hero = () => {
  return (
    <div className='w-full h-screen relative'>

        <video className='w-full h-full object-cover'
                autoPlay loop muted
                src={beachVid}/>
        
        <div className='absolute w-full h-full 
           top-0 left-0 bg-gray-900/30'>
        </div>

        <div className='absolute top-0 w-full h-full
        flex flex-col justify-center text-center 
        text-[#fff] p-4'>
            <h1>First class travel</h1>
            <h2 className='py-3'>
                Top 1% locations worldwide.</h2>
            <form className='flex justify-between
            items-center max-w-[700px] mx-auto
            w-full border p-1 rounded-md text-[#000]
            bg-gray-100/80'>
                <div>
                    <input className='bg-transparent w-[300px]
                        sm:w-[400px] font-[Poppins] 
                        focus:outline-none'
                    type="text" 
                    placeholder='Search destinations'/>
                </div>
                <div>
                    <button>
                        <AiOutlineSearch size={20}
                        className='icon'
                        style={{color: '#fff'}}/>
                    </button>
                </div>
            </form>
        </div>

    </div>
  )
}

export default Hero