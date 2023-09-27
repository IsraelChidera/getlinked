// import { NavLink } from 'react-router-dom';
// import Container from '../elements/Container';
import Button from '../elements/Button';
import lens1 from '../../assets/lens-1.png';
import line from '../../assets/line.svg';
import star from '../../assets/star.png';
import heroImg from '../../assets/hero-img.png';
import bubbles from '../../assets/bubbles.png';
import chain from '../../assets/chain.svg';
import fire from '../../assets/fire.svg';
import bulb from '../../assets/bulb.svg';
import Typewriter from '../../utilities/Typewriter';


const Hero = () => {
    return (
        <header className='relative pt-10 border-b border-b-gray-500/50 '>
            <img className='absolute z-10 -top-40 -left-20' src={lens1} alt="lens" />

            <div className='flex justify-end pr-24'>
                <div className=''>
                    {/* <p className='md:text-base text-sm'>
                        Igniting a Revolution in HR Innovation
                    </p> */}
                    <Typewriter text="Igniting a Revolution in HR Innovation " delay={200}  />
                    <img className='' src={line} alt="line icon" />
                </div>
            </div>

            <div className='md:grid grid-cols-2 pt-20'>

                <div className='flex justify-center items-center relative'>
                    <img src={star} alt="star" className='absolute -top-4 left-20' />
                    <div className='relative md:z-50 '>
                        <div>
                            <h1 className='text-center md:text-left text-2xl md:text-6xl font-bold md:relative'>
                                <span>getlinked Tech</span>
                                <img className='hover:animate-pulse absolute md:-top-14 -top-6 md:right-28 right-20 md:w-12 w-6 ' src={bulb} alt="chain" />
                            </h1>
                            <div className='text-2xl md:text-6xl font-bold flex space-x-2 items-center'>
                                <h1>
                                    Hackathon <span className='text-primary'> 1.0 </span>
                                </h1>
                                <img className='hover:animate-bounce md:w-10 w-5 md:h-15 h-10' src={chain} alt="chain" />
                                <img className='w-10 h-15 hover:animate-pulse' src={fire} alt="fire spark" />
                            </div>
                        </div>

                        <p className='md:text-sm text-xs text-center md:text-left mt-4'>
                            Participate in getlinked tech Hackathon 2023 stand <br />
                            a chance to win a Big prize
                        </p>

                        <Button className='mt-6 md:block hidden'>
                            Register
                        </Button>

                        <div className='md:hidden flex justify-center items-center'>
                            <Button className='mt-6 '>
                                Register
                            </Button>
                        </div>

                        <div className='md:mt-20 mt-6 mb-10 md:mb-0 flex justify-center md:justify-start space-x-6'>
                            <p>
                                <span className='text-2xl md:text-5xl'>00</span>
                                <span className='text-xs'>H</span>
                            </p>

                            <p>
                                <span className='text-2xl md:text-5xl'>00</span>
                                <span className='text-xs'>M</span>
                            </p>

                            <p>
                                <span className='text-2xl md:text-5xl'>00</span>
                                <span className='text-xs'>S</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img className='z-10 relative md:w-fit md:h-fit imageHero' src={heroImg} alt="hero image" />
                    <img className='z-20 absolute -top-10 left-0 animate-pulse' src={bubbles} alt="bubbles" />
                </div>
            </div>
        </header>
    )
}

export default Hero