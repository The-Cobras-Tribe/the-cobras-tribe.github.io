/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useEffect, useState } from "react";

function Header() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // if on desktop or tablet, show the navbar
    if (window.innerWidth > 768) {
      setVisible(true);
    }
  }, []);

  return (
    <nav
      className='flex items-center justify-between flex-wrap bg-stone-900/50 p-6
     backdrop-filter backdrop-blur-lg
    '
    >
      <Link href='/'>
        <div className='flex items-center flex-no-shrink text-green-100 mr-6'>
          <img
            src='https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670'
            alt='Cobras Of Action Logo'
            className='w-10 h-10 mr-2'
          />

          <span className='font-semibold text-xl tracking-tight text-green-400'>
            Cobras Of Action
          </span>
        </div>
      </Link>
      <div
        className='block lg:hidden text-green-300'
        onClick={() => setVisible(!visible)}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
          />
        </svg>
      </div>
      {visible && (
        <div className='block flex-grow flex justify-center gap-8 lg:flex lg:items-center lg:w-auto'>
          <div className='text-sm flex justify-end lg:flex-grow'>
            <Link
              href='/'
              className='block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-green-400 mr-4'
            >
              <span className='bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Home
              </span>
            </Link>

            <Link
              href='/values'
              className='block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-green-400 mr-4'
            >
              <span className='bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Values
              </span>
            </Link>
            {/*
            <Link
              href='#responsive-header'
              className='block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-green-400 mr-4'
            >
              <span className='bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Merchandise
              </span>
            </Link>
    */}
            <Link
              href='/community'
              className='block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-green-400 mr-4'
            >
              <span className='bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Community
              </span>
            </Link>
            <Link
              href='/contact'
              className='block mt-4 lg:inline-block lg:mt-0 text-green-100 hover:text-green-400'
            >
              <span className='bg-left-bottom bg-gradient-to-r from-emerald-500 to-emerald-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out'>
                Contact
              </span>
            </Link>
          </div>
          <div>
            {/*
            <Link
              href='#'
              className='inline-block text-sm px-4 py-2 leading-none border rounded text-green-400 border-white hover:border-transparent hover:text-teal hover:bg-green-800 mt-4 lg:mt-0'
            >
              Login
            </Link>
*/}
          </div>
        </div>
      )}
    </nav>
  );

  return (
    <>
      <header>
        <nav
          className='bg-white border-stone-200 px-4 lg:px-6 py-2.5 dark:bg-stone-800/50
        backdrop-filter backdrop-blur-xl dark:border-stone-700'
        >
          <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl'>
            <Link href='https://flowbite.com' className='flex items-center'>
              <img
                src='https://media.discordapp.net/attachments/1054436485421604944/1054442438682492998/cobra.png?width=698&height=670'
                className='mr-3 h-6 sm:h-9'
                alt='Cobras Logo'
              />
              <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-green-300'>
                Cobras
              </span>
            </Link>
            <div className='flex items-center lg:order-2'>
              <button
                data-collapse-toggle='mobile-menu-2'
                type='button'
                className='inline-flex items-center p-2 ml-1 text-sm text-stone-500 rounded-lg lg:hidden hover:bg-stone-100 focus:outline-none focus:ring-2 focus:ring-stone-200 dark:text-stone-400 dark:hover:bg-stone-700 dark:focus:ring-stone-600'
                aria-controls='mobile-menu-2'
                aria-expanded='false'
              >
                <span className='sr-only'>Open main menu</span>
                <svg
                  className='w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
                <svg
                  className='hidden w-6 h-6'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                    clip-rule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
            <div
              className='hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1'
              id='mobile-menu-2'
            >
              <ul className='flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0'>
                <li>
                  <Link
                    href='#'
                    className='block py-2 pr-4 pl-3 text-green-100 rounded bg-emerald-700 lg:bg-transparent lg:text-emerald-700 lg:p-0 dark:text-green-100'
                    aria-current='page'
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='block py-2 pr-4 pl-3 text-stone-700 border-b border-stone-100 hover:bg-stone-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-stone-400 lg:dark:hover:text-green-100 dark:hover:bg-stone-700 dark:hover:text-green-100 lg:dark:hover:bg-transparent dark:border-stone-700'
                  >
                    Admin Team
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='block py-2 pr-4 pl-3 text-stone-700 border-b border-stone-100 hover:bg-stone-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-stone-400 lg:dark:hover:text-green-100 dark:hover:bg-stone-700 dark:hover:text-green-100 lg:dark:hover:bg-transparent dark:border-stone-700'
                  >
                    Merchandise
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='block py-2 pr-4 pl-3 text-stone-700 border-b border-stone-100 hover:bg-stone-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-stone-400 lg:dark:hover:text-green-100 dark:hover:bg-stone-700 dark:hover:text-green-100 lg:dark:hover:bg-transparent dark:border-stone-700'
                  >
                    Art
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='block py-2 pr-4 pl-3 text-stone-700 border-b border-stone-100 hover:bg-stone-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-stone-400 lg:dark:hover:text-green-100 dark:hover:bg-stone-700 dark:hover:text-green-100 lg:dark:hover:bg-transparent dark:border-stone-700'
                  >
                    Resources
                  </Link>
                </li>
                <li>
                  <Link
                    href='#'
                    className='block py-2 pr-4 pl-3 text-stone-700 border-b border-stone-100 hover:bg-stone-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-emerald-700 lg:p-0 dark:text-stone-400 lg:dark:hover:text-green-100 dark:hover:bg-stone-700 dark:hover:text-green-100 lg:dark:hover:bg-transparent dark:border-stone-700'
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
