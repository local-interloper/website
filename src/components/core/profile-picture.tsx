import Image from "next/image";
import Pfp from "@assets/pfp.png";
import classNames from "@/util/classNames";

interface ProfilePictureProps {
  large?: boolean;
}

const ProfilePicture = ({large = false}: ProfilePictureProps) => {
  return (
    <div className="avatar">
      <div className={classNames(
        "mask mask-squircle shadow-xl",
        large ? "h-48" : "w-24"
      )}>
        <Image src={Pfp} alt="Profile Picture" />
      </div>
    </div>

  )
}

export default ProfilePicture;