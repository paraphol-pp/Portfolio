import CountUp from "react-countup";

const Stats = () => {
  return (
    <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-35">

      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={4} duration={5} delay={2.5} className="่block" />
          <div>+</div>
        </div>

        <span>
          Year <br /> Experience
        </span>

      </div>

      <div className="flex gap-4">
        <div className="text-5xl font-bold text-accent flex">
          <CountUp end={10} duration={5} delay={2} className="block w-[60px]" />
          <div>+</div>
        </div>

        <span>
          Personal <br /> Projects
        </span>

      </div>
    </div>
  );
};

export default Stats;
