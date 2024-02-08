import {
  PlusIcon,
  MinusIcon,
  ArrowUpIcon,
  ArrowDownIcon,
} from "@radix-ui/react-icons";
import { Flex, IconButton } from "@radix-ui/themes";
import { useRef, useState } from "react";
import "./EditNote.css";
import ClolorPicker from "./ClolorPicker";
import { List } from "./Types";
import { getColorValue } from "./BackgroundColor";
import { produce } from "immer";

const EditList = ({ List }: { List: List }) => {
  const [list, setList] = useState(List.list);
  const [backColor, setBackColor] = useState<string>(List.backGroundColor);

  const defaultAddItemText = "افزودن آیتم جدید";
  const defaultTitleText = "عنوان لیست";
  const titleInp = useRef<HTMLInputElement>(null);
  const newItemInp = useRef<HTMLInputElement>(null);

  return (
    <Flex
      key={"ListFlex" + List.id}
      direction="column"
      gap="3"
      className="FormRoot ListRoot"
      style={{ backgroundColor: getColorValue(backColor) }}
    >
      <Flex
        gap="3"
        direction="row"
        key={"ListTitleRow" + List.id}
        className="ListTitleRow"
      >
        <label className="ListTitleLabel" key={"ListTitleLabel" + List.id}>
          عنوان
        </label>
        <input
          key={"Title" + List.id}
          id="title"
          ref={titleInp}
          className="ListTitleInput"
          defaultValue={List.title || defaultTitleText}
          onFocus={(inp) => {
            if (inp.target.value == defaultTitleText) inp.target.value = "";
          }}
          onBlur={(inp) => {
            if (isEmpty(inp.target.value))
              inp.target.value = List.title || defaultTitleText;
          }}
        />
      </Flex>
      <Flex
        direction="row"
        gap="7"
        key={"AddItemFlex" + List.id}
        className="AddItemFlex"
      >
        <input
          key={"NewItemList" + List.id}
          type="text"
          id="newItem"
          ref={newItemInp}
          className="ListItemInput"
          defaultValue={defaultAddItemText}
          onFocus={(inp) => {
            if (inp.target.value == defaultAddItemText) inp.target.value = "";
          }}
          onBlur={(inp) => {
            if (isEmpty(inp.target.value))
              inp.target.value = defaultAddItemText;
          }}
        />
        <IconButton
          key={"AddNewItemButton" + List.id}
          className="IconButton AddNewItemButton"
          onClick={() => {
            if (newItemInp.current?.value && isEmpty(newItemInp.current?.value))
              return null;

            setList(addItem(list, newItemInp.current!.value));
            newItemInp.current!.value = defaultAddItemText;
          }}
        >
          <PlusIcon />
        </IconButton>
      </Flex>
      <Flex direction="column" gap="3" key={"ListItemsFlex" + List.id}>
        {list.map((item, index) => (
          <Flex direction="row" gap="5" key={"ItemRow" + index}>
            <IconButton
              key={"DeleteItem" + index}
              className="IconButton ListRemoveButton"
              color="red"
              onClick={() => {
                setList(deleteItem(list, index));
              }}
            >
              <MinusIcon />
            </IconButton>
            <input
              key={"ListItemText" + index}
              className="ListItemText"
              defaultValue={item}
              onChange={(e) => {
                setList(editItem(list, index, e.target.value));
              }}
            />
            <Flex
              direction="row"
              gap="3"
              className="ListArrowButtons"
              key={"ListArrowButtons" + index}
            >
              <IconButton
                key={"ArrowUp" + index}
                className="IconButton"
                onClick={() => {
                  setList(swapIndex(list, index, index - 1));
                }}
              >
                <ArrowUpIcon />
              </IconButton>

              <IconButton
                key={"ArrowDown" + index}
                className="IconButton"
                onClick={() => {
                  setList(swapIndex(list, index, index + 1));
                }}
              >
                <ArrowDownIcon />
              </IconButton>
            </Flex>
          </Flex>
        ))}
      </Flex>
      <div className="colorPickerDiv">
        <ClolorPicker onColorChoose={setBackColor} />
      </div>
      <Flex direction="row" justify="between" className="SubmitButtons">
        <button className="submitButton">ثبت تغییرات</button>
        <button className="submitButton deleteListButton">حذف لیست</button>
      </Flex>
    </Flex>
  );
};

const swapIndex = (list: string[], index1: number, index2: number) => {
  // no swap
  if (index1 === index2) return list;
  // invalid index
  const lastIndex = list.length - 1;
  if (index1 < 0 || index2 < 0 || index1 > lastIndex || index2 > lastIndex)
    return list;
  // swap elements
  return produce(list, (draft) => {
    [draft[index1], draft[index2]] = [draft[index2], draft[index1]];
  });
};

const addItem = (list: string[], newItem: string) => {
  return produce(list, (draft) => {
    draft.push(newItem);
  });
};

const deleteItem = (list: string[], index: number) => {
  return produce(list, (draft) => {
    draft.splice(index, 1);
  });
};

const editItem = (list: string[], index: number, text: string) => {
  return produce(list, (draft) => {
    draft[index] = text;
  });
};

const isEmpty = (inp: string) => {
  return inp.replace(/\s/g, "") == "";
};

export default EditList;
