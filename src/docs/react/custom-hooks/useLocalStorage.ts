import { useState, useEffect, Dispatch, SetStateAction } from 'react';

export const useLocalStorage = <T>({
  initialState,
  key,
}: {
  initialState: T[];
  key: string;
}): [T[], Dispatch<SetStateAction<T[]>>] => {
  const [value, setValue] = useState<T[]>(initialState);

  useEffect(() => {
    const storedValue = localStorage.getItem(key);
    if (storedValue) {
      setValue(JSON.parse(storedValue));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue];
};
