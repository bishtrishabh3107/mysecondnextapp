import { Divider } from '@chakra-ui/react';
import Link from 'next/link';
import { useTheme } from 'next-themes';
import DarkModeToggle from 'react-dark-mode-toggle';
import { GiBrain } from 'react-icons/gi';

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
      <nav className="h-20 px-20 py-6 flex flex-row justify-between font-bold md:flex-col md:py-3 sm:flex-col">
        <div className="header__Logo text-2xl text-blue-900 text-center dark:text-red-400 md:text-lg sm:text-lg cursor-pointer">
          <Link href="/">
            <div className="flex flex-row">
              <div className="-mt-1">
                <GiBrain size="2em" />
              </div>
              <a className="mx-1">उPaayam</a>
            </div>
          </Link>
        </div>
        <div className="my-5 text-center fixed top-1 right-1 border-none outline-none z-40">
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
