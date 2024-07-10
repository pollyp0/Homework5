import './global.css'
import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'
import Head from 'next/head';


const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Home page',
  description:
    'Welcome to my website! This is home page',
};


export default function Home() {

    return (
          <div className={robotoMono.className}>
            <div className="containerBody">
                <div className="mainText">
                    <div className="internal-container">
                        <div className={rubikMonoOne.className}>PORTFOLIO</div>
                        <div>
                            <span className={rubikMonoOne.className}>P</span><span>okhodyaeva</span>
                        </div>
                        <div>
                            <span className={rubikMonoOne.className}>P</span><span>olina</span>
                        </div>
                    </div>
                    <div>
                        <div className="text">
                            <div>Hello!</div>
                            <div>My name is Polina,</div>
                            <div>I`m front-end</div>
                            <div>developer and UIUX</div>
                            <div>designer.</div>
                        </div>
                    </div>

                    <div className="blue-block-text" id="blueBlockText"></div>
                </div>

                {/*<div className="right-side">*/}
                {/*    <div className="blue-block" id="blueBlock"></div>*/}
                {/*    <img id="photo" src="/me.jpg" alt="me"/>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}


