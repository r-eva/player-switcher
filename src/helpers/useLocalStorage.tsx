/* eslint-disable consistent-return */
import { useState, useEffect } from 'react';

type ReturnType<T> = [
  T | undefined,
  React.Dispatch<React.SetStateAction<T | undefined>>,
];

function useLocalStorage<T>(key: string, initialValue?: T): ReturnType<T> {
  const [score, setScore] = useState<T | undefined>(() => {
    if (!initialValue) return;
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (err) {
      return initialValue;
    }
  });

  useEffect(() => {
    if (score && score !== '0') {
      try {
        localStorage.setItem(key, JSON.stringify(score));
      } catch (err) {
        console.log(err);
      }
    } else if (score === '0') {
      localStorage.removeItem(key);
    }
  }, [score, key]);

  return [score, setScore];
}

export default useLocalStorage;
