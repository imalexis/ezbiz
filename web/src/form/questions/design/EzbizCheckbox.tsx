import { DeleteOutlined } from "@ant-design/icons";
import { Checkbox } from "antd";

type Props = {
  index: number;
  option: string;
  deleteOption: (idx: number) => void;
  setOption: (idx: number, modifiedOption: string) => void;
};
export default function EzbizCheckbox({
  index,
  option,
  setOption,
  deleteOption,
}: Props) {
  return (
    <Checkbox value={index} disabled>
      <input
        type="text"
        value={option}
        onChange={(e) => {
          setOption(index, e.target.value);
        }}
      />
      <DeleteOutlined
        disabled={false}
        onClick={() => {
          deleteOption(index);
        }}
      />
    </Checkbox>
  );
}
