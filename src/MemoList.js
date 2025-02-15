import "./MemoList.css";

export const MemoList = ({ memos, onClickMemo, onClickAdd }) => {
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
      <button onClick={onClickAdd}>+</button>
    </div>
  );
};
