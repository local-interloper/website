import Title from "@/components/core/text/title";
import {EXPERIENCE} from "@/data/experience";
import ExperienceCard from "@/app/about-me/experience-card";

const Experience = () => {
  return (
    <div className="flex flex-col w-full gap-10 px-5 pt-20">
      <Title size="lg" bold>Experience</Title>
      <div className="flex flex-col gap-2">
        {EXPERIENCE.map((experience, i) => (
          <ExperienceCard key={i} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default Experience;