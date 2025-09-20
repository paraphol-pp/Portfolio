"use client";
import { motion } from "framer-motion";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import { useState } from "react";

const journey = [
  {
    date: "Feb 21 2025",
    name: "Coursera - instructor network",
    description: "Generative AI for Data Visualization and Data Storytelling ",
    image: "/assets/ct-1.png",
  },
  {
    date: "Feb 10 2025",
    name: "Coursera - project network",
    description: "Customer Service with Python: Build a Chatbot using ChatGPT",
    image: "/assets/ct-2.png",
  },


];

const Certificate = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
    >
      {/* heading */}
      <div className="flex flex-col items-center justify-center w-full h-[200px]">
        <h1 className="h1 mb-6">
          Certificate <span className="text-accent">.</span>
        </h1>
      </div>

      <ScrollArea className="h-[650px] md:h-[800px] w-full ">
        <div className="container mx-auto px-0">
          <div className="relative flex flex-col gap-16">
                  
            {/* line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white/20 -translate-x-1/2 hidden md:block" />

            {journey.map((item, index) => {
  const { description, name, date, image } = item;

  return (
    <div key={index} className="relative">
      {/* ✅ Mobile layout */}
      <div className="flex flex-col items-center gap-4 md:hidden">
        <div
          className="w-full max-w-[500px] h-[250px] relative cursor-pointer"
          onClick={() => setSelectedImage(item.image)}
        >
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover rounded-xl"
          />
        </div>
        <div className="max-w-[500px]">
          <p className="mb-2 text-white/50">{date}</p>
          <p className="h4 mb-2">{name}</p>
          <p className="text-base text-white/60">{description}</p>
        </div>
      </div>

      {/* ✅ Desktop layout (timeline) */}
      <div
        className="
          hidden md:grid 
          grid-cols-[1fr_auto_1fr] items-center gap-8
        "
      >
        {/* left or right image/text */}
        {index % 2 === 0 ? (
          <div className="flex justify-end">
            <div
              className="w-full max-w-[500px] h-[350px] relative cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        ) : (
          <div className="flex justify-end">
            <div className="max-w-[500px]">
              <p className="mb-2 text-white/50">{date}</p>
              <p className="h4 mb-2">{name}</p>
              <p className="text-lg text-white/60">{description}</p>
            </div>
          </div>
        )}

        {/* timeline marker */}
        <div className="relative flex justify-center">
          <div className="w-[2px] bg-white/20"></div>
          <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-accent rounded-full shadow-lg"></div>
        </div>

        {index % 2 === 0 ? (
          <div className="flex justify-start">
            <div className="max-w-[500px]">
              <p className="mb-2 text-white/50">{date}</p>
              <p className="h4 mb-2">{name}</p>
              <p className="text-lg text-white/60">{description}</p>
            </div>
          </div>
        ) : (
          <div className="flex justify-start">
            <div
              className="w-full max-w-[500px] h-[350px] relative cursor-pointer"
              onClick={() => setSelectedImage(item.image)}
            >
              <Image
                src={image}
                alt={name}
                fill
                className="object-cover rounded-xl"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
})}

          </div>
        </div>
      </ScrollArea>
      {/* Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 cursor-pointer"
          onClick={() => setSelectedImage(null)}
        >
          {/* ปุ่มปิด */}
          <button
            className="absolute top-10 right-20 text-white text-3xl font-bold hover:text-accent duration-300 cursor-pointer"
            onClick={() => setSelectedImage(null)}
          >
            ✕
          </button>

          {/* รูปใหญ่ */}
          <div className="relative w-[90%] max-w-4xl h-[80%]">
            <Image
              src={selectedImage}
              alt="Certificate"
              fill
              className="object-contain"
            />
          </div>
        </div>
      )}
    </motion.section>
  );
};

export default Certificate;
