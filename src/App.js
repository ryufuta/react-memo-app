import { useState } from "react";

const getMemos = () => JSON.parse(localStorage.getItem("memos")) ?? [];

const createMemo = (memos, text) => {
  const lastId = parseInt(localStorage.getItem("lastId"));
  const id = Number.isNaN(lastId) ? 0 : lastId + 1;
  const newMemos = [...memos, { id, text }];
  localStorage.setItem("memos", JSON.stringify(newMemos));
  localStorage.setItem("lastId", String(id));
};

const updateMemo = (memos, id, text) => {
  const newMemos = memos.map((memo) => (memo.id === id ? { id, text } : memo));
  localStorage.setItem("memos", JSON.stringify(newMemos));
};

const deleteMemo = (memos, id) => {
  const newMemos = memos.filter((memo) => memo.id !== id);
  localStorage.setItem("memos", JSON.stringify(newMemos));
};

const App = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState("");

  const memos = getMemos();

  const onClickMemo = (memo) => {
    setSelectedId(memo.id);
    setText(memo.text);
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
    if (selectedId === null) {
      createMemo(memos, text);
    } else {
      updateMemo(memos, selectedId, text);
    }
    setSelectedId(null);
    setIsEditing(false);
  };

  const onClickDelete = () => {
    deleteMemo(memos, selectedId);
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
              {memo.text.split("\n")[0]}
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
