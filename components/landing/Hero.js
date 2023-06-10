import Link from 'next/link';
import React from 'react';
import { TypeAnimation } from 'react-type-animation';

function HeroHome({subtitle,textAnimation,title,user}) {

  return (
    <div className="text-center px-12">
      {user && <h2 className='text-4xl md:text-5xl font-extrabold'>Hi {user.given_name}</h2>}
      {!user &&      
      <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter" data-aos="zoom-y-out">
        {title}
        <span className="block m7-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">
          <TypeAnimation
            sequence={textAnimation}
            wrapper="span"
            cursor={true}
            speed={10}
            repeat={Infinity}
            style={{ fontSize: '1em', display: 'block', marginBottom: '10' }}
          />
        </span>
      </h1>
      }
        <p className="text-xl text-gray-600 my-8" data-aos="zoom-y-out" data-aos-delay="150">
          {subtitle}
        </p>
        <Link href="/remind" className="btn text-white bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" >
          Set an email reminder
        </Link>
  </div>
  );
}

export default HeroHome;