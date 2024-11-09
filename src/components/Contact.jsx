import React from 'react';
import { motion } from "framer-motion"
import { CONTACT } from "../constants";

const Contact = () => {
  return (
    <div className="border-b border-neutral-900 pb-20">
      <motion.h1 
        whileInView={{opacity: 1 , y:0}}
        initial={{opacity:0, y: -100}}
        transition ={{duration: 1}}
        className="my-10 text-center text-4xl">Get in Touch</motion.h1>
      <motion.div 
      whileInView={{ opacity: 1, x: 0 }}
      initial={{ opacity: 0, x: 100 }}
      transition={{ duration: 1 }}
      className="text-center tracking-tighter">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href={`mailto:${CONTACT.email}`} className="text-blue-500 hover:underline">
          {CONTACT.email}
        </a>
      </motion.div>
    </div>
  );
};

export default Contact;
