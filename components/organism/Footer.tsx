import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { GiBrain } from 'react-icons/gi';
import { ImYoutube } from 'react-icons/im';

function Footer() {
  return (
    <div>
      <footer className="footer bg-white light:bg-black dark:bg-white relative pt-1 border-b-2 border-blue-700">
        <div className="px-6">
          <div className="flex justify-center text-center text-3xl my-8 flex flex-row text-center md:text-xl sm:text-lg">
            <a className="flex flex-row" href="/">
              <div className="header__Logo text-2xl text-blue-900 text-center dark:text-red-400 md:text-lg sm:text-lg">
                <Link href="/">
                  <div>
                    <div className="mx-5">
                      <GiBrain size="2em" />
                    </div>
                    <a>उPaayam</a>
                  </div>
                </Link>
              </div>
            </a>
          </div>

          <div className="flex flex-row justify-evenly">
            <span className="my-2">
              <a
                href="https://www.facebook.com/GoodsUmpire-100422558782588"
                className="text-blue-700  text-md hover:text-blue-500"
              >
                <FaFacebook size="2em" />
              </a>
            </span>
            <span className="my-2">
              <a
                href="https://twitter.com"
                className="text-blue-700  text-md hover:text-blue-500"
              >
                <FaTwitter size="2em" />
              </a>
            </span>
            <span className="my-2">
              <a
                href="https://instagram.com"
                className="text-blue-700  text-md hover:text-blue-500"
              >
                <FaInstagram size="2em" />
              </a>
            </span>
            <span className="my-2">
              <a
                href="https://youtube.com"
                className="text-blue-700  text-md hover:text-blue-500"
              >
                <ImYoutube size="2em" />
              </a>
            </span>
          </div>
        </div>
        <div className="px-6">
          <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="text-center py-6">
              <p className="text-sm text-blue-700 font-bold mb-2">
                © 2021 by Coding Pahalwan
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
