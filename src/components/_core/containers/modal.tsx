"use client";

import IChildrenProps from "@/interfaces/children-props";
import IClassNameProps from "@/interfaces/classname-props";
import classNames from "@/util/classNames";
import {Transition} from "@headlessui/react";

interface IModalProps extends IChildrenProps, IClassNameProps {
  show: boolean;
  fullscreen?: boolean;
}

const Modal = ({show, fullscreen, className, children}: IModalProps) => {
  return (
    <Transition
      show={show}
      enter="transition-all duration-500"
      enterFrom="bg-opacity-0"
      enterTo="bg-opacity-90"
      leave="transition-all duration-500"
      leaveFrom="bg-opacity-90"
      leaveTo="bg-opacity-0"

      className={classNames(
        "fixed top-0 left-0 w-full h-[100svh] z-40 flex justify-center items-center bg-black overflow-hidden",
        className
      )}
    >
      <Transition.Child
        enter="transition-all duration-500"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition-all duration-500"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
        className="w-full h-[100svh] flex items-center justify-center"
      >
        <div
          className={
            classNames(
              "w-full h-full bg-background p-5",
              !fullscreen && "max-w-6xl lg:max-h-[80svh] lg:rounded-xl border-2 border-primary/[0.25]"
            )
          }
        >
          {children}
        </div>
      </Transition.Child>
    </Transition>
  );
};

export default Modal;