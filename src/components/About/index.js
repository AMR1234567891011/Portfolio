import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState} from 'react'
import { Loader } from 'react-loaders'


const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])
const script = document.createElement("script"); script.src = "//cdn.jsdelivr.net/github-cards/latest/widget.js"; document.body.appendChild(script); 

    return (
        <>
        <div className='container about-page'>
            <div className='Squishy'>
                <div className='text-zone' id="about-text">
                    <h1>
                        <AnimatedLetters
                            strArray={['A','b','o','u','t',' ','M','e']}
                            letterClass={letterClass}
                            idx={15}
                        />
                    </h1>
                    <p>
                        I am a student at The Universiy of Tulsa studying for three majors:
                        Computer Science, Cyersecurity, and Mathematics. In each of my projects
                        I strive to learn the very basics of a new type of development. 
                        I am currently working as a undergradute security researcher on a federal grant at my university. 
                        I am currently writing a paper as the primary contributor. 
                    </p>
                    <p>
                        I am the vice president and treasurer for The University of Tulsa Association of Computing Machinery(ACM) chapter. 
                        We run events on software development, programming languages, work culture,
                        and interview preparation. ACM-TU has also worked with Paycom to highlight their Oklahoma based development team.
                    </p>
                    <p>
                        Outside of school and work I have completed the rank of Eagle Scout, and have held leadership
                        positions in Scouting and highschool clubs. I also love playing recreational sports like pickleball.
                    </p>
                        <a className='flat-button' href='https://github.com/AMR1234567891011/Resume/blob/main/NEW-Asher Rosen - CS RESUME -2024.pdf'>
                            RESUME
                        </a>

                </div>

                <div className="card"id="about-card">
                    <div class="github-card" data-github="AMR1234567891011/CS-4333-Project-2" data-width="400" data-height="" data-theme="default"></div>
                    <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
                    <div class="github-card" data-github="AMR1234567891011/SSD1306-pi-driver" data-width="400" data-height="" data-theme="default"></div>
                    <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
                    <div class="github-card" data-github="AMR1234567891011/MyPortfolio" data-width="400" data-height="" data-theme="default"></div>
                    <script src="//cdn.jsdelivr.net/github-cards/latest/widget.js"></script>
                </div>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default About