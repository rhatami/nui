import { Card, Flex, Heading, TextArea } from "@radix-ui/themes";
import BackgroundColor from "./BackgroundColor";
import { Note } from "./Types";
import EditNote from "./EditNote";
import Popup from "./Popup";

const NoteCard = ({ note }: { note: Note }) => {
  const backColor = BackgroundColor.find(
    (c) => c.label == note.backGroundColor
  )!.value;

  return (
    <Card
      style={{
        backgroundColor: backColor,
      }}
      className="noteCard"
    >
      <Flex
        direction="column"
        gap="3"
        justify="between"
        className="noteCardFlex"
      >
        <Flex direction="column" gap="3">
          <Heading className="Heading" size="4">
            {note.title}
          </Heading>
          <TextArea
            id={"TextArea" + note.id}
            readOnly
            rows={6}
            className="NoteCardTextArea"
            value={note.text}
          />
        </Flex>
        <Popup>
          <EditNote note={note} />
        </Popup>
      </Flex>
    </Card>
  );
};

export default NoteCard;
