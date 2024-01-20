import Image from "next/image";
import Pfp from "@assets/pfp.png";
import classNames from "@/util/classNames";

interface ProfilePictureProps {
  large?: boolean;
}

const ProfilePicture = ({large = false}: ProfilePictureProps) => {
  return (
    <div className="avatar">
      <div className="p-1 bg-primary mask mask-squircle">
        <div
          className={classNames(
            "mask mask-squircle shadow-xl border-primary",
            large ? "h-48" : "w-32"
          )}
        >
          <Image src={Pfp} alt="Profile Picture" />
        </div>
      </div>
    </div>

  );
};

export default ProfilePicture;