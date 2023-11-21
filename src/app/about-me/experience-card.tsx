import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import {IExperience} from "@/data/experience";
import ExperienceModal from "@/app/about-me/experience-modal";
import classNames from "@/util/classNames";

interface IExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard = ({experience}: IExperienceCardProps) => {
  const {
    title,
    year,
    shortDescription
  } = experience;

  return (
    <div className="flex flex-col gap-5 p-5 w-full rounded-xl bg-background shadow border-2 border-primary/[0.25]">
      <div className="flex justify-between">
        <Title center={false}>{title}</Title>
        <text>({year})</text>
      </div>

      <Text className="pl-5 mb-auto" flow center={false}>{shortDescription}</Text>

      <ExperienceModal title={title} />
    </div>
  );
};

export default ExperienceCard;