import React, { useState, useRef } from 'react';
import { TiLocationArrow } from 'react-icons/ti';

const BentoTilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState('');
    const itemsRef = useRef();

    const handleMouseMove = (e) => {
        if (!itemsRef.current) return;
        const rect = itemsRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - rect.left) / rect.width;
        const relativeY = (e.clientY - rect.top) / rect.height;

        // Reduced sensitivity for smoother animation (5 instead of 50)
        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    };

    return (
        <div 
            className={className} 
            ref={itemsRef} 
            onMouseMove={handleMouseMove} 
            onMouseLeave={handleMouseLeave} 
            style={{
                transform: transformStyle,
                transition: transformStyle ? 'none' : 'transform 0.5s cubic-bezier(0.4, 0.0, 0.2, 1)'
            }}
        >
            {children}
        </div>
    );
};

const BentoCard = ({ src, title, description, isComingSoon = false }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleButtonMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleButtonMouseEnter = () => setHoverOpacity(1);
    const handleButtonMouseLeave = () => setHoverOpacity(0);

    return (
        <div className='relative size-full overflow-hidden rounded-md'>
            <video
                src={src}
                loop
                muted
                autoPlay
                playsInline
                className='absolute left-0 top-0 size-full object-cover object-center'
            />
            <div className='relative z-10 flex size-full flex-col justify-between p-5 text-blue-50'>
                <div>
                    <h1 className='bento-title special-font text-2xl md:text-4xl font-bold mb-3'>
                        {title}
                    </h1>
                    {description && (
                        <p className='mt-3 max-w-64 text-xs md:text-base leading-relaxed opacity-80'>
                            {description}
                        </p>
                    )}
                </div>

                {isComingSoon && (
                    <div
                        ref={hoverButtonRef}
                        onMouseMove={handleButtonMouseMove}
                        onMouseEnter={handleButtonMouseEnter}
                        onMouseLeave={handleButtonMouseLeave}
                        className='relative flex w-fit cursor-pointer items-center gap-2 overflow-hidden rounded-full bg-black/40 backdrop-blur-sm px-4 py-2 text-xs uppercase text-white/60 border border-white/20 hover:border-white/40 transition-all duration-300'
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className='pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 rounded-full'
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, rgba(139, 92, 246, 0.3), rgba(59, 130, 246, 0.1))`,
                            }}
                        />
                        <TiLocationArrow className='relative z-20 text-sm' />
                        <p className='relative z-20 font-medium'>coming soon</p>
                    </div>
                )}
            </div>
        </div>
    );
};

const Features = () => {
    return (
        <section className='bg-black pb-32 md:pb-52 overflow-hidden'>
            <div className='container mx-auto px-4 md:px-10'>
                {/* Header Section */}
                <div className='px-5 py-16 md:py-32'>
                    <p className='font-circular-web text-lg md:text-xl text-blue-50 mb-4'>
                        Into the Metagame Layer
                    </p>
                    <p className='max-w-md font-circular-web text-base md:text-lg opacity-60 text-blue-50 leading-relaxed'>
                        Immerse yourself in a rich and ever-expanding universe where a vibrant
                        array of products converge into an interconnected overlay experience
                        on your world.
                    </p>
                </div>

                {/* Main Feature Card */}
                <BentoTilt className='border-hsla relative h-64 md:h-96 lg:h-[65vh] w-full mb-7 overflow-hidden rounded-md border border-white/10'>
                    <BentoCard
                        src='videos/feature-1.mp4'
                        title={<>radia<b>n</b>t</>}
                        description="A cross-platform metagame app, turning your activities across Web2 and Web3 games into a rewarding adventure."
                        isComingSoon={true}
                    />
                </BentoTilt>

                {/* Grid of Feature Cards */}
                <div className='grid h-auto lg:h-[135vh] w-full grid-cols-1 md:grid-cols-2 grid-rows-none md:grid-rows-3 gap-7'>
                    {/* Zigma Card */}
                    <BentoTilt className='bento-tilt_1 h-64 md:h-auto md:row-span-2 border border-white/10 rounded-md overflow-hidden'>
                        <BentoCard
                            src='videos/feature-2.mp4'
                            title={<>zig<b>m</b>a</>}
                            description="An anime and gaming-inspired NFT collection - the IP primed for expansion."
                            isComingSoon={true}
                        />
                    </BentoTilt>

                    {/* Nexus Card */}
                    <BentoTilt className='bento-tilt_1 h-64 md:h-auto md:row-span-1 ml-0 md:ml-8 lg:ml-32 xl:ml-0 border border-white/10 rounded-md overflow-hidden'>
                        <BentoCard
                            src='videos/feature-3.mp4'
                            title={<>n<b>e</b>xus</>}
                            description="A gamified social hub, adding a new dimension of play to social interaction for Web3 communities."
                            isComingSoon={true}
                        />
                    </BentoTilt>

                    {/* Azul Card */}
                    <BentoTilt className='bento-tilt_1 h-64 md:h-auto md:row-span-1 mr-0 md:mr-4 lg:mr-14 xl:mr-0 border border-white/10 rounded-md overflow-hidden'>
                        <BentoCard
                            src='videos/feature-4.mp4'
                            title={<>az<b>u</b>l</>}
                            description="A cross-world AI Agent - elevating your gameplay to be more fun and productive."
                            isComingSoon={true}
                        />
                    </BentoTilt>

                    {/* Coming Soon Card */}
                    <BentoTilt className='bento-tilt_2 h-64 md:h-auto border border-white/10 rounded-md overflow-hidden'>
                        <div className='flex size-full flex-col justify-between bg-gradient-to-br from-violet-400 via-violet-300 to-purple-300 p-5 relative'>
                            <div className='absolute inset-0 bg-gradient-to-br from-violet-400/90 to-purple-400/90'></div>
                            <h1 className='bento-title special-font max-w-64 text-black text-2xl md:text-3xl font-bold relative z-10'>
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
                            </h1>
                            <TiLocationArrow className='relative z-10 text-black scale-[3] md:scale-[5] self-end m-2 md:m-5 transform hover:scale-[4] md:hover:scale-[6] transition-transform duration-300' />
                        </div>
                    </BentoTilt>

                    {/* Final Video Card */}
                    <BentoTilt className='bento-tilt_2 h-64 md:h-auto border border-white/10 rounded-md overflow-hidden'>
                        <video
                            src='videos/feature-5.mp4'
                            loop
                            muted
                            autoPlay
                            playsInline
                            className='size-full object-cover object-center'
                        />
                    </BentoTilt>
                </div>
            </div>
        </section>
    );
};

export default Features;