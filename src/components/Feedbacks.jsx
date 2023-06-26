import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  name,
  image,
}) => (



    <div className='mt-1 bg-black-200 p-3  xs:w-[320px] w-full'>
      

      <div className=' flex justify-between items-center gap-1'>
        <div className='flex-1 flex flex-col'>
        <img
          src={image}
          alt={`${name}`}
          className='w-full h-full object-cover'
        />
        </div>

      
      </div>
    </div>
 
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div
        className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Proof of Experience</p>
          <h2 className={styles.sectionHeadText}> <span className="text-[#915EFF]">My</span> Trophy Cabinet</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");