import {
  BiLogoFacebook,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoGithub,
} from "react-icons/bi";

const socials = [
  {
    icon: <BiLogoFacebook />,
    path: "https://www.facebook.com/paraphol.puangpee.2024",
  },
  {
    icon: <BiLogoInstagram />,
    path: "https://www.instagram.com/zeppelin__p/?theme=dark",
  },
  {
    icon: <BiLogoLinkedin />,
    path: "https://www.linkedin.com/in/paraphol-puangpee-65a83b384",
  },
  {
    icon: <BiLogoGithub />,
    path: "https://github.com/paraphol-pp",
  },
];

const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <a
            key={index}
            href={item.path}
            target="_blank"
            rel="noopener noreferrer"
            className={iconStyles}
          >
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
