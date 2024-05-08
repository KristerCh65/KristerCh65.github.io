
import Link from "next/link";
import { useTheme } from "next-themes";

const Navbar = () => {
  const { systemTheme, theme, setTheme } = useTheme();

  return (
    <>
      { theme == 'light' ?
      <nav className="flex items-center justify-between flex-wrap bg-default-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" fill="#000000" stroke="none" width="300" height="300" viewBox="0 0 300.000000 300.000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M666 2208 c-35 -35 -146 -151 -247 -258 -101 -107 -236 -250 -301
          -317 -135 -140 -142 -158 -85 -215 160 -159 685 -657 707 -671 26 -17 31 -17
          59 -3 35 19 81 75 81 100 0 32 -17 51 -217 241 -338 321 -403 386 -403 401 0
          8 100 119 222 247 384 401 378 395 378 419 -1 34 -83 118 -116 118 -7 0 -43
          -28 -78 -62z m128 -10 l44 -43 -264 -275 c-146 -151 -290 -304 -321 -339 l-57
          -63 39 -36 c22 -20 130 -121 240 -226 350 -335 367 -351 379 -358 7 -5 -5 -24
          -36 -55 l-47 -47 -113 110 c-62 61 -221 213 -353 339 -132 125 -251 238 -265
          251 l-24 24 115 117 c117 120 435 454 549 576 34 37 64 67 66 67 2 0 24 -19
          48 -42z"/>
        </svg>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-black border-black hover:text-teal-200 hover:border-teal-400">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-wrap lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow mr-12">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400 mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-teal-400">
              Blog
            </a>
          </div>
          <div>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-black">|</span>
          </div>
          <div>
            <button className="px-6 py-2" onClick={() => setTheme('dark')} >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          <div>
            <a href="#" className="inline-flex text-sm px-4 py-2 leading-none border rounded text-black border-black hover:border-transparent hover:text-teal-500 hover:bg-black mt-4 lg:mt-0">
            <svg className="fill-current w-4 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>Download CV</a>
          </div>
        </div>
      </nav>
      :
      <nav className="flex items-center justify-between flex-wrap bg-default-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg className="fill-current h-8 w-8 mr-2" fill="#000000" stroke="none" width="300" height="300" viewBox="0 0 300.000000 300.000000" xmlns="http://www.w3.org/2000/svg">
          <path d="M666 2208 c-35 -35 -146 -151 -247 -258 -101 -107 -236 -250 -301
          -317 -135 -140 -142 -158 -85 -215 160 -159 685 -657 707 -671 26 -17 31 -17
          59 -3 35 19 81 75 81 100 0 32 -17 51 -217 241 -338 321 -403 386 -403 401 0
          8 100 119 222 247 384 401 378 395 378 419 -1 34 -83 118 -116 118 -7 0 -43
          -28 -78 -62z m128 -10 l44 -43 -264 -275 c-146 -151 -290 -304 -321 -339 l-57
          -63 39 -36 c22 -20 130 -121 240 -226 350 -335 367 -351 379 -358 7 -5 -5 -24
          -36 -55 l-47 -47 -113 110 c-62 61 -221 213 -353 339 -132 125 -251 238 -265
          251 l-24 24 115 117 c117 120 435 454 549 576 34 37 64 67 66 67 2 0 24 -19
          48 -42z"/>
        </svg>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg>
          </button>
        </div>
        <div className="w-full block flex-wrap lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow mr-12">
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4">
              Docs
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400 mr-4">
              Examples
            </a>
            <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-400">
              Blog
            </a>
          </div>
          <div>
            <span className="block mt-4 lg:inline-block lg:mt-0 text-white">|</span>
          </div>
          <div>
          <button className="px-6 py-2" onClick={() => setTheme('light')}>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
              <path d="M12 2.25a.75.75 0 0 1 .75.75v2.25a.75.75 0 0 1-1.5 0V3a.75.75 0 0 1 .75-.75ZM7.5 12a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM18.894 6.166a.75.75 0 0 0-1.06-1.06l-1.591 1.59a.75.75 0 1 0 1.06 1.061l1.591-1.59ZM21.75 12a.75.75 0 0 1-.75.75h-2.25a.75.75 0 0 1 0-1.5H21a.75.75 0 0 1 .75.75ZM17.834 18.894a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 1 0-1.061 1.06l1.59 1.591ZM12 18a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-1.5 0v-2.25A.75.75 0 0 1 12 18ZM7.758 17.303a.75.75 0 0 0-1.061-1.06l-1.591 1.59a.75.75 0 0 0 1.06 1.061l1.591-1.59ZM6 12a.75.75 0 0 1-.75.75H3a.75.75 0 0 1 0-1.5h2.25A.75.75 0 0 1 6 12ZM6.697 7.757a.75.75 0 0 0 1.06-1.06l-1.59-1.591a.75.75 0 0 0-1.061 1.06l1.59 1.591Z" />
            </svg>
          </button> 
          </div>
          <div>
            <a href="#" className="inline-flex text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">
            <svg className="fill-current w-4 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" /></svg>Download CV</a>
          </div>
        </div>
      </nav>
    }
    </>

  );
}

export default Navbar;