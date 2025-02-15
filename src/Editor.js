import { useContext } from "react";
import { LoginContext } from "./Context.js";
import "./Editor.css";

export const Editor = ({
  text,
  onChangeText,
  onClickUpdate,
  onClickDelete,
}) => {
  const isLoggedIn = useContext(LoginContext);
  return (
    <div className="editor">
      <div>
        <textarea
          cols={30}
          rows={10}
          value={text}
          onChange={onChangeText}
          readOnly={!isLoggedIn}
        />
      </div>
      {isLoggedIn && (
        <div>
          <button onClick={onClickUpdate}>更新</button>
          <button onClick={onClickDelete}>削除</button>
        </div>
      )}
    </div>
  );
};
