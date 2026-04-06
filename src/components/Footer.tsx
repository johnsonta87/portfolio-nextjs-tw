'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
  const pathname = usePathname();
  const isProjectsPage = pathname === '/projects';

  return (
    <footer className='w-full sm:absolute sm:bottom-2 flex flex-col sm:flex-row items-start sm:items-center border-t border-black dark:border-white py-6 gap-3 sm:gap-0 mt-12 sm:mt-0'>
      <Link
        href='https://github.com/johnsonta87'
        target='_blank'
        rel='noopener noreferrer'
        className='mr-4 flex items-center gap-1 text-sm'
      >
        <FaGithub />
        GitHub
      </Link>
      <Link
        href='https://x.com/JNSN_'
        target='_blank'
        rel='noopener noreferrer'
        className='flex items-center gap-1 text-sm'
      >
        <SiX />
        Twitter
      </Link>

      {!isProjectsPage && (
        <Link
          href='/projects'
          className='sm:ml-auto py-2 px-4 flex items-center gap-1 text-sm border border-black rounded-full font-semibold'
        >
          View projects
        </Link>
      )}
    </footer>
  );
};

export default Footer;
