import '../global.css'
import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'
import Head from 'next/head';

const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})

import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contacts',
    description:
      'Welcome to my website! This is my contacts',
};

export default function Contacts() {
    return (
        <div className={rubikMonoOne.className}>
            <div id ="contacts" >
                <div id ="gh">
                    <a href="https://github.com/pollyp0/pollyp0.github.io" target="_blank">
                        GitHub
                    </a>
                </div>
                <div id = "tg">
                    <a href="https://telegram.me/polly_p0" target="_blank">
                        Telegram
                    </a>
                </div>
                <div id = "vk">
                    <a href="https://vk.com/id295052326" target="_blank">
                        Vkontakte
                    </a>
                </div>
            </div>
        </div>

    )
}

