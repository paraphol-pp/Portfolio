const journey = [
  {
    years: "2022 - Present",
    role: "Computer Science",
    institution: "Bangkok University",
    grade: "> GPA 3.42",
  },
  {
    years: "2018 - 2021",
    role: "Math-Science Program",
    institution: "Selaphum Pittayakom School",
    grade: "",
  },
];

const Journey = () => {
  return (
    <div className="flex flex-col">
      <h2 className="h2 mb-8 text-accent">
        Education <span className="text-white">.</span>
        {/* <span className="text-accent">Experience</span> */}
      </h2>
      {journey.map((item, index) => {
        const { institution, role, years, grade } = item;
        return (
          <div key={index} className="flex items-center gap-12 w-full">
            {/* bullets */}
            <div className="flex flex-col w-max justify-center items-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
              <div className="w-[1px] h-[180px] bg-white/10"></div>
            </div>
            {/* text */}
            <div className="max-w-[500px]">
              <p className="mb-6 text-white/50">{years}</p>
              <p className="h4 mb-2">{role}</p>
              <p className="text-lg text-white/50">{institution}</p>
              <p className="text-lg text-white">{grade}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Journey;
