import '../global.css'
import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'

const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})

export default function Contacts() {
    return (
        <div className={rubikMonoOne.className}>
            <div id ="contacts" >
                <div>
                    <a href="https://github.com/pollyp0/pollyp0.github.io" target="_blank">
                        <img src="/github%201.svg" alt="GitHub"/>
                    </a>
                    <span>GitHub</span>
                </div>
                <div id = "tg">
                    <a href="https://telegram.me/polly_p0" target="_blank">
                        <img src="/telegram.svg" alt="Telegram"/>
                    </a>
                    <span>Telegram</span>
                </div>
                <div id = "vk">
                    <a href="https://vk.com/id295052326" target="_blank">
                        <img src="/vk.svg" alt="VK"/>
                    </a>
                    <span>VKontakte</span>
                </div>
            </div>
        </div>

    )
}

