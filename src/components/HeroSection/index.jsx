import {
    ArrowForward,
    ArrowRight,
    HeroBg,
    HeroBtnWrapper,
    HeroContainer,
    HeroContent,
    HeroH1,
    HeroP,
    VideoBg,
} from './HeroElements'
import video from '../../videos/video.mp4'
import { Button } from '../ButtonElement'
import { useState } from 'react'

const HeroSection = () => {
    const [hover, setHover] = useState(false)
    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer id='home'>
            <HeroBg>
                <VideoBg
                    playsInline
                    autoPlay
                    loop
                    muted
                    src={video}
                    type='video/mp4'
                />
            </HeroBg>
            <HeroContent>
                <HeroH1>Virtual Banking Made Easy</HeroH1>
                <HeroP>
                    Sign up for a new account today and receive $250 in credit
                    towards your next payment.
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        to='signup'
                        smooth={true}
                        duration={500}
                        spy={true}
                        offset={-80}
                        exact='true'
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary={true}
                        dark={true}
                    >
                        Get started {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
