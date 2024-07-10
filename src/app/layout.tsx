import './global.css'
import Link from "next/link";
import {Roboto_Mono} from 'next/font/google'
import Head from 'next/head';


const robotoMono = Roboto_Mono({subsets: ['latin']})
export const metadata = {
  title: 'Comic',
  description: 'Welcome to my website!',
}

export default function RootLayout({
  children,}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <meta name="author" content="Polly Po" />
      </Head>
      <body className={robotoMono.className}>
      <div className="header-container">
          <Link href='/'>HOME</Link>
          <Link href='/about'>ABOUT ME</Link>
          <Link href='/portfolio'>PORTFOLIO</Link>
          <Link href='/contacts'>CONTACTS</Link>
          <Link href='/comic'>COMIC</Link>
      </div>
      {children}

      </body>

      </html>
  )
}
