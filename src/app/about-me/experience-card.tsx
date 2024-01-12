import {IExperience} from "@/data/experience";
import Link from "next/link";
import {TbWorld} from "react-icons/tb";

interface IExperienceCardProps {
  experience: IExperience;
}

const ExperienceCard = ({experience}: IExperienceCardProps) => {
  const {
    title,
    year,
    description,
    techStack,
    client
  } = experience;

  return (
    <div className="collapse bg-base-200">
      <input type="checkbox" />
      <div className="collapse-title text-xl font-medium">
        <div className="flex justify-between w-full">
          <p>{title}</p>
          <p>({year})</p>
        </div>
      </div>
      <div className="collapse-content bg-base-200/50">
        <p>{description}</p>

        <div className="flex justify-between w-full mt-5 text-center">
          <div className="flex flex-col gap-1">
            <p>Technologies used:</p>
            <div className="flex gap-2 w-full justify-center">
              {techStack.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </div>
          </div>
          {client && (
            <div>
              <p>Client:</p>
              <div className="flex gap-1 items-center">
                <p>{client.name}</p>
                {client.url && (
                  <Link href={client.url}>
                    <TbWorld />
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
    ;
};

export default ExperienceCard;