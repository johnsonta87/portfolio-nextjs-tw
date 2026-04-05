import Link from 'next/link';
import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { SiX } from 'react-icons/si';

const Footer: React.FC = () => {
  return (
    <footer className='w-full absolute bottom-2 flex flex-row items-center border-t border-white py-6'>
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
    </footer>
  );
};

export default Footer;
