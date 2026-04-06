'use client';

import { Moon, Sun } from 'lucide-react';
import React from 'react';

import { useTheme } from './ThemeContext';

const ThemeSwitcher: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isLight = theme === 'light';

  return (
    <div className='w-full flex justify-end'>
      <div className='relative group'>
        <button
          aria-label={
            theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
          }
          className='bg-transparent border-none p-0 m-0 text-inherit cursor-pointer focus:outline-none font-semibold'
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          type='button'
        >
          {isLight ? (
            <Moon size={18} aria-hidden='true' />
          ) : (
            <Sun size={18} aria-hidden='true' />
          )}
        </button>
      </div>
    </div>
  );
};

export default ThemeSwitcher;
