import {BiChevronDown} from "react-icons/bi";
import Text from "@/components/core/text/text";

const ScrollForMore = () => {
  return (
    <div className="absolute flex gap-5 text-primary bottom-20">
      <BiChevronDown className="text-4xl text-primary animate-bounce" />
      <Text>Scroll for more</Text>
      <BiChevronDown className="text-4xl text-primary animate-bounce" />
    </div>
  );
};

export default ScrollForMore;