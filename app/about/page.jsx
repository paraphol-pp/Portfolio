"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";

// components
import Stats from "@/components/Stats";
import Testimonial from "@/components/Testimonial";
import Info from "@/components/Info";
import Journey from "@/components/Journey";
import Skills from "@/components/Skills";
import Blob from "@/components/Blob";
import Socials from "@/components/Socials";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
      }}
      className="flex items-center min-h-screen pt-5 md:pt-0"
    >
      <div className="container mx-auto px-0">
        <div className="flex flex-col xl:flex-row items-center gap-24 w-full h-[680px] ">
          {/* img & social icon */}
          <div className="hidden xl:flex flex-col w-full h-full pt-14 max-w-[430px] relative ">
            <Image
              src="/assets/avatar.png"
              width={320}
              height={496}
              alt=""
              className="z-20 relative"
            />
            {/* overlay */}
            <div className="w-full h-[60px] absolute left-0 top-[420px] right-0 bg-gradient-to-t from-primary via-primary/90 z-30"></div>

            {/* blob */}
            <div className="absolute top-[80px] -left-[80px] z-10">
              <Blob containerStyles="w-[420px] h-[420px]" />
            </div>

            <Socials
              containerStyles="flex gap-4 z-40 w-max transform translate-x-[30px]"
              iconStyles="w-[48px] h-[48px] text-[22px] text-accent hover:text-accent-hover transition-all flex items-center justify-center rounded-full cursor-pointer"
            />
          </div>


          
          {/* scroll area */}
          <ScrollArea className="w-full h-[680px] ">
            <div>
              
            <div className="xl:hidden w-7/8 max-w-xs aspect-square mx-auto relative overflow-hidden rounded-full mb-10 shadow-2xl">
              <Image
                src="/assets/avatar-2.png"
                alt=""
                fill
                className="object-cover object-top"
              />
            </div>
                


              {/* details */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-2 h-2 bg-accent rounded-full"></div>
                <p>About me</p>
              </div>
              <h2 className="h2 mb-6">
                <span className="text-accent">Paraphol <span className="text-white">.</span></span>
              </h2>
              <div className="max-w-[550px] mb-12 space-y-4">
                <p>
                  I am a Computer Science student seeking internship opportunities,
                  passionate about Frontend Development.
                </p>
                <p>
                  Highly motivated, diligent, and eager to learn new skills, I am
                  committed to continuous improvement and excellence.
                </p>
                <p>
                  I believe that with an open mind and persistent effort, anything is possible.
                </p>
              </div>

              <div className="flex flex-col items-start gap-16">
                <Stats />
                <Testimonial />
                <Info />
                <Journey />
                <Skills />
              </div>
            </div>
          </ScrollArea>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
