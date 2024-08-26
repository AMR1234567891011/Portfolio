import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import LogoTitle from '../../assets/images/logo-a.png'
import './index.scss'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = ['s','h','e','r',',']
    const jobArray = ['D','e','v','e','l','o','p','e','r']
    
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 4000)
    }, [])

    return (
        <>
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <span className={`${letterClass} _14`}> </span>
                
                <img src={LogoTitle} className="in-text" alt="developer" />
                <AnimatedLetters letterClass={letterClass}
                strArray={nameArray}
                idx={15}/>
                <br />
                <AnimatedLetters letterClass={letterClass}
                strArray={jobArray}
                idx={22}/>
                </h1>
                <h2>
                    Student triple majoring in Computer Science, Cybersecurity, and Mathematics</h2>
                <Link to="/contact" className='flat-button'>CONTACT ME</Link>
                    <a className='flat-button' href='https://github.com/AMR1234567891011/Resume/blob/main/Asher-Rosen.pdf'>
                        RESUME
                    </a>
                <a sytle="height: 50px;"/>
            </div>
        </div>
        <Loader type="pacman" />
        </>
    );
}

export default Home