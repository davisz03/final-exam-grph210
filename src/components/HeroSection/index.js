import React, { useState } from 'react'
import Video from '../../video/video.mp4'
import { Button } from '../ButtonElement'
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper, ArrowForward, ArrowRight } from './HeroElements'

const HeroSection = () => {

    const [hover, setHover] = useState(false)

    const onHover = () => {
        setHover(!hover)
    }

    return (
        <HeroContainer>
            <HeroBg>
                <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
            </HeroBg>
            <HeroContent>
                <HeroH1>Welcome to My Personal Portfolio</HeroH1>
                <HeroP>
                    I am pursuing a Bachelors of Science in Computer
                    Science and this is my final exam submission for GRPH210
                </HeroP>
                <HeroBtnWrapper>
                    <Button
                        onClick={() => window.open('http://www.linkedin.com/in/zachary-davis-33b98899')}
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary='true'
                        dark='true'
                    >
                        Linked In {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </HeroBtnWrapper>
            </HeroContent>
        </HeroContainer>
    )
}

export default HeroSection
