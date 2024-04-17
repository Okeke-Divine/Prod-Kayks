import { Inter } from "next/font/google";
import Navbar from "../components/shared/Navbar"
import Footer from "../components/shared/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Prod. Kayks | Music Producer | Get industry-ready instrumentals to fuel your next track.",
  description: "Get industry-ready instrumentals to fuel your next track."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-straight/css/uicons-thin-straight.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-thin-rounded/css/uicons-thin-rounded.css' />
        <link rel='stylesheet' href='https://cdn-uicons.flaticon.com/2.3.0/uicons-brands/css/uicons-brands.css' />
        <meta http-equiv="Content-Type" content="text/html;charset=UTF-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Okeke Divine-Vessel" />
        <meta property="description" content="Get industry-ready instrumentals to fuel your next track." />
        <meta name="url" content="https://prodkayks.vercel.app/" />
        {/* facebook */}
        <meta property="og:title" content="Prod. Kayks | Music Producer | Beats" />
        <meta property="og:description" content="Get industry-ready instrumentals to fuel your next track." />
        <meta property="og:url" content="https://prodkayks.vercel.app/" />
        <meta property="og:image" content="https://prodkayks.vercel.app/assets/images/og_image-1200x630.jpg" />
          {/* twitter */}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content="Prod. Kayks | Music Producer | Beats" />
          <meta name="twitter:description" content="Get industry-ready instrumentals to fuel your next track." />
          <meta name="twitter:url" content="https://prodkayks.vercel.app/" />
          <meta name="twitter:creator" content="@okekedivine__" />
          <meta name="twitter:image" content="https://prodkayks.vercel.app/assets/images/og_image-1200x630.jpg" />
          </head>
          <body className={inter.className + ' ' + 'bg-purple-dark text-white '}>
            <Navbar />
            {children}
            <Footer />
          </body>
        </html>
        );
}
