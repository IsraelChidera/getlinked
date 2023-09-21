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

const Hero = () => {
    return (
        <header className='relative pt-10 border-b border-b-gray-500/50 '>
            <img className='absolute z-10 -top-40 -left-20' src={lens1} alt="lens" />

            <div className='flex justify-end pr-10'>
                <div className='relative'>
                    <p>
                        Igniting a Revolution in HR Innovation
                    </p>
                    <img className='absolute -bottom-5 right-5' src={line} alt="line icon" />
                </div>
            </div>

            <div className='grid grid-cols-2 pt-20'>

                <div className='flex justify-center items-center relative'>
                    <img src={star} alt="star" className='absolute -top-4 left-20' />
                    <div className='relative z-50'>
                        <div>
                            <h1 className='text-6xl font-bold relative'>
                                <span>getlinked Tech</span>
                                <img className=' absolute -top-14 right-28 ' src={bulb} alt="chain" />
                            </h1>
                            <div className='text-6xl font-bold flex space-x-2 items-center'>
                                <h1>
                                    Hackathon <span className='text-primary'> 1.0 </span>
                                </h1>
                                <img className='w-10 h-15' src={chain} alt="chain" />
                                <img className='w-10 h-15' src={fire} alt="fire spark" />
                            </div>
                        </div>

                        <p className='text-sm mt-4'>
                            Participate in getlinked tech Hackathon 2023 stand <br />
                            a chance to win a Big prize
                        </p>

                        <Button className='mt-6'>
                            Register
                        </Button>

                        <div className='mt-20 flex space-x-6'>
                            <p>
                                <span className='text-5xl'>00</span>
                                <span className='text-xs'>H</span>
                            </p>

                            <p>
                                <span className='text-5xl'>00</span>
                                <span className='text-xs'>M</span>
                            </p>

                            <p>
                                <span className='text-5xl'>00</span>
                                <span className='text-xs'>S</span>
                            </p>
                        </div>
                    </div>
                </div>

                <div className='relative'>
                    <img className='z-10 relative' src={heroImg} alt="hero image" />
                    <img className='z-20 absolute -top-10 left-0' src={bubbles} alt="bubbles" />
                </div>
            </div>
        </header>
    )
}

export default Hero