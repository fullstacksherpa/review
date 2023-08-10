import React, { useState } from 'react'
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';



const Review = ():React.JSX.Element => {
    const [index, setIndex] =useState<number>(0)
    const {name, job, image, text } = people[index]

    
    
    const checkNumber = (number:number):number=>{
        if (number>people.length-1){
            return 0;
        }
        if (number <0){
            return people.length -1;
        }
        return number;
    }


    const nextPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index + 1;
            return checkNumber(newIndex)
        })
    }

    const prevPerson = ()=>{
        setIndex((index)=>{
            let newIndex = index -1;
            return checkNumber(newIndex)
        })
    }

    const randomPerson = ()=>{
        let randomNumber = Math.floor(Math.random()*people.length);
        if (randomNumber === index){
            randomNumber = index + 1
        }
        setIndex(checkNumber(randomNumber))
    };


  return (
    <article className='bg-white py-6 px-8 rounded-md shadow-md transition-all duration-300 ease-linear text-center'>
      <div className='relative w-[150px] h-[150px] rounded-full mx-auto mb-6 before:w-full before:h-full before:bg-blue-500 before:absolute before:-top-1 before:-right-1 before:rounded-full'>
        <img src={image} alt={name} className='w-full block h-full object-cover rounded-full relative' />
        <span className='absolute top-0 left-0 w-10 h-10 grid place-items-center rounded-full transform translate-y-1/4 bg-blue-500  text-white'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='mb-1 text-3xl'>{name}</h4>
      <p className='mb-2 uppercase text-blue-500 text-base'>{job}</p>
      <p className='mb-3'>{text}</p>
      <div className='button-container'>
        <button className='text-blue-500 text-xl bg-transparent border-transparent mx-2 transition-all duration-300 ease-linear cursor-pointer hover:text-blue-300' onClick={prevPerson}>
          <FaChevronLeft />
        </button>
        <button className='text-blue-500 leaning-2 text-xl bg-transparent border-transparent mx-2 transition-all duration-300 ease-linear cursor-pointer hover:text-blue-300'onClick={nextPerson}>
          <FaChevronRight />
        </button>
      </div>
      <button className='font-bold mt-2 bg-blue-300 text-blue-500 px-2 py-1 capitalize rounded-md transition-all duration-300 ease-linear cursor-pointer hover:bg-blue-500 hover:text-blue-300 tracking-wider' onClick={randomPerson}>
        surprise me
      </button>
    </article>
  );
}

export default Review