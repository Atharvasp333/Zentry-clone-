import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React from 'react'
import AnimatedTitle from './AnimatedTitle'
import {ScrollTrigger} from 'gsap/all'

gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id='about' className='min-h-screen w-screen'>
            <div className='relative mb-8 mt-36 flex flex-col items-center gap-5'>
                <h2 className='font-general text-sm uppercase md:[text-10px]'>welcome to zentry</h2>

                <AnimatedTitle title="Discover the world's largest shared adventure" containerClass="mt-5 !text-black text-center"/>

                <div className='about-subtext'>
                    <p>The Game of Games begins—your life, now an epic MMORPG</p>
                    <p className="text-gray-500">
                        Zentry unites every player from countless games and platforms, both
                        digital and physical, into a unified Play Economy
                    </p>
                </div>
            </div>
            <div className='h-dvh w-screen' id='clip'>
                <div className='mask-clip-path about-image'>
                    <img
                        src='img/about.webp'
                        alt='background'
                        className='absolute left-0 top-0 size-full object-cover'
                    />
                </div>
            </div>
        </div>
    )
}

export default About
