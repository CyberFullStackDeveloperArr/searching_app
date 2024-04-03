import { useEffect } from 'react';
import { AppModel } from '../model/modelBul';

export const AppController = () => {
  useEffect(() => {
    const updateMousePosition = (e) => {
      AppModel.position = { x: e.clientX, y: e.clientY };
    }
    window.addEventListener('mousemove', updateMousePosition);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);
  return null;
};
