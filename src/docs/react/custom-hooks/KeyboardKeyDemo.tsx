import React, { useState } from 'react';
import { useKeyboardKey } from './useKeyboardKey';

export const KeyboardKeyDemo = (): React.JSX.Element => {
  const [pressed, setPressed] = useState(false);

  useKeyboardKey({
    key: 'Escape',
    action: () => {
      setPressed(true);
      setTimeout(() => setPressed(false), 1000);
    },
  });

  return (
    <div>
      <p>
        Click anywhere on this page, then press <code>Escape</code>:
      </p>
      <p
        style={{
          fontWeight: pressed ? 'bold' : undefined,
          color: pressed ? '#3dd68c' : undefined,
        }}
      >
        {pressed ? 'Escape pressed! 🎉' : 'Waiting...'}
      </p>
    </div>
  );
};
