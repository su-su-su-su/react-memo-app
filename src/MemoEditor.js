import { useState, useEffect } from 'react';

export default function MemoEditor({ selectedMemo, deleteMemo, saveMemo }) {
  const [content, setContent] = useState(selectedMemo.content);

  useEffect(() => {
    setContent(selectedMemo.content);
  }, [selectedMemo]);

  const deleteSelectedMemo = () => {
    deleteMemo(selectedMemo.id);
  };

  const saveClickHandler = () => {
    saveMemo(selectedMemo.id, content);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <div>
      <form>
        <textarea rows="40" cols="60" value={content} onChange={handleChange} />
        <br />
        <button onClick={() => saveClickHandler(selectedMemo.id)}>保存</button>
        <button onClick={() => deleteSelectedMemo(selectedMemo.id)}>
          削除
        </button>
      </form>
    </div>
  );
}
