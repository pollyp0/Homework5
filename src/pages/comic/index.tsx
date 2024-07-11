// 'use client'

import { Comic } from '@/pages/comic/comic';
import { Roboto_Mono } from 'next/font/google';
import { Rubik_Mono_One } from 'next/font/google';
import { useEffect } from 'react';

import Head from 'next/head';


const robotoMono = Roboto_Mono({ subsets: ['latin'] });

const rubikMonoOne = Rubik_Mono_One({ subsets: ['latin'], weight: '400', style: ['normal'] });

export default function ComicPage({ comicTitle, comicDate, previewSrc, previewAlt }) {

  useEffect(() => {

    const result = document.getElementById('result');
    // @ts-ignore
    result.innerHTML = '';

    const img = document.createElement('img');

    img.src = previewSrc;
    img.alt = previewAlt;

    const title = document.createElement('h1');
    title.textContent = comicTitle;

    const date = document.createElement('p');
    date.textContent = comicDate;

    const fromNowDate = document.createElement('h3');

    result?.appendChild(img);
    result?.appendChild(title);
    result?.appendChild(date);
    result?.appendChild(fromNowDate);
  });
  // })


  return (
    <div>
      <Head>
        <meta name="description" content="Welcome to my website! This page for your fun" />
        <title>Comic Page - My Website</title>
      </Head>
      <div className="container">
        <h1 className={rubikMonoOne.className}>XKCD Comic Viewer</h1>

        <div id="result"></div>
      </div>
    </div>

  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  let email = 'p.pokhodyaeva@innopolis.university';
  const comic = new Comic(email);
  await comic.setUp();

  const comicTitle = comic.title;
  const previewSrc = comic.image?.src;
  const previewAlt = comic.image?.alt;
  const comicDate = comic.date.toLocaleDateString();

  return { props: { comicTitle, comicDate, previewSrc, previewAlt } };
}