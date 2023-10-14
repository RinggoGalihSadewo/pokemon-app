import React from 'react'
import Typewriter from 'typewriter-effect';

type BannerProps = {
  title?: string;
}

const Banner = (props: BannerProps) => {

  return (
    <div className='w-full bg-[#051937] h-[25rem] items-center flex justify-center'>
        <h1 className='text-[3rem] font-bold text-center text-white tracking-widest mb-16'>
            <Typewriter
                    options={{
                        loop: true
                    }}
                    onInit={(typewriter) => {
                        typewriter
                        .typeString(props.title ? props.title.toUpperCase() : 'POKEMON APP')
                        .pauseFor(4000)
                        .start();
                }}
            />
        </h1>
    </div>
  )
}

export default Banner