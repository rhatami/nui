import { Card, Flex, Heading } from "@radix-ui/themes";
import BackgroundColor from "./BackgroundColor";
import { List } from "./Types";
import EditList from "./EditList";
import Popup from "./Popup";

const ListCard = ({ list }: { list: List }) => {
  const backColor = BackgroundColor.find(
    (c) => c.label == list.backGroundColor
  )!.value;

  return (
    <Card
      style={{
        backgroundColor: backColor,
      }}
      className="listCard"
      key="listCard"
    >
      <Flex direction="column" justify="between" className="listCardFlex">
        <Flex direction="column" gap="3">
          <Heading className="Heading" size="4">
            {list.title}
          </Heading>
          <ul key={"ItemsList" + list.id}>
            {list.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Flex>
        <Popup>
          <EditList List={list} />
        </Popup>
      </Flex>
    </Card>
  );
};

export default ListCard;
