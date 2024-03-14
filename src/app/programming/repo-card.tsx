import {GitHubRepo} from "@/interfaces/github";
import {IconType} from "react-icons";
import {SiC, SiCplusplus, SiCsharp, SiGo, SiHaxe, SiJavascript, SiRust, SiTypescript} from "react-icons/si";
import Link from "next/link";
import {BiQuestionMark} from "react-icons/bi";

interface RepoCardProps {
  repo: GitHubRepo;
}

const LANG_RECORD: Record<string, IconType> = {
  "Rust": SiRust,
  "C#": SiCsharp,
  "C++": SiCplusplus,
  "C": SiC,
  "Go": SiGo,
  "Haxe": SiHaxe,
  "JavaScript": SiJavascript,
  "TypeScript": SiTypescript
};

const RepoCard = ({repo: {name, language, html_url, description}}: RepoCardProps) => {
  const LanguageIcon = LANG_RECORD[language] || BiQuestionMark;

  return (
    <Link
      className="relative card bg-base-200 p-4 w-80 h-40 lg:hover:scale-110 transition-all duration-200"
      href={html_url}
      target="_blank"
    >
      <p className="card-title">{name}</p>
      <div className="card-normal">
        {description ? (
          <p>{description}</p>
        ) : (
          <p>¯\_(ツ)_/¯</p>
        )}
      </div>
      <div className="absolute flex items-center gap-2 bottom-4 right-4">
        <p>Language:</p>
        <LanguageIcon />
      </div>
    </Link>
  );
};

export default RepoCard;

