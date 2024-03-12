export default function MemoList({ memos, selectMemo, addNewMemo }) {
  const handleSelectMemo = (id) => {
    selectMemo(id);
  };

  function getFirstLine(content) {
    return content.split('\n')[0];
  }

  return (
    <div>
      {memos.map((memo) => {
        return (
          <div key={memo.id}>
            <span onClick={() => handleSelectMemo(memo.id)}>
              {getFirstLine(memo.content)}
            </span>
          </div>
        );
      })}
      <button onClick={addNewMemo}>+</button>
    </div>
  );
}
