import Link from 'next/link';

import ThemeSwitcher from './ThemeSwitcher';

const Header = () => (
  <header>
    <nav className='flex items-center gap-4'>
      <Link href='/' className='font-semibold'>
        Home
      </Link>
      <ThemeSwitcher />
    </nav>
  </header>
);

export default Header;
