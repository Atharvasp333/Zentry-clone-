import React from 'react'
import Button from './Button'


const ImageClipBox = ({ src, clipClass }) => {
    return (
        <div className={clipClass}>
            <img
                src={src}
            />
        </div>
    )
}

const Contact = () => {
    return (
        <div id='contact' className='my-20 min-h-96 w-screen px-10'>
            <div className='relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden'>
                <div className='absolute -left-20 top-0 h-full hidden overflow-hidden sm:block lg:left-20 lg:w-96'>
                    <ImageClipBox
                        src='img/contact-1.webp'
                        clipClass='contact-clip-path-1'
                    />
                    <ImageClipBox
                        src='img/contact-2.webp'
                        clipClass='contact-clip-path-2 lg:translate-y-40 translate-y-60'
                    />
                </div>
                <div className='absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80'>
                    <ImageClipBox
                        src='img/swordman-partial.webp'
                        clipClass='absolute md:scale-125'
                    />
                    <ImageClipBox
                        src='img/swordman.webp'
                        clipClass='sword-man-clip-path md:scale-125'
                    />
                </div>
                <div className='flex flex-col items-center text-center '>
                    <p className='font-general text-[10px] uppercase'>Join Zentry</p>
                    <p className='special-font font-zentry mt-10 w-full text-5xl leading-[0.9] md:text-[6rem]'>Let's B<b>u</b>ild the<br />ne<b>w</b> era of <br /> G<b>a</b>ming t<b>o</b>gether</p>
                    <Button title='Contact Us' 
                    containerClass='mt-10 cursor-pointer' />
                </div>
            </div>
        </div>
    )
}

export default Contact