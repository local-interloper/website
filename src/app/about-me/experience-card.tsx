import {IExperience} from "@/data/experience";

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
          <div>
            <p>Technologies used:</p>
            <div className="flex gap-1 w-full justify-center">
              {techStack.map((Icon, i) => (
                <Icon key={i} />
              ))}
            </div>
          </div>
          <div>
            <p>Client:</p>
            {client ? (
              <p>{client.name}</p>
            ) : (
              <p>Unspecified</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;