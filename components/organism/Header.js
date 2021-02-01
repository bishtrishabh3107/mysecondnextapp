import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

function Header() {
  const [isMounted, setIsMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  useEffect(() => {
    setIsMounted(true);
  }, []);
  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === 'light' ? 'dark' : 'light');
    }
  };

  return (
    <div>
      <nav className="h-20 px-20 py-6 flex flex-row justify-between font-semibold  md:flex-col md:py-3 sm:flex-col">
        <div className="header__Logo text-2xl text-blue-900 text-center dark:text-red-400">
          <Link href="/">
            <a>QQQ</a>
          </Link>
        </div>
        <span className="absolute top-0 right-0"></span>
      </nav>
      <Divider />
    </div>
  );
}

export default Header;
