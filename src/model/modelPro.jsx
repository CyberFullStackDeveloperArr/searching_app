import { useState, useEffect } from 'react';

export function useProgressModel() {
  const [progressValue, setProgressValue] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setProgressValue(progress => (progress >= 100 ? 0 : progress + 1));
    }, 15);

    return () => clearInterval(intervalId);
  }, []);
  return { progressValue };

}
