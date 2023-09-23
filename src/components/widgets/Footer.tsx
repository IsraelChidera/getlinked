
import logo from '/logo.svg';
import twitter from '../../assets/twitter.png';
import linkedin from '../../assets/linkedin.png';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import call from '../../assets/call.png';
import location from '../../assets/location.png';
import whiteStar from '../../assets/star.png';
import brightStar from '../../assets/star2.png';
import logofooter from '../../assets/logofooter.png';
import dullStar from '../../assets/rules-star-1.png';

const Footer = () => {
    return (
        <footer className='relative' style={{ background: "#100B20" }}>
            <img src={whiteStar} alt="star" className='absolute top-10 left-6' />
            <div className='relative mx-auto md:w-10/12 py-20'>

                <div className='md:grid space-y-6 md:space-y-0 md:p-0 p-4 md:grid-cols-4 gap-x-4'>
                    <div className='relative flex col-span-2 flex-col justify-between'>
                        <div>
                            <img src={logo} alt="logo"  className='md:block hidden '/>
                            <img src={logofooter} alt="logo" className='md:hidden block' />
                            <p className='text-xs mt-3 md:mt-0'>
                                Getlinked Tech Hackathon is a technology innovation program
                                established by a group of organizations with the aim of showcasing
                                young and talented individuals in the field of technology
                            </p>
                        </div>

                        <div className='flex mt-10 md:mt-0 text-xs items-center space-x-4 '>
                            <p className='border-r border-primary pr-2'>Terms of Use</p>
                            <p className='pl-2'>Privacy Policy</p>
                        </div>
                    </div>

                    <div className='relative'>
                        <img src={brightStar} alt="star" className='absolute bottom-0 -left-10' />
                        <div>
                            <ul className='space-y-4'>
                                <li className='text-sm font-bold text-primary'>
                                    Useful Links
                                </li>

                                <li className='text-xs'>
                                    Overview
                                </li>

                                <li className='text-xs'>
                                    Timeline
                                </li>

                                <li className='text-xs'>
                                    FAQs
                                </li>

                                <li className='text-xs'>
                                    Register
                                </li>
                            </ul>

                            <div className='mt-4 text-xs flex items-center space-x-2'>
                                <p>Follow us</p>

                                <img src={instagram} alt="instagram icon" />
                                <img src={twitter} alt="twitter icon" />
                                <img src={facebook} alt="facebook icon" />
                                <img src={linkedin} alt="linkedin icon" />
                            </div>
                        </div>

                        <img src={dullStar} alt="star" className='absolute top-0 right-0' />
                    </div>

                    <div className='relative pt-10 md:pt-0 '>
                        <img src={whiteStar} alt="star" className='absolute bottom-0 right-0' />

                        <ul className='space-y-4'>
                            <li className='text-sm font-bold text-primary'>
                                Contact us
                            </li>

                            <li className='flex text-xs items-center space-x-2'>
                                <img src={call} alt="call icon" />
                                <span>
                                    Call
                                </span>
                            </li>

                            <li className='flex text-xs items-start space-x-2'>
                                <img src={location} alt="location icon" />
                                <span>
                                    27,Alara Street <br />
                                    Yaba 100012 <br />
                                    Lagos State
                                </span>
                            </li>
                        </ul>

                    </div>

                </div>

                <p className='text-xs text-center pt-16'>
                    All rights reserved. © getlinked Ltd.
                </p>
            </div>
        </footer>
    )
}

export default Footer