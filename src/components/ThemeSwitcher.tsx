"use client"

import React from 'react';

import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="w-full flex justify-end">
      <button
        aria-label={theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'}
        className="bg-transparent border-none p-0 m-0 text-inherit cursor-pointer focus:outline-none font-semibold"
        onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
        type="button"
      >
        {theme === 'light' ? '#fff' : '#000'}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
