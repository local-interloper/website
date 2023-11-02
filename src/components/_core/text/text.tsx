import ClassnameProps from "@/interfaces/classname-props";
import ChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";
import {HorizontalAlignment} from "@/types/alignment";

interface ITextProps extends ClassnameProps, ChildrenProps {
  bold?: boolean;
  center?: boolean;
  flow?: boolean;
}

const Text = ({bold = false, center = true, flow = false, className, children}: ITextProps) => {
  return (
    <p
      className={
        classNames(
          "text-lg lg:text-xl",
          !flow && "max-w-xl",
          bold && "font-bold",
          center && "text-center",
          className
        )
      }
    >
      {children}
    </p>
  );
};

export default Text;