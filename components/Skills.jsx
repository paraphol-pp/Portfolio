import {
  RiReactjsFill,
  RiNextjsFill,
  RiHtml5Fill,
  RiCss3Fill,
  RiTailwindCssFill,
  RiJavascriptFill,
} from "react-icons/ri";

import { 
  BiDatabase
} from "react-icons/bi";

import {
  SiAdobephotoshop,
  SiFigma,
  SiAdobepremierepro,
  SiAdobeillustrator,
} from "react-icons/si";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";

import { FaDatabase } from "react-icons/fa";

const skills = [
  {
    icon: <RiReactjsFill />,
    name: "React.js",
  },
  {
    icon: <RiNextjsFill />,
    name: "Next.js",
  },
  {
    icon: <RiHtml5Fill />,
    name: "HTML 5",
  },
  {
    icon: <RiCss3Fill />,
    name: "CSS 3",
  },
  {
    icon: <RiJavascriptFill />,
    name: "Javascript",
  },

  {
    icon: <RiTailwindCssFill />,
    name: "Tailwind CSS",
  },
  
  {
    icon: <SiFigma />,
    name: "Figma",
  },
  {
    icon: <SiAdobephotoshop />,
    name: "Photoshop",
  },
  {
    icon: <SiAdobepremierepro />,
    name: "Premiere Pro",
  },
  {
    icon: <SiAdobeillustrator />,
    name: "Illustrator",
  },
  {
    icon: <FaDatabase />,
    name: "SQLite",
  },
  
];

const Skills = () => {
  return (
    <div>
      <h2 className="h2 mb-8">
        My <span className="text-accent">Skills</span>
      </h2>
      <div className="flex flex-wrap gap-6 max-w-sm xl:max-w-none">
        {skills.map((item, index) => {
          return (
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
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
