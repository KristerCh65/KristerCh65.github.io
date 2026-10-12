import React from "react";
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/app/i18n/language'
import { Inter } from 'next/font/google'
 
 

const inter = Inter({ subsets: ['latin'], display: 'swap' })

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <ThemeProvider attribute="class">
          <LanguageProvider>
            <div className={inter.className}>{children}</div>
          </LanguageProvider>
        </ThemeProvider>          
    </>

  );
}

export default RootLayout;
