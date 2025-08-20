import type { PropsWithChildren } from "react";
import { useNavigate } from "react-router";

interface Props extends PropsWithChildren {
  url: string;
}

const LinkButton = ({ children, url }: Props) => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    navigate(url);
  };

  return (
    <button className="button" onClick={onClickHandler}>
      {children}
    </button>
  );
};

export default LinkButton;
