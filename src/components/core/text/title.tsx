import ClassnameProps from "@/interfaces/classname-props";
import ChildrenProps from "@/interfaces/children-props";
import classNames from "@/util/classNames";

const titleSizes: Record<Size, string> = {
  xl: "text-5xl lg:text-8xl",
  lg: "text-4xl lg:text-7xl",
  md: "text-3xl lg:text-6xl",
  sm: "text-2xl lg:text-5xl",
};

interface ITitleProps extends ClassnameProps, ChildrenProps {
  size?: Size;
  center?: boolean;
  bold?: boolean;
}

const Title = ({size = "md", center = true, bold = false, className, children}: ITitleProps) => {
  return (
    <p
      className={classNames(
        "w-full text-primary",
        center && "text-center",
        bold && "font-bold",
        titleSizes[size],
        className)
      }
    >
      {children}
    </p>
  );
};

export default Title;
