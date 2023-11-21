import {IconType} from "react-icons";
import classNames from "@/util/classNames";

interface IconDisplayProps {
  Icon: IconType;
}

const IconDisplay = ({Icon}: IconDisplayProps) => {
  return (
    <div
      className={classNames(
        "flex items-center justify-center flex-col w-24 h-24 bg-background shadow rounded-xl",
        "border-2 border-primary/[0.25]"
      )}
    >
      <Icon size={40} />
    </div>
  );
};

export default IconDisplay;