import "./Editor.css";

export const Editor = ({
  text,
  onChangeText,
  onClickUpdate,
  onClickDelete,
}) => {
  return (
    <div className="editor">
      <div>
        <textarea cols={30} rows={10} value={text} onChange={onChangeText} />
      </div>
      <div>
        <button onClick={onClickUpdate}>更新</button>
        <button onClick={onClickDelete}>削除</button>
      </div>
    </div>
  );
};
