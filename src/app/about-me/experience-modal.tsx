"use client";

import Button from "@/components/_core/button";
import Modal from "@/components/_core/containers/modal";
import {HiX} from "react-icons/hi";
import {useState} from "react";
import {EXPERIENCE} from "@/data/experience";
import Title from "@/components/_core/text/title";
import Text from "@/components/_core/text/text";
import LinkButton from "@/components/_core/link-button";
import Link from "next/link";
import {TbWorld} from "react-icons/tb";

interface IExperienceModalProps {
  title: string;
}

const ExperienceModal = ({title: entryTitle}: IExperienceModalProps) => {
  const [show, setShow] = useState<boolean>(false);

  // TODO: This feels wrong, I should either give each entry a unique identifier or fetch em via an index
  const {
    title,
    description,
    techStack,
    client
  } = EXPERIENCE.find((e) => e.title == entryTitle)!;

  return (
    <>
      <button
        className="p-2 rounded-xl border-2 border-primary hover:bg-primary transition-all duration-200 w-20"
        onClick={() => setShow(true)}
      >
        <Text flow>More</Text>
      </button>
      <Modal show={show}>
        <div className="flex flex-col w-full h-full">
          <div className="flex justify-end w-full z-30">
            <div className="cursor-pointer p-2" onClick={() => setShow(false)}>
              <HiX className="text-xl" />
            </div>
          </div>
          <div className="flex flex-col items-center w-full h-full overflow-y-scroll gap-10">
            <Title>{title}</Title>
            <Text flow>{description}</Text>
            <div className="flex w-full justify-between px-20 mt-auto">
              {client && (
                <div>
                  <Text bold>This work was done for:</Text>
                  <div className="flex items-center gap-2">
                    <Text>{client.name}</Text>
                    {client.url && (
                      <Link href={client.url} target="_blank">
                        <TbWorld className="text-xl" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
              <div className="flex flex-col gap-2">
                <Text bold>Tools and technologies used:</Text>
                <div className="flex justify-center gap-2">
                  {techStack.map((Icon, i) => (
                    <Icon key={i} className="text-2xl" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ExperienceModal;