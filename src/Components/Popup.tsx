import Pop from "reactjs-popup";
import "./Popup.css";
import { Pencil1Icon } from "@radix-ui/react-icons";
import { PropsWithChildren } from "react";

const Popup = ({ children }: PropsWithChildren) => {
  return (
    <Pop
      key="Popup"
      trigger={
        <button className="IconButton EditButton">
          <Pencil1Icon />
        </button>
      }
      className="Popup"
    >
      {children}
    </Pop>
  );
};

export default Popup;
