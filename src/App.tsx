import { Grid } from "@radix-ui/themes";
import NoteCard from "./Components/NoteCard";
import ListCard from "./Components/ListCard";
import NavBar from "./NavBar";
import "./index.css";
import New from "./Components/New";

function App() {
  return (
    <>
      <NavBar />
      <New />
      <Grid
        className="mainGrid"
        columns={{ initial: "1", md: "2", lg: "3" }}
        gap="5"
      >
        <NoteCard
          note={{
            id: 1,
            title: "شماره حساب های پر کاربرد",
            text: `0109633098004 مشتری اول من
0181508150007 بیمه تامین اجتماعی
0213437218004 مشتری ویژه
0100020003004 مشتری 10 ستاره
0200300400005  شرکت نمونه
 `,
            backGroundColor: "Red",
          }}
          key={10}
        />
        <NoteCard
          note={{
            id: 2,
            title: "بخشنامه های پر کاربرد",
            text: `1-1401/700/178 بخشنامه اول
1-1398/900/247 بخشنامه صدور کارت
1-1400/100/300 بخشنامه دیگر
1-1398/200/100 نحوه تحریر چک تسهیلات
1-1402/100/198 طرح صبای سپهر 2
    `,
            backGroundColor: "Blue",
          }}
          key={20}
        />
        <NoteCard
          note={{
            id: 3,
            title: "اسناد ناقص",
            text: `سند 24 تاریخ 7 دی - امضا ندارد
سند 148 تاریخ 30 دی - مهر شرکت ندارد
سند 179 تاریخ 12 بهمن - فاکتور می خواهد
سند 18 تاریخ 21 بهمن - فرم قرض
سند 19 تاریخ 25 بهمن - تاییدیه شرکت`,
            backGroundColor: "Gray",
          }}
          key={30}
        />

        <ListCard
          list={{
            id: 1,
            title: "لیست تماس با مشتریان",
            backGroundColor: "Green",
            list: [
              "تماس با مشتری 10 ستاره",
              "تماس با آقای احمدی بابت طرح تیمچه",
              "تماس با خانم جعفری بابت اوراق",
              "تماس با شرکت نمونه بابت تمدید سپرده",
            ],
          }}
          key={40}
        />
        <ListCard
          list={{
            id: 2,
            title: "لیست پیگیری",
            backGroundColor: "Pink",
            list: [
              "پیگیری رمزیاب اینترنت بانک آقای حسنی",
              "پیگیری پایانه فروش آقای سعیدی",
              "پیگیری مسدودی حساب آقای محمودی",
              "پیگیری سود سپرده خانم مهدوی",
            ],
          }}
          key={50}
        />
        <ListCard
          list={{
            id: 3,
            title: "لیست شخصی",
            backGroundColor: "Yellow",
            list: [
              "مطالعه بخشنامه طرح تیمچه",
              "طراحی فایل اکسل هزینه ها",
              "بایگانی چک های داخلی",
              "رسید چک های صندوق قرض الحسنه",
            ],
          }}
          key={60}
        />
        {/* {notes.map((note) => (
          <NoteCard note={note} key={note.id} />
        ))} */}
        {/* {lists.map((list) => (
          <ListCard list={list} key={list.id} />
        ))} */}
      </Grid>
    </>
  );
}

// export const lists: List[] = [
//   {
//     id: 1,
//     title: "لیست 1",
//     backGroundColor: "Red",
//     list: [
//       "آیتم جدید 1",
//       "آیتم جدید 2",
//       "آیتم جدید 3",
//       "آیتم جدید 4",
//       "آیتم جدید 5",
//     ],
//   },
//   {
//     id: 2,
//     title: "لیست 2",
//     backGroundColor: "Blue",
//     list: ["لیست کارهای 1", "لیست کارهای 2", "لیست کارهای 3", "لیست کارهای 4"],
//   },
//   {
//     id: 3,
//     title: "لیست 3",
//     backGroundColor: "Pink",
//     list: ["تست 1", "تست 2", "تست 3", "تست 4", "تست 5", "تست 6"],
//   },
// ];

// export const notes: Note[] = [
//   {
//     id: 1,
//     title: "شماره حساب های پر کاربرد من",
//     text: `0109633098004 مشتری اول من\n
//     0181508150007 بیمه تامین اجتماعی\n
//   0213437218004 مشتری ویژه\n
//  `,
//     backGroundColor: "Red",
//   },
//   {
//     id: 2,
//     title: "بخشنامه های پر کاربرد",
//     text: `1-1401/700/178 بخشنامه اول \n
//     1-1398/900/247 بخشنامه صدور کارت \n
//     1-1400/100/300 بخشنامه دیگر
//     `,
//     backGroundColor: "Blue",
//   },
//   {
//     id: 3,
//     title: "اسناد ناقص من",
//     text: `سند 24 تاریخ 7 بهمن - امضا ندارد \n
//     سند 179 تاریخ 12 بهمن - فاکتور می خواهد \n
//     سند 148 تاریخ 30 دی ماه - مهر شرکت ندارد`,
//     backGroundColor: "Gray",
//   },
//   {
//     id: 4,
//     title: "یادداشت 4",
//     text: "توضیحاتی در مورد یادداشت 4",
//     backGroundColor: "White",
//   },
//   {
//     id: 5,
//     title: "یادداشت 5",
//     text: "توضیحاتی در مورد یادداشت 5",
//     backGroundColor: "Pink",
//   },
//   {
//     id: 6,
//     title: "یادداشت 6",
//     text: "توضیحاتی در مورد یادداشت 6",
//     backGroundColor: "Orange",
//   },
//   {
//     id: 7,
//     title: "یادداشت 7",
//     text: "توضیحاتی در مورد یادداشت 7",
//     backGroundColor: "Green",
//   },
//   {
//     id: 8,
//     title: "یادداشت 8",
//     text: "توضیحاتی در مورد یادداشت 8",
//     backGroundColor: "Purple",
//   },
//   {
//     id: 9,
//     title: "یادداشت 9",
//     text: "توضیحاتی در مورد یادداشت 9",
//     backGroundColor: "Yellow",
//   },
// ];

export default App;
