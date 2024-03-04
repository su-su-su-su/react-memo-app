import React from 'react';
import MemoList from './MemoList';
import MemoEditor from './MemoEditor';

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
  return (
    <>
      <h1>一覧</h1>
      <MemoList memos={MEMOS} />
      <h1>編集</h1>
      <MemoEditor />
    </>
  );
}
