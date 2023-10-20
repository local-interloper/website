import Text from "@/components/_core/text/text";

interface IListProps {
  list: string[];
}

const List = ({list}: IListProps) => {
  return (
    <ul>
      {list.map((text, i) => (
        <li className="list-disc" key={i}>
          <Text>{text}</Text>
        </li>
      ))}
    </ul>
  );
};

export default List;