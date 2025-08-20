import type { PropsWithChildren, ReactNode } from "react";
import type { IconType } from "react-icons";
import { HiX } from "react-icons/hi";
import { SiSteam } from "react-icons/si";
import { cn } from "~/lib/util/cn";

interface Props extends PropsWithChildren {
  title?: string;
  Icon?: IconType;
  hideCloseButton?: boolean;
  className?: string;
  frameClassNames?: string;
}

const VguiWindow = ({
  children,
  title = "",
  hideCloseButton = false,
  Icon = SiSteam,
  className,
  frameClassNames,
}: Props) => {
  return (
      <article className={cn("flex flex-col gap-sm frame h-fit w-fit", className)}>
        <article className="flex justify-between items-center p-1 pl-2">
          <article className="flex items-center gap-sm">
            {Icon && <Icon className="text-xl" />}
            <span className="text-lg">{title}</span>
          </article>
          {!hideCloseButton && (
            <article className="frame">
              <HiX className="text-xl" />
            </article>
          )}
        </article>
        <article
          className={cn("flex flex-col w-full gap-sm p-2", frameClassNames)}
        >
          {children}
        </article>
      </article>
  );
};

export default VguiWindow;
