import React from "react";
import { ThemeProvider } from 'next-themes'
 
// These styles apply to every route in the application
import '@/app/styles/globals.css';
 

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
        <ThemeProvider attribute="class">{children}</ThemeProvider>          
    </>

  );
}

export default RootLayout;
