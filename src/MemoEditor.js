import { useState, useEffect } from 'react';
import { useAuthentication } from './useAuth';

export default function MemoEditor({ selectedMemo, deleteMemo, saveMemo }) {
  const [content, setContent] = useState(selectedMemo.content);

  useEffect(() => {
    setContent(selectedMemo.content);
  }, [selectedMemo]);

  const handleClickDelete = () => {
    deleteMemo(selectedMemo.id);
  };

  const handleClickSave = () => {
    saveMemo(selectedMemo.id, content);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };
  const { isLoggedIn } = useAuthentication();

  return (
    <div>
      <form>
        <textarea rows="40" cols="60" value={content} onChange={handleChange} />
        <br />
        {isLoggedIn && <button onClick={handleClickSave}>保存</button>}
        {isLoggedIn && <button onClick={handleClickDelete}>削除</button>}
      </form>
    </div>
  );
}
