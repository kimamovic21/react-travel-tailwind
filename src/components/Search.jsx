import React from 'react';
import {RiCustomerService2Fill} from 'react-icons/ri';
import {MdOutlineTravelExplore} from 'react-icons/md'

const Search = () => {
  return (
    <div className='max-w-[1240px] mx-auto 
         grid lg:grid-cols-3 gap-4 px-4 py-16'>

        {/* Left side */}
        <div className='lg:col-span-2 flex
        flex-col justify-evenly'>
            <div>
                <h2>Luxury included vacations for two people</h2>
                <p className='py-4'>
                   Lorem ipsum dolor sit amet, consectetur adipisicing 
                   elit. Magni perferendis odit id sit iusto, rem corporis
                   voluptas laudantium, eius nemo illum eveniet quae beatae
                   libero numquam accusantium. Maxime nisi asperiores quidem
                   sit odio veniam nemo dolore? Sed adipisci neque eius cum 
                   unde asperiores perspiciatis, fugit libero amet sequi, 
                   itaque aut.</p>
            </div>

            <div className='grid sm:grid-cols-2 
                 gap-8 py-4'>

                <div className='flex flex-col
                     lg:flex-row items-center text-center'>
                    <button>
                        <RiCustomerService2Fill size={40}/>
                    </button>
                    <div>
                      <h3 className='py-2'>
                          Leading service</h3>
                      <p className='py-1'>
                          All inclusive company for 20 years in-a-row.</p>
                    </div>
                </div>

                <div className='flex flex-col
                     lg:flex-row items-center text-center'>
                    <button>
                        <MdOutlineTravelExplore size={40}/>
                    </button>
                    <div>
                      <h3 className='py-2'>
                          Leading service</h3>
                      <p className='py-1'>
                          All inclusive company for 20 years in-a-row.</p>
                    </div>
                </div>

            </div>

        </div>


        {/* Right side */}
        <div>

            <div className='border text-center'>
                <p className='pt-2'>
                    Get an addition 10% off !</p>
                <p className='py-4'>
                    12 hours left...</p>
                <p className='bg-gray-800 
                 text-gray-200 py-2'>
                    Book now and save money.</p>
            </div>

            <form className='w-full'
                  method='POST' 
                  action="https://getform.io/f/dca02e7e-afff-4d0f-98a4-7ccc66ea5d33">
                  {/* https://app.getform.io/forms/35943 */}
                <div className='flex flex-col my-2'>
                    <label>Select destination</label>
                    <select className='border 
                    rounded-md p-2'>
                        <option>Cozumel</option>
                        <option>Grande Antigua</option>
                        <option>Key West</option>
                        <option>Maldives</option>
                        <option>Bora Bora</option>
                    </select>
                </div>
                <div className='flex flex-col my-2'>
                    <p className='my-2'>
                        Check in</p>
                    <input className='border 
                           rounded-md p-2'
                           type="date" />
                </div>
                <div className='flex flex-col my-2'>
                    <p>Check out</p>
                    <input className='border 
                           rounded-md p-2'
                           type="date" />
                </div>
                <button className='w-full my-4'>
                    Rates & availabilities
                </button>
            </form>

        </div>

    </div>
  )
}

export default Search;