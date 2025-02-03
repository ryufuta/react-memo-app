export const getMemos = () => JSON.parse(localStorage.getItem("memos")) ?? [];

export const createMemo = (memos, text) => {
  const lastId = parseInt(localStorage.getItem("lastId"));
  const id = Number.isNaN(lastId) ? 0 : lastId + 1;
  const newMemos = [...memos, { id, text }];
  localStorage.setItem("memos", JSON.stringify(newMemos));
  localStorage.setItem("lastId", String(id));
};

export const updateMemo = (memos, id, text) => {
  const newMemos = memos.map((memo) => (memo.id === id ? { id, text } : memo));
  localStorage.setItem("memos", JSON.stringify(newMemos));
};

export const deleteMemo = (memos, id) => {
  const newMemos = memos.filter((memo) => memo.id !== id);
  localStorage.setItem("memos", JSON.stringify(newMemos));
};
