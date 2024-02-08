import { Flex } from "@radix-ui/themes";
import NewNote from "./NewNote";
import NewList from "./NewList";
import "./New.css";

const New = () => {
  return (
    <Flex direction="row" gap="5" justify="center" className="NewNoteListFlex">
      <NewNote />
      <NewList />
    </Flex>
  );
};

export default New;
