import React, { useEffect, useState } from 'react';

export const ChangeDocumentTitle = (): React.JSX.Element => {
  const defaultTitle = 'TILs | React';
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (!title) {
      return;
    }

    document.title = `${title} | New title added`;

    return () => {
      document.title = defaultTitle;
    };
  }, [title]);

  return (
    <div>
      <h2>
        {title
          ? 'Check the title of the website! It should have changed!'
          : 'Add a title to the input below'}
      </h2>
      <input
        style={{ padding: 8 }}
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Type a title here..."
      />
    </div>
  );
};
