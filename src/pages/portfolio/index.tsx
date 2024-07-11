import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'
import Head from 'next/head';


const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})

import React from 'react';
import { Metadata } from 'next';


export default function Portfolio() {
    return (
      <div>
          <Head>
              <meta name="description" content="Welcome to my website! This page for your fun" />
              <title>Portfolio Page - My Website</title>
          </Head>
        <div className={robotoMono.className}>
            <div className="cont-body">
                <div className="design-projects">
                    <div className="blue-block-d-proj"></div>
                    <div id = "design-text" className={rubikMonoOne.className}>
                        <div>Design</div>
                        <div>projects</div>
                    </div>
                    <div id ="list-text" className={robotoMono.className}>
                        <ul>
                            <li>Trend Market</li>
                            <li>Energy Hack</li>
                            <li>Portfolio design for me</li>
                            <li>Portfolio design for customer</li>
                        </ul>
                    </div>


                </div>
                <div className="frontend-projects" >
                    <div className="blue-block-d-proj"></div>
                    <div id ="design-text" className={rubikMonoOne.className}>
                        <div>Front-end</div>
                        <div>projects</div>
                    </div>
                    <div id ="list-text" className={robotoMono.className}>
                        <ul>
                            <li>Portfolio</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
        </div>

    )
}

