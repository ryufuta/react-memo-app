import { useState } from "react";
import { getMemos, createMemo, updateMemo, deleteMemo } from "./storage.js";
import { Editor } from "./Editor.js";
import { MemoList } from "./MemoList.js";
import { LoginContext } from "./Context.js";
import "./App.css";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [text, setText] = useState("");

  const memos = getMemos();

  const onClickLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };

  const onClickMemo = (memo) => {
    setSelectedId(memo.id);
    setText(memo.text);
    setIsEditing(true);
  };

  const onClickAdd = () => {
    setSelectedId(null);
    setText("新規メモ");
    setIsEditing(true);
  };

  const onChangeText = (e) => {
    setText(e.target.value);
  };

  const onClickUpdate = () => {
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
      <header>
        <button onClick={onClickLogin}>
          {isLoggedIn ? "ログアウト" : "ログイン"}
        </button>
      </header>
      <LoginContext.Provider value={isLoggedIn}>
        <div className="container">
          <MemoList {...{ memos, onClickMemo, onClickAdd }} />
          {isEditing && (
            <Editor
              {...{
                text,
                onChangeText,
                onClickUpdate,
                onClickDelete,
              }}
            />
          )}
        </div>
      </LoginContext.Provider>
    </>
  );
};

export default App;
