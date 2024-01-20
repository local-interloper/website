import {IconType} from "react-icons";
import classNames from "@/util/classNames";

interface IconDisplayProps {
  Icon: IconType;
}

const IconDisplay = ({Icon}: IconDisplayProps) => {
  return (
    <div
      className="card card-bordered bg-base-200 p-2 shadow-xl"
    >
      <Icon size={60} />
    </div>
  );
};

export default IconDisplay;