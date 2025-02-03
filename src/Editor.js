export const Editor = ({ text, onChangeText, onClickEdit, onClickDelete }) => {
  return (
    <>
      <textarea value={text} onChange={onChangeText} />
      <button onClick={onClickEdit}>編集</button>
      <button onClick={onClickDelete}>削除</button>
    </>
  );
};
