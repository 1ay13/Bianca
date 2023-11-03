import "./globals.css";
import { Inter } from "next/font/google";

import Nav from "../components/Nav";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Bianca Rami",
  description: "Bianca Rami is a freelance ",
};

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="true"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700;800&display=swap"
        rel="stylesheet"
      />
    </head>
    <body className="h-screen mx-auto">
      <main className="flex flex-col h-full pt-[105px] md:pt-[140px]">
        <Nav />
        <div className="w-full px-5 mx-auto max-w-custom-screen">
          {children}
        </div>
        <Footer />
      </main>
    </body>
  </html>
);

export default RootLayout;
