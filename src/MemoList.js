import { useLogin } from "./Context.js";
import "./MemoList.css";

export const MemoList = ({ memos, onClickMemo, onClickAdd }) => {
  const isLoggedIn = useLogin();
  return (
    <div className="memo-list">
      <ul>
        {memos.map((memo) => (
          <li key={memo.id}>
            <button
              className="memo-item"
              onClick={() => {
                onClickMemo(memo);
              }}
            >
              {memo.text.split("\n")[0]}
            </button>
          </li>
        ))}
      </ul>
      {isLoggedIn && <button onClick={onClickAdd}>+</button>}
    </div>
  );
};
