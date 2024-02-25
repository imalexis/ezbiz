import { DeleteOutlined } from "@ant-design/icons";
import { Radio } from "antd";

type Props = {
  index: number;
  option: string;
  deleteOption: (idx: number) => void;
  setOption: (idx: number, modifiedOption: string) => void;
};
export function EZBizRadio({ index, option, setOption, deleteOption }: Props) {
  return (
    <Radio value={index} disabled>
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
    </Radio>
  );
}
