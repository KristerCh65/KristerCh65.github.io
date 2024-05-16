

import { useTheme } from "next-themes";
import logo from '@/app/images/MK.png';
import Image from "next/image";
import Link from "next/link";


const Navbar = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-white dark:bg-gray-900 p-4">
        <div className="flex items-center flex-shrink-0 ms-12 ">
          <Link href="/"><Image src={logo} alt="Krister Portafolio" width={60} height={60}/></Link>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black dark:text-white border-black dark:border-white hover:text-teal-200 dark:hover:text-teal-200 hover:border-teal-500 dark:hover:border-teal-500">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-wrap lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow mr-12">
            <Link href="/" className="block mt-2 lg:inline-block lg:mt-0 text-black dark:text-white dark:hover:text-teal-500 hover:text-teal-500 mr-4">
              About
            </Link>
            <Link href="/" className="block mt-2 lg:inline-block lg:mt-0 text-black dark:text-white dark:hover:text-teal-500 hover:text-teal-500 mr-4">
              Contact
            </Link>
          </div>
          <div>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-black dark:text-white">|</span>
          </div>
          <div>
            {theme == 'light' ?
              <button className="px-6 py-2" onClick={() => setTheme('dark')} >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
                </svg>
              </button> :
              <button className="px-6 py-2" onClick={() => setTheme('light')}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                  <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
                </svg>
              </button>
            }
          </div>
          <div>
            <a href="/KBMCH_CV.pdf" target="_blank" className="inline-flex text-sm px-4 py-2 leading-none border rounded text-black border-black dark:text-white dark:border-white dark:hover:bg-white hover:border-transparent dark:hover:text-teal-500 hover:text-teal-500 hover:bg-black mt-4 lg:mt-0 mr-12">
              <svg className="fill-current w-4 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>Download CV</a>
          </div>
        </div>
      </nav>
    </>

  );
}

export default Navbar;