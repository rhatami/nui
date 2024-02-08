import * as Form from "@radix-ui/react-form";
import "./EditNote.css";
import { Note } from "./Types";
import ClolorPicker from "./ClolorPicker";
import { TextArea } from "@radix-ui/themes";
import { useState } from "react";
import { getColorValue } from "./BackgroundColor";

const EditNote = ({ note }: { note: Note }) => {
  const [backColor, setBackColor] = useState<string>(note.backGroundColor);

  return (
    <Form.Root
      className="FormRoot EditNoteRoot"
      style={{ backgroundColor: getColorValue(backColor) }}
    >
      <Form.Field className="FormField" name="title">
        <div className="FormDiv">
          <Form.Label className="FormLabel">عنوان</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            لطفا عنوان را وارد نمایید.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <input className="TitleInput" required defaultValue={note.title} />
        </Form.Control>
      </Form.Field>
      <Form.Field className="FormField" name="text">
        <div className="FormDiv">
          <Form.Label className="FormLabel">متن</Form.Label>
          <Form.Message className="FormMessage" match="valueMissing">
            لطفا متن را وارد نمایید.
          </Form.Message>
        </div>
        <Form.Control asChild>
          <TextArea
            rows={7}
            cols={20}
            className="TextArea"
            required
            defaultValue={note.text}
          />
        </Form.Control>
      </Form.Field>
      <div className="colorPickerDiv">
        <ClolorPicker onColorChoose={setBackColor} />
      </div>
      <Form.Submit className="submitButton">ثبت تغییرات</Form.Submit>
    </Form.Root>
  );
};

export default EditNote;
