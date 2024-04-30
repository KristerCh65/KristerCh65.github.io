import React from "react";
import Navbar from '../app/components/navbar';
import Footer from "../app/components/footer";

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar/>
      {children}
      <Footer/>
    </>
  );
}

export default RootLayout;
