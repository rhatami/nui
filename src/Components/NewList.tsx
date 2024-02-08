import Pop from "reactjs-popup";
import "./Popup.css";
import { ListBulletIcon } from "@radix-ui/react-icons";
import EditList from "./EditList";
import { Flex } from "@radix-ui/themes";

const NewList = () => {
  return (
    <Pop
      key="Popup"
      trigger={
        <Flex className="NewListFlex" direction="row" gap="3">
          <button className="IconButton EditButton">
            <ListBulletIcon />
          </button>
          <p>لیست جدید</p>
        </Flex>
      }
      className="Popup NewListIcon"
    >
      <EditList
        List={{ id: 0, title: "", list: [], backGroundColor: "Green" }}
      />
    </Pop>
  );
};

export default NewList;
