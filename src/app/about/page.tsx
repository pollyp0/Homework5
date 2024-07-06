import '../global.css'
import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'

const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})

export default function About() {
    return (
        <div className={robotoMono.className}>
            <div className="about-me-container">
                <div className="photo-about">
                    <img src="/me2.jpg" alt="me"/>

                </div>
                <div className="about-me">
                    <div id="hello" className={rubikMonoOne.className}>
                        ABOUT ME
                    </div>
                    <span>I'm Polina Pokhodyaeva, </span><span className="blue-text">front-end developer</span> and
                    <span className="blue-text"> UI/UX designer </span><span>with one year of experience.
        Now I am studying at </span><span className="blue-text">Innopolis University</span>,
                    enjoying student life and continuing to hone my skills.
                    When I'm not coding, you can most likely find me at the gym, sketching, playing guitar in the
                    rehearsal
                    room, or singing. <span className="blue-text">Welcome to my corner of the web!</span>
                </div>
            </div>
        </div>

    )
}

