import { useState } from 'react';

export default function MemoEditor({ selectedMemo, deleteMemo, saveMemo }) {
  const [content, setContent] = useState(selectedMemo.content);

  const complete = (id) => {
    deleteMemo(selectedMemo.id);
  };

  const saveClickHandler = () => {
    saveMemo(selectedMemo.id, content);
  };

  const handleChange = (event) => {
    setContent(event.target.value);
  };

  return (
    <>
      <div>
        <form>
          <textarea
            rows="40"
            cols="60"
            value={content}
            onChange={handleChange}
          />
          <br />
          <button
            key={selectedMemo.id}
            onClick={() => saveClickHandler(selectedMemo.id)}
          >
            保存
          </button>
          <button
            key={selectedMemo.id}
            onClick={() => complete(selectedMemo.id)}
          >
            削除
          </button>
        </form>
      </div>
    </>
  );
}
