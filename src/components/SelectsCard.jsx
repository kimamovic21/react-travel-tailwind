import React from 'react';

import BoraBora from '../assets/borabora.jpg';
import BoraBora2 from '../assets/borabora2.jpg';
import Maldives from '../assets/maldives.jpg';
import Maldives2 from '../assets/maldives2.jpg';
import KeyWest from '../assets/keywest.jpg';

const SelectsCard = (props) => {
  return (
        <div className='relative'>
           <img className='w-full h-full object-cover' 
            src={props.bg} alt="Maldives" />
            <div className='bg-gray-900/30 
            absolute top-0 left0 w-full h-full'>
                <p className='absolute left-4 font-bold
                   bottom-4 text-xl text-gray-100'>
                 {props.text}
                </p>
            </div>
        </div>
  )
}

export default SelectsCard;