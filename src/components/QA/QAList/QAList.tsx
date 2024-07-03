import { FC } from "react";
import QAListItem from "./QAListItem/QAListItem";
import { TypeQAListItem } from "./QAListItem/QAListItem.type";
type TypeProps = {
  data: TypeQAListItem[];
};

const QAList: FC<TypeProps> = ({ data }) => {
  return (
    <div>
      {data.map((item) => (
        <QAListItem
          answer={item.answer}
          quastion={item.quastion}
          key={item.quastion + item.id}
        />
      ))}
    </div>
  );
};

export default QAList;
