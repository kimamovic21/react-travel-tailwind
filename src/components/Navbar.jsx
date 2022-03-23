import React, {useState} from 'react';
import {BsPerson} from 'react-icons/bs';
import {BiSearch} from 'react-icons/bi';
import {AiOutlineClose} from 'react-icons/ai';
import {GiHamburgerMenu} from 'react-icons/gi';
import {
    FaFacebook,
    FaTwitter,
    FaInstagram,
    FaPinterest,
    FaYoutube,
} from 'react-icons/fa';

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
      setNav(!nav);
      setLogo(!logo);
  }

  return (
    <div className='flex w-full justify-between items-center
         h-20 px-4 absolute z-10 text-[#fff]'>

        <div>
            <h1 onClick={handleNav}
                className={logo ? 'hidden' : 'block'}>
                React-travel.
            </h1>
        </div>

        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>Destinations</li>
            <li>Travel</li>
            <li>View</li>
            <li>Book</li>
        </ul>

        <div className='hidden md:flex'>
            <BiSearch className='mr-2'
                      size={20}/>
            <BsPerson size={20}/>
        </div>

        {/* Hamburger button*/}

        <div onClick={handleNav}
             className='md:hidden z-10'>
            {nav ? <AiOutlineClose size={20} 
            className="text-black cursor-pointer"/> : 
                    <GiHamburgerMenu size={20}
            className="cursor-pointer"/>}
        </div>

        {/* Mobile menu dropdown */}

        <div onClick={handleNav}
             className={nav ? 
                 'absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col text-[#000]' : 
                 'absolute left-[-100%]' }>
            <ul>
               <h1>React-travel.</h1>
                 <li className='border-b'>
                     Home
                </li>
                 <li className='border-b'>
                     Destinations
                </li>
                 <li className='border-b'>
                     Travel
                </li>
                 <li className='border-b'>
                     View
                </li>
                 <li className='border-b'>
                     Book
                </li>
            </ul>

            <div className='flex flex-col'>
                <button className='my-6'>
                    Search
                </button>
                <button>
                    Account
                </button>
            </div>

            <div className='flex justify-between my-8'>
                <FaFacebook className='icon'/>
                <FaTwitter className='icon'/>
                <FaYoutube className='icon'/>
                <FaPinterest className='icon'/>
                <FaInstagram className='icon'/>
            </div>
        </div>

    </div>
  )
}

export default Navbar;