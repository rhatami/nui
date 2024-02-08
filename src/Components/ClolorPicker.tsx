import { Flex } from "@radix-ui/themes";
import BackgroundColor from "./BackgroundColor";
import "./ColorPicker.css";

const ClolorPicker = ({
  onColorChoose,
}: {
  onColorChoose: (color: string) => void;
}) => {
  return (
    <Flex direction="row" gap="1" className="ColorPicker" key="ColorPicker">
      {BackgroundColor.map((color) => (
        <span
          key={color.label}
          className="colorPickerItem"
          style={{ backgroundColor: color.value }}
          onClick={() => onColorChoose(color.label)}
        />
      ))}
    </Flex>
  );
};

export default ClolorPicker;
