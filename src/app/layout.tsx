import React from "react";
import { Inter } from "next/font/google";
import Navbar from '../app/components/navbar';
import Footer from "../app/components/footer";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar/>
      <div className={inter.className}>{children}</div>
      <Footer/>
    </>
  );
}

export default RootLayout;
