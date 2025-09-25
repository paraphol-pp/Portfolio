"use client";
import { motion } from "framer-motion";

import { HiOutlineMapPin } from "react-icons/hi2";
import { HiOutlinePhone, HiOutlineMail } from "react-icons/hi";

import {
  BiLogoLinkedin,
} from "react-icons/bi";

const Contact = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
      }}
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col items-center justify-center w-full h-screen gap-12">
          {/* heading */}
          <div className="text-center">
            <h1 className="h1 mb-6">
              Get In <span className="text-accent">Touch</span>
            </h1>
            <p className="max-w-[460px] mx-auto">
              Feel free to reach out if you have a project, idea, or just want
              to connect. I'm always open to new opportunities.
            </p>
          </div>

          {/* contact info */}
          <div className="flex flex-col gap-6 text-lg">
            <div className="flex items-center gap-4 justify-start">
              <span className="text-accent">
                <HiOutlinePhone className="text-2xl" />
              </span>
              <span>088 099 4342</span>
            </div>

            <a
              href="mailto:paraphol.pp@gmail.com"
              className="flex items-center gap-4 justify-start hover:text-accent-hover transition-all duration-500"
            >
              <span className="text-accent">
                <HiOutlineMail className="text-2xl" />
              </span>
              <span>paraphol.pp@gmail.com</span>
            </a>

            <a
              href="https://www.linkedin.com/in/paraphol-pp" target="_blank"
              className="flex items-center gap-4 justify-start hover:text-accent-hover transition-all duration-500"
            >
              <span className="text-accent">
                <BiLogoLinkedin className="text-2xl" />
              </span>
              <span>paraphol-pp</span>
            </a>

          
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
