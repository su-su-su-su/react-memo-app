export default function MemoList({ memos, selectMemo, addNewMemo }) {
  const cc = (id) => {
    selectMemo(id);
  };

  return (
    <div>
      {memos.map((memo) => {
        return (
          <div key={memo.id}>
            <span onClick={() => cc(memo.id)}>{memo.content}</span>
          </div>
        );
      })}
      <button onClick={addNewMemo}>+</button>
    </div>
  );
}
