import React from 'react';
import MemoList from './MemoList';
import MemoEditor from './MemoEditor';
import { useState } from 'react';

const MEMOS = [
  {
    content: 'メモ1',
    id: 1
  },
  {
    content: 'メモ2',
    id: 2
  },
  {
    content: 'メモ3',
    id: 3
  }
];

export default function App() {
  const [memos, setMemos] = useState(MEMOS);
  const [selectedMemo, setSelectedMemo] = useState(null);

  const selectMemo = (id) => {
    const memo = memos.find((memo) => memo.id === id);
    setSelectedMemo(memo);
  };

  const deleteMemo = (id) => {
    const newMemos = memos.filter((memo) => {
      return memo.id !== id;
    });

    setMemos(newMemos);
  };

  const saveMemo = (id, newContent) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === id ? { ...memo, content: newContent } : memo
    );
    setMemos(updatedMemos);
  };

  const addNewMemo = () => {
    const newMemo = {
      id: Date.now(),
      content: ''
    };
    setMemos([...memos, newMemo]);
    setSelectedMemo(newMemo);
  };

  return (
    <>
      <h1>一覧</h1>
      <MemoList memos={memos} selectMemo={selectMemo} addNewMemo={addNewMemo} />
      <h1>編集</h1>
      {selectedMemo && (
        <MemoEditor
          deleteMemo={deleteMemo}
          saveMemo={saveMemo}
          selectedMemo={selectedMemo}
        />
      )}
    </>
  );
}
