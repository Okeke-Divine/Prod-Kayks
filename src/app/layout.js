import { Inter } from "next/font/google";
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prod. Kayks | Music Producer",
  description: "Get industry-ready instrumentals to fuel your next track."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-straight/css/uicons-thin-straight.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-rounded/css/uicons-thin-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-brands/css/uicons-brands.css' />
        {/* facebook */}
        <meta property="og:title" content="Prod. Kayks | Music Producer" />
        <meta property="og:description" content="Get industry-ready instrumentals to fuel your next track." />
        {/* twitter */}
        <meta name="twitter:title" content="Prod. Kayks | Music Producer" />
        <meta property="twitter:description" content="Get industry-ready instrumentals to fuel your next track." />
      </head>
      <body className={inter.className + ' ' + 'bg-purple-dark text-white'}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
