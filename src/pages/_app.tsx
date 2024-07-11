import './global.css'


import type { AppProps } from 'next/app'
import {Roboto_Mono} from 'next/font/google'
import Head from 'next/head';
import Link from 'next/link';
import React from 'react';

const robotoMono = Roboto_Mono({subsets: ['latin']})
export const metadata = {
  title: 'Comic',
  description: 'Welcome to my website!',
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
    <Head>
      <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      <meta name="author" content="Polly Po" />
    </Head>
    <div className={robotoMono.className}>
    <div className="header-container">
      <Link href='/'>HOME</Link>
      <Link href='/about'>ABOUT ME</Link>
      <Link href='/portfolio'>PORTFOLIO</Link>
      <Link href='/contacts'>CONTACTS</Link>
      <Link href='/comic'>COMIC</Link>
    </div>
    <Component {...pageProps} />

    </div>

    </div>
  )
}