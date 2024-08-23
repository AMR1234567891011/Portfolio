import './index.scss'
import { Loader } from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    useEffect(() => {
        setTimeout(() => {
            setLetterClass('text-animate-hover')
        }, 3000)
    }, [])

    return (
        <>
        <div className='container contact-page'> 
            <div className='text-zone'>
                <h1 id="contact-me">
                    <AnimatedLetters strArray={['C','o','n','t','a','c','t',' ','M','e']}
                    letterClass={letterClass}
                    idx={15}
                    />
                </h1>
                <p>
                    Contact me here if you have and questions or inquiries.
                </p>
                <p>
                    Email: amr6294@utulsa.edu
                </p>
                <p>
                    Linkedin: Asher Rosen (is linked in the bottom left)
                </p>
                <p>
                    Github: AMR1234567891011
                </p>
                    <a className='flat-button' href='https://github.com/AMR1234567891011/Resume/blob/main/NEW-Asher Rosen - CS RESUME -2024.pdf'>
                            RESUME
                    </a>

            </div>
        </div>
        <Loader type="pacman" />
        </>
    )
}

export default Contact