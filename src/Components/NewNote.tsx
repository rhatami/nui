import Pop from "reactjs-popup";
import "./Popup.css";
import { Pencil2Icon } from "@radix-ui/react-icons";
import EditNote from "./EditNote";
import { Flex } from "@radix-ui/themes";

const NewNote = () => {
  return (
    <Pop
      key="Popup"
      trigger={
        <Flex className="NewNoteFlex" direction="row" gap="3">
          <button className="IconButton EditButton">
            <Pencil2Icon />
          </button>
          <p>یادداشت جدید</p>
        </Flex>
      }
      className="Popup NewNoteIcon"
    >
      <EditNote
        note={{ id: 0, title: "", text: "", backGroundColor: "Green" }}
      />
    </Pop>
  );
};

export default NewNote;
