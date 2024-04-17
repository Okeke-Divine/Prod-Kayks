import { Inter } from "next/font/google";
import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prod. Kayks | Music Producer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-straight/css/uicons-thin-straight.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-rounded/css/uicons-thin-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-brands/css/uicons-brands.css' />
        {/* facebook */}
        <meta name="og:title" content="Prod. Kayks | Music Producer" />
        {/* twitter */}
        <meta name="twitter:title" content="Prod. Kayks | Music Producer" />
      </head>
      <body className={inter.className + ' ' + 'bg-purple-dark text-white'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
