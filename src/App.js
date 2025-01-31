import { useState } from "react";

const MEMOS = [
  { id: 0, title: "今日やること", body: "メモアプリ実装\n散歩" },
  { id: 1, title: "明日やること", body: "メモアプリテスト" },
];
let lastId = 1;

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [memos, setMemos] = useState(MEMOS);
  const [text, setText] = useState("");

  const onClickMemo = (memo) => {
    setSelectedId(memo.id);
    setText(`${memo.title}\n${memo.body}`);
    setIsEditing(true);
  };

  const onClickAdd = () => {
    setText("新規メモ");
    setIsEditing(true);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickEdit = () => {
    const [title, ...bodyRows] = text.split("\n");
    const body = bodyRows.join("\n");
    let newMemos;
    if (selectedId === null) {
      lastId++;
      newMemos = [...memos, { id: lastId, title, body }];
    } else {
      newMemos = memos.map((memo) =>
        memo.id === selectedId ? { id: memo.id, title, body } : memo,
      );
    }
    setMemos(newMemos);
    setSelectedId(null);
    setIsEditing(false);
  };

  const onClickDelete = () => {
    const newMemos = memos.filter((memo) => memo.id !== selectedId);
    setMemos(newMemos);
    setSelectedId(null);
    setIsEditing(false);
  };

  return (
    <>
      <MemoList {...{ memos, onClickMemo, onClickAdd }} />
      {isEditing && (
        <Editor {...{ text, onChangeText, onClickEdit, onClickDelete }} />
      )}
    </>
  );
};

const MemoList = ({ memos, onClickMemo, onClickAdd }) => {
  return (
    <>
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <a
              onClick={() => {
                onClickMemo(memo);
              }}
            >
              {memo.title}
            </a>
          </li>
        ))}
      </ul>
      <button onClick={onClickAdd}>+</button>
    </>
  );
};

const Editor = ({ text, onChangeText, onClickEdit, onClickDelete }) => {
  return (
    <>
      <textarea value={text} onChange={onChangeText} />
      <button onClick={onClickEdit}>編集</button>
      <button onClick={onClickDelete}>削除</button>
    </>
  );
};

export default App;
