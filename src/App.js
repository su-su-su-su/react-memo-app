import React from 'react';
import MemoList from './MemoList';
import MemoEditor from './MemoEditor';
import { useState } from 'react';
import './App.css';
import { AuthProvider } from './AuthContext';

export default function App() {
  const [memos, setMemos] = useState(loadMemos());
  const [selectedMemo, setSelectedMemo] = useState(null);

  const selectMemo = (id) => {
    const memo = memos.find((memo) => memo.id === id);
    setSelectedMemo(memo);
  };

  function loadMemos() {
    const memos = localStorage.getItem('memos');
    if (memos) {
      return JSON.parse(memos);
    }
    return [];
  }

  const addNewMemo = () => {
    const newMemo = {
      id: Date.now(),
      content: ''
    };
    const updatedMemos = [...memos, newMemo];
    setMemos(updatedMemos);
    setSelectedMemo(newMemo);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
  };

  const deleteMemo = (id) => {
    const updatedMemos = memos.filter((memo) => memo.id !== id);
    setMemos(updatedMemos);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
  };

  const saveMemo = (id, content) => {
    const updatedMemos = memos.map((memo) =>
      memo.id === id ? { ...memo, content } : memo
    );
    setMemos(updatedMemos);
    localStorage.setItem('memos', JSON.stringify(updatedMemos));
  };

  return (
    <AuthProvider>
      <div className="app-container">
        <div className="memo-list-container">
          <MemoList
            memos={memos}
            selectMemo={selectMemo}
            addNewMemo={addNewMemo}
          />
        </div>
        {selectedMemo && (
          <MemoEditor
            deleteMemo={deleteMemo}
            saveMemo={saveMemo}
            selectedMemo={selectedMemo}
          />
        )}
      </div>
    </AuthProvider>
  );
}
