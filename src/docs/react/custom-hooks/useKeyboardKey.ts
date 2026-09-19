import { useEffect } from 'react';

export const useKeyboardKey = ({
  key,
  action,
}: {
  key: string;
  action: () => void;
}) => {
  useEffect(() => {
    const callback = (e: Event) => {
      const event = e as unknown as KeyboardEvent;
      if (event.code.toLowerCase() === key.toLowerCase()) {
        action();
      }
    };

    document.addEventListener('keydown', callback);

    return () => {
      document.removeEventListener('keydown', callback);
    };
  }, [action, key]);
};
