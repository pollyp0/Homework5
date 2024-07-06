import '../global.css'
import {Roboto_Mono} from 'next/font/google'
import {Rubik_Mono_One} from 'next/font/google'

const robotoMono = Roboto_Mono({subsets: ['latin']})

const rubikMonoOne = Rubik_Mono_One({subsets: ['latin'], weight: '400', style: ['normal']})

export default function Portfolio() {
    return (
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
                            <li>Trand Market</li>
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

    )
}

