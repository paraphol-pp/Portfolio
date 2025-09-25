import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";

import { BiLogoTypescript } from "react-icons/bi";

import {
  SiAdobephotoshop,
  SiFigma,
  SiAdobepremierepro,
  SiAdobeillustrator,
  SiDotnet,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { FaDatabase, FaPython, FaJava } from "react-icons/fa";

import { TbBrandCSharp } from "react-icons/tb";

const skillCategories = [
  {
    title: "Frontend Development",
    items: [
      { icon: <RiHtml5Fill />, name: "HTML 5" },
      { icon: <RiCss3Fill />, name: "CSS 3" },
      { icon: <RiTailwindCssFill />, name: "Tailwind CSS" },
      { icon: <RiJavascriptFill />, name: "JavaScript" },
      { icon: <BiLogoTypescript />, name: "TypeScript" },
      { icon: <RiReactjsFill />, name: "React.js" },
      { icon: <RiNextjsFill />, name: "Next.js" },
    ],
  },
  {
    title: "Programming & Backend",
    items: [
      { icon: <FaPython />, name: "Python" },
      { icon: <FaJava />, name: "Java" },
      { icon: <TbBrandCSharp />, name: "C#" },
      { icon: <SiDotnet />, name: ".NET" },
      { icon: <FaDatabase />, name: "SQLite" },
    ],
  },
  {
    title: "UI/UX & Design",
    items: [
      { icon: <SiFigma />, name: "Figma" },
      { icon: <SiAdobephotoshop />, name: "Photoshop" },
      { icon: <SiAdobeillustrator />, name: "Illustrator" },
      { icon: <SiAdobepremierepro />, name: "Premiere Pro" },
    ],
  },
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8 text-accent">
        Skills <span className="text-white">.</span>
      </h2>

      <div className="space-y-10">
        {skillCategories.map((category, i) => (
          <div key={i}>
            <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
            <div className="flex flex-wrap gap-6">
              {category.items.map((item, index) => (
                <TooltipProvider key={index}>
                  <Tooltip>
                    <TooltipTrigger className="w-16 h-16 rounded-full flex items-center justify-center bg-tertiary/70 group">
                      <div className="text-3xl group-hover:text-accent transition-all duration-300">
                        {item.icon}
                      </div>
                    </TooltipTrigger>
                    <TooltipContent>
                      <p className="text-lg">{item.name}</p>
                    </TooltipContent>
                  </Tooltip>
                </TooltipProvider>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
