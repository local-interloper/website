import { FiExternalLink } from "react-icons/fi";

interface Props {
  label?: string;
  url: string;
}

const ExternalLink = ({ label, url }: Props) => (
  <a href={url} target="_blank" className="flex gap-1 items-center link">
    <span>{label || url}</span>
    <FiExternalLink className="text-sm" />
  </a>
);

export default ExternalLink;
