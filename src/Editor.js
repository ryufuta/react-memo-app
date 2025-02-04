export const Editor = ({
  text,
  onChangeText,
  onClickUpdate,
  onClickDelete,
}) => {
  return (
    <>
      <textarea value={text} onChange={onChangeText} />
      <button onClick={onClickUpdate}>更新</button>
      <button onClick={onClickDelete}>削除</button>
    </>
  );
};
