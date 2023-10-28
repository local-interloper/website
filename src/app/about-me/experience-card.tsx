import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import {IExperience} from "@/data/experience";

interface IExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard = ({experience: {title, year, description, techStack}}: IExperienceCardProps) => {
  return (
    <div className="flex flex-col gap-5 p-5 w-full rounded-xl bg-background-light shadow">
      <div className="flex justify-between">
        <Title center={false}>{title}</Title>
        <text>({year})</text>
      </div>

      <Text className="pl-5" flow>{description}</Text>

      <div className="flex flex-wrap w-full">
        {techStack.map((Icon, i) => (
          <div key={i} className="p-2">
            <Icon size={20} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceCard;