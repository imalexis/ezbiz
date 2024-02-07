import { Radio } from "antd";

type Props = {
  index: number;
  option: string;
  setOption: (idx: number, modifiedOption: string) => void;
};
export function EZBizRadio({ index, option, setOption }: Props) {
  return (
    <Radio value={index} disabled>
      <input
        type="text"
        value={option}
        onChange={(e) => {
          setOption(index, e.target.value);
        }}
      />
    </Radio>
  );
}
