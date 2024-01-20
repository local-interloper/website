import {BiChevronDown} from "react-icons/bi";
import Text from "@/components/core/text/text";

const ThereIsMore = () => {
  return (
    <div className="absolute flex gap-5 text-primary bottom-20">
      <BiChevronDown className="text-4xl text-primary animate-bounce" />
      <Text>There is more</Text>
      <BiChevronDown className="text-4xl text-primary animate-bounce" />
    </div>
  );
};

export default ThereIsMore;