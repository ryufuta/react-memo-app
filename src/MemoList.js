export const MemoList = ({ memos, onClickMemo, onClickAdd }) => {
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
