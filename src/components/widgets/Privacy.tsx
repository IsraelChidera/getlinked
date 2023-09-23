
import Container from '../elements/Container';
import faqBrightStar from '../../assets/faq-bright-star.png';
import lens from '../../assets/privacy-lens.png';
import lock from '../../assets/lock-img.png';
import lockSign from '../../assets/lock-sign.png';
import dots from '../../assets/green-dots.png';
import Button from '../elements/Button';

const Privacy = () => {
    return (
        <div className='relative '>
            <img className='absolute z-40 bottom-10 left-0 inset-x-1/2' src={faqBrightStar} alt="faq image" />
            <img className='absolute z-40 top-10 inset-x-1/2' src={faqBrightStar} alt="faq image" />
            <img className='absolute z-10 top-40 -left-20' src={lens} alt="blur image" />
            <div className='my-10'>
                <Container className='md:grid p-4 md:p-0 grid-cols-2 gap-x-2 py-24'>
                    <div className='flex items-center justify-center relative'>
                        <div className='relative z-20'>
                            <h2 className='text-2xl text-center md:text-left md:text-4xl relative font-bold'>
                                <span>
                                    Privacy Policy and
                                </span> <br  />
                                <span className='text-primary'>
                                    Terms
                                </span>
                            </h2>

                            <p className='text-center md:text-left text-xs mt-2'>
                                Last updated on September 12, 2023
                            </p>

                            <p className='text-center md:text-left text-sm mt-6 leading-7'>
                                Below are our privacy & policy, which outline a lot of goodies.
                                it's our aim to always take of our participant
                            </p>

                            <div className='mt-10'>
                                <div
                                    className='relative md:z-50 rounded-md py-16 px-4 md:px-16'
                                    style={{ background: "#d9d9d908", border: "1px solid #d434fe", }}
                                >
                                    <p className='text-sm'>
                                        At getlinked tech Hackathon 1.0, we value your privacy
                                        and are committed to protecting your personal information.
                                        This Privacy Policy outlines how we collect, use, disclose,
                                        and safeguard your data when you participate in our tech
                                        hackathon event. By participating in our event, you consent
                                        to the practices described in this policy.
                                    </p>

                                    <div className='mt-10'>
                                        <p className='text-sm font-bold text-primary'> Licensing Policy </p>
                                        <p> Here are terms of our Standard License: </p>

                                        <ul className='mt-4 space-y-4'>
                                            <li className='flex items-start space-x-2'>
                                                <img src={dots} alt="green dots" />
                                                <span className='leading-6 text-sm'>
                                                    The Standard License grants you a non-exclusive right to
                                                    navigate and register for our event
                                                </span>
                                            </li>

                                            <li className='flex items-start space-x-2'>
                                                <img src={dots} alt="green dots" />
                                                <span className='leading-6 text-sm'>
                                                    You are licensed to use the item available at any free source
                                                    sites, for your project developement
                                                </span>
                                            </li>

                                            <div className='flex items-center justify-center text-center'>
                                                <Button>
                                                    Read More
                                                </Button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='flex mt-6 md:mt-0  items-center relative justify-center'>
                        <div>
                            <img src={lock} alt="icon" className='relative z-40' />
                            <img src={lockSign} alt="lock sign" className='absolute z-10 top-0 md:left-20' />
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Privacy