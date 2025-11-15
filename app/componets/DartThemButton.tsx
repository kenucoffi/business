'use client';

import { useTheme } from './Themprovider';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button className="btn btn-sm" onClick={toggleTheme}>
      {theme === 'light' ? '🌙 Dark' : '☀ Light'}
    </button>
  );
}