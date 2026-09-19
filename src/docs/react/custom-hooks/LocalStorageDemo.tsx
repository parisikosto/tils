import React, { useState } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const LocalStorageDemo = (): React.JSX.Element => {
  const [items, setItems] = useLocalStorage<string>({
    initialState: [],
    key: 'tils-demo-items',
  });
  const [value, setValue] = useState('');

  const addItem = () => {
    if (!value.trim()) {
      return;
    }
    setItems([...items, value.trim()]);
    setValue('');
  };

  return (
    <div>
      <input
        style={{ padding: 8 }}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addItem()}
        placeholder="Add an item..."
      />{' '}
      <button onClick={addItem}>Add</button>{' '}
      <button onClick={() => setItems([])}>Clear</button>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
      <p>
        <em>
          Stored under the <code>tils-demo-items</code> localStorage key —
          refresh the page, it's still there.
        </em>
      </p>
    </div>
  );
};
