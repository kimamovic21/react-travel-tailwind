import React, {useState} from 'react';
import {
    BsArrowLeftSquareFill,
    BsArrowRightSquareFill
} from 'react-icons/bs';

const sliderData = [
   {
    url: 'https://media.istockphoto.com/photos/luxury-resort-in-maldives-picture-id1159110885?b=1&k=20&m=1159110885&s=170667a&w=0&h=i3VycIuXLYTLSiNGhCiEfT41-KXLDGFCHLj8Ol4nOho='
   },
   {
    url: 'https://media.istockphoto.com/photos/the-amazing-aerial-view-of-the-paradise-bora-bora-island-french-picture-id1289476814?b=1&k=20&m=1289476814&s=170667a&w=0&h=bCcppXrTl67U6vGK53LEqyR6xG4juHcpiJjJpcMOb-A='
   },
   {
    url: 'https://media.istockphoto.com/photos/high-angle-view-of-the-beach-in-cancun-mexico-at-dawn-picture-id1293182532?b=1&k=20&m=1293182532&s=170667a&w=0&h=nTaNxyTIiSCdFq7I2ybJzxcgSRCrXIzG7pwyz1QCqRc='
   }
];

const Carousel = () => {

  const [slide, setSlide] = useState(0);
  const length = sliderData.length

  const prevSlide = () => {
    setSlide(slide === length - 1 ? 0 : slide - 1)
  }
  const nextSlide = () => {
    setSlide(slide === 0 ? length - 1 : slide - 1)
  }

  return (
    <div className='max-w-[1240px] mx-auto
    px-4 py-16 relative flex justify-center
    items-center'>
        <BsArrowLeftSquareFill onClick={prevSlide}
        className='absolute
        top-[50%] text-3xl text-black cursor-pointer 
        left-8 bg-white'/>
        <BsArrowRightSquareFill onClick={nextSlide}
        className='absolute
        top-[50%] text-3xl text-black cursor-pointer 
        right-8 bg-white'/>
        {sliderData.map((item, index) => (
            <div className={index === slide ? 'opacity-100' : 'opacity-0'}>
                {index === slide && 
                (<img className='w-full rounded-md' src={item.url} alt="/" />)}
            </div>
        ))}

    </div>
  )
}

export default Carousel;