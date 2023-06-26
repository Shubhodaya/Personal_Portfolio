import { motion } from "framer-motion";
import React from 'react';
import { styles } from "../styles";
import { BoyCanvas } from "./canvas";
import Typed from 'typed.js';
import stylearrow from './mystyle.module.css'; 

const Hero = () => {

  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['Shubhodaya', 'Web-developer','Open-source enthusiast',],
      typeSpeed: 100,
      loop: true,
      backSpeed: 30,
      backDelay: 1500,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <section className={`relative h-screen w-full `}>
   
      <div
        className={`absolute inset-0 top-[160px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span ref={el} className='text-[#915EFF]'/>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop 3D visuals, user <br className='sm:block hidden' />
            interfaces and web applications
          </p>
        </div>
      </div>

<div className='absolute  lg:left-[920px]  lg:top-[210px] lg:h-[650px] inset-0 md:top-[420px] sm:h-[400px] sm:top-[420px]'>

<BoyCanvas/>
</div>


<div className={`${stylearrow.arrow} top-[550px] `}>
<a href='#about'>
  <span></span>
  <span></span>
  <span></span>
  </a>
</div>
      


    </section>
  );
};

export default Hero;