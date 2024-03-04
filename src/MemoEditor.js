export default function MemoEditor() {
  const clickHandler = () => {
    alert('save');
  };
  const clickHandler2 = () => {
    alert('delete');
  };
  return (
    <>
      <div>
        <form>
          <textarea rows="40" cols="60" />
          <br />
          <button onClick={clickHandler}>保存</button>
          <button onClick={clickHandler2}>削除</button>
        </form>
      </div>
    </>
  );
}
