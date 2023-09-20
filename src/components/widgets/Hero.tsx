import { NavLink } from 'react-router-dom';
import Container from '../elements/Container';
import Button from '../elements/Button';
import lens1 from '../../assets/lens-1.png';
import line from '../../assets/line.svg';
import star from '../../assets/star.png';
import heroImg from '../../assets/hero-img.png';
import bubbles from '../../assets/bubbles.png';

const Hero = () => {
    return (
        <header className='relative pt-10'>
            <img className='absolute z-10 -top-40 -left-20' src={lens1} alt="lens" />

            <div className='flex justify-end pr-10'>
                <div className='relative'>
                    <p>
                        Igniting a Revolution in HR Innovation
                    </p>
                    <img className='absolute -bottom-5 right-5' src={line} alt="line icon" />
                </div>
            </div>

            <img className='absolute z-20 top-0 -left-20' src={star} alt="star" />

            <div className='grid grid-cols-2 pt-20'>
                <div>
                    <h1>
                        getlinked Tech{" "} <br/>
                        Hackathon <span> 1.0 </span>
                    </h1>
                </div>

                <div className='relative'>
                    <img className='z-20 relative' src={heroImg} alt="hero image" />
                    <img className='z-10 absolute top-0 left-0' src={bubbles} alt="bubbles" />
                </div>
            </div>
        </header>
    )
}

export default Hero