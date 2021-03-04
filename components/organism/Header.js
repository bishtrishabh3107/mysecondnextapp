import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import DarkModeToggle from 'react-dark-mode-toggle';

function Header() {
  const { theme, setTheme } = useTheme();

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <div>
      <nav className="h-20 px-20 py-6 flex flex-row justify-between font-semibold md:flex-col md:py-3 sm:flex-col">
        <div className="header__Logo text-2xl text-blue-900 text-center dark:text-red-400 md:text-lg sm:text-lg">
          <Link href="/">
            <a>उPaayam</a>
          </Link>
        </div>
        <div className="my-3 text-center fixed top-1 right-1 border-none outline-none">
          <DarkModeToggle
            id="theme-toggle"
            checked={theme === 'light' ? true : false}
            onChange={handleThemeToggle}
            size={45}
          />
        </div>
      </nav>

      <Divider />
    </div>
  );
}

export default Header;
