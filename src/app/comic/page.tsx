'use client'
import './index.css'

import {Comic} from "@/app/comic/comic";
import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'
import {useEffect} from "react";

import Head from 'next/head';


const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})

export default function ComicPage() {

    useEffect(() => {
        const form = document.getElementById('form');
        form?.addEventListener('submit', async (event) => {
            event.preventDefault();

            // @ts-ignore
            const formData = new FormData(form);
            const email = formData.get('email') as string;

            const comicController = new Comic(email);
            await comicController.setUp();

            const result = document.getElementById('result');
            // @ts-ignore
            result.innerHTML = "";

            const img = document.createElement('img');
            img.src = comicController.image?.src as string;
            img.alt = comicController.image?.alt as string;

            const title = document.createElement('h1');
            title.textContent = comicController.title;

            const date = document.createElement('p');
            date.textContent = comicController.date.toLocaleDateString();

            const fromNowDate = document.createElement('h3');
            const fromNow = comicController.fromNow();
            fromNowDate.innerText = `${Math.round(fromNow.years)} years ago`;

            result?.appendChild(img);
            result?.appendChild(title);
            result?.appendChild(date);
            result?.appendChild(fromNowDate);
        })
    })




    return (
      <div>
          <Head>
              <meta name="description" content="Welcome to my website! This page for your fun"/>
              <title>Comic Page - My Website</title>
          </Head>
        <div className="container">
            <h1 className={rubikMonoOne.className}>XKCD Comic Viewer</h1>
            <p>Enter your email address to receive a random XKCD comic:</p>
            <form id="form">
                <input type="email" name="email" placeholder="Your e-mail address" required/>
                <button type="submit">Get a comic</button>
            </form>

            <div id="result"></div>
        </div>
      </div>

    )
}
