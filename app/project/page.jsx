"use client";
import { motion } from "framer-motion";
// swiper react components
import { Swiper, SwiperSlide } from "swiper/react";
// swiper rquired modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
// swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import Link from "next/link";
import Image from "next/image";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    id: 1,
    category: "frontend",
    title: "Website Concert",
    description:
      "A one-page website designed for promoting concerts. It provides event details, schedule, and ticket purchase links. Built with HTML, TailwindCSS, and JavaScript for responsive and modern UI.",
    image: "/assets/work/thumb4.png",
    link: "https://zeplin-concert.vercel.app",
    github: "https://github.com/paraphol-pp/one-page-website",
    tech: ["HTML", "TailwindCSS", "JavaScript"],
  },
  {
    id: 2,
    category: "frontend",
    title: "Website E-Commerce",
    description:
      "A one-page e-commerce website built with pure HTML and CSS during my early learning stage. Features a product showcase, simple navigation, and responsive layout practice.",
    image: "/assets/work/thumb1.png",
    link: "https://zepshop.vercel.app",
    github: "https://github.com/paraphol-pp/one-page-e-commerce",
    tech: ["HTML", "CSS"],
  },
  {
    id: 3,
    category: "python",
    title: "Zeppelin Cafe",
    description:
      "A modern Python desktop application for coffee shop management. Features product catalog, cart & checkout, user registration/authentication backed by SQLite, inventory & price checks, and a polished GUI for daily operations.",
    image: "/assets/work/thumb3.png",
    link: "",
    github: "https://github.com/paraphol-pp/zeppelin-cafe-app",
    tech: ["Python", "SQLite", "Photoshop"],
  },
  {
    id: 5,
    category: "uiux",
    title: "Fashion Shopping App",
    description:
      "End-to-end design for a mobile fashion shopping app from sign-up to secure checkout. Crafted in Figma and Photoshop, the project highlights intuitive flows, clean aesthetics, and a seamless user experience.",
    image: "/assets/work/thumb6.png",
    link: "https://www.figma.com/design/byOQHwJ4QDyc0apm0kQGhI/Final-Project?node-id=17-15&t=H65yWomWURnSSeF1-1",
    github: "",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 6,
    category: "uiux",
    title: "Finance Learning App",
    description:
      "UI/UX design for a personal finance learning app — from onboarding to interactive courses and expert consultations. Designed with Figma to deliver clarity, confidence, and engaging financial education.",
    image: "/assets/work/thumb5.png",
    link: "https://www.figma.com/design/Kiv9fHlVlTGY07af24EWzM/Untitled?node-id=0-1&t=vuayaBlrCrp82ior-1",
    github: "",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 7,
    category: "uiux",
    title: "Clinic Management",
    description:
      "Mobile UI/UX design for a clinic management app — from patient registration to appointment scheduling and record management. Designed in Figma for clarity, efficiency, and a professional healthcare experience.",
    image: "/assets/work/thumb7.png",
    link: "https://www.figma.com/design/jHH7VbdeXh2oLg5ZKU5rdV/ZeppeClinic?node-id=1-12&t=frmenKwbmf1O7R2t-1",
    github: "",
    tech: ["Figma", "Photoshop"],
  },
  {
    id: 8,
    category: "freelance",
    title: "ISLogo DESIGNER",
    description:
      "Created 200+ custom logos, brand identities, and social media graphics for gaming communities, clubs, teams, and small businesses. Managed a Facebook page ( ISLogo ) to attract clients, deliver projects, and maintain customer satisfaction.Strengthened skills in Photoshop,  and client communication, while balancing deadlines and quality.",
    image: "/assets/work/thumb8.png",
    link: "https://www.facebook.com/ISLogo.NAME",
    github: "",
    tech: ["Photoshop"],
  },
];

const categories = ["frontend", "uiux", "python", "freelance"];

const Project = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 0.8, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-screen flex items-center py-24 xl:py-0"
    >
      <div className="container mx-auto w-full h-full flex flex-col">
        {/* heading */}
        {/* <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          My Latest <span className="text-accent">Project</span> <span>&</span>{" "}
          <span className="text-accent">Work</span>
        </h2> */}
        <h2 className="h2 mb-6 xl:mb-12 max-w-[600px]">
          Project<span className="text-accent"></span> <span>&</span>{" "}
          <span className="text-accent"> Experience</span>
        </h2>

        {/* tabs */}
        <Tabs
          defaultValue="frontend"
          className="w-full flex flex-col gap-6 xl:gap-12"
        >
          {/* tabs list */}
          <TabsList className="flex flex-wrap justify-center items-center gap-4 h-full mb-1 xl:mb-0">
            {categories.map((category) => {
              return (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="capitalize border border-white/10 data-[state=active]:bg-accent h-[48px] px-6 rounded-full cursor-pointer "
                >
                  {category === "uiux" ? "UI UX Design" : category}
                </TabsTrigger>
              );
            })}
          </TabsList>

          {/* tab content */}
          <div className="h-[460px] scrollbar scrollbar-thumb-accent scrollbar-track-accent/5 overflow-y-scroll xl:overflow-y-visible ">
            {categories.map((category) => {
              return (
                <TabsContent key={category} value={category}>
                  <Swiper
                    modules={[Pagination, Navigation, Autoplay]}
                    pagination={{ clickable: true }}
                    navigation={true}
                    autoplay={{
                      delay: 5000,
                      disableOnInteraction: false,
                      pauseOnMouseEnter: true,
                    }}
                    className="h-max xl:h-[460px] "
                  >
                    {projects
                      .filter((project) => project.category === category)
                      .map((project) => {
                        return (
                          <SwiperSlide key={project.id} className="h-full">
                            <div className=" flex flex-col xl:flex-row xl:gap-12">
                              {/* project info */}
                              <div className="w-full max-w-[380px] flex flex-col gap-6 xl:gap-8 xl:pt-6 order-2 xl:order-none">
                                {/* title */}
                                <h3 className="h3">{project.title}</h3>

                                {/* wrapper*/}
                                <div className="flex flex-col justify-between flex-1">
                                  {/* tech and content */}
                                  <div className="xl:mb-4 max-w-full min-h-[130px]">
                                    <p className="mb-4">Techologies Used</p>
                                    <ul className="flex flex-wrap gap-4 mb-4">
                                      {project.tech.map((item, index) => {
                                        return (
                                          <li
                                            key={index}
                                            className="text-sm flex items-center  bg-[#a883ff]/13 h-[28px] px-[14px] rounded-full"
                                          >
                                            {item}
                                          </li>
                                        );
                                      })}
                                    </ul>
                                    {/* description */}
                                    {project.description && (
                                      <p className="text-sm leading-relaxed px-3 md:max-h-[120px] md:overflow-y-auto md:pr-2 scrollbar-thin">
                                        {project.description}
                                      </p>
                                    )}
                                  </div>

                                  {/* btns */}
                                  <div className="flex flex-col sm:flex-row gap-4 items-stretch pb-20 pt-5 md:pb-0 md:-pt-0 w-full">
                                    {project.link && (
                                      <Link href={project.link} target="_blank">
                                        <button className="btn btn-sm btn-accent flex gap-2 w-full sm:w-auto">
                                          <MdArrowOutward className="text-xl" />
                                          <span>Live Project</span>
                                        </button>
                                      </Link>
                                    )}

                                    {project.github && (
                                      <Link
                                        href={project.github}
                                        target="_blank"
                                      >
                                        <button className="btn btn-sm btn-white flex gap-2 w-full sm:w-auto">
                                          <FaGithub className="text-xl" />
                                          <span>Github Repo</span>
                                        </button>
                                      </Link>
                                    )}
                                  </div>
                                </div>
                              </div>

                              {/* project img */}
                              <div className="w-full aspect-[16/9] md:aspect-[16/9] xl:h-[400px] relative bg-pink-50/10 order-1 xl:order-none rounded-lg overflow-hidden">
                                <Image
                                  src={project.image}
                                  alt={project.image}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                          </SwiperSlide>
                        );
                      })}
                  </Swiper>
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </motion.section>
  );
};

export default Project;
