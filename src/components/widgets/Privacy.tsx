
import Container from '../elements/Container';
import Card from '../elements/Card';
import faqBrightStar from '../../assets/faq-bright-star.png';
import lens from '../../assets/privacy-lens.png';
import lock from '../../assets/lock-img.png';
import lockSign from '../../assets/lock-sign.png';

const Privacy = () => {
    return (
        <div className='relative'>
            <img className='absolute z-50 bottom-10 left-0 inset-x-1/2' src={faqBrightStar} alt="faq image" />
            <img className='absolute z-50 top-10 inset-x-1/2' src={faqBrightStar} alt="faq image" />
            <img className='absolute z-10 -bottom-40 left-0' src={lens} alt="blur image" />
            <Card>
                <Container className='grid grid-cols-2 gap-x-2'>
                    <div className='flex items-center justify-center relative'>
                        <div className='relative z-20'>
                            <h2 className='text-4xl relative font-bold'>
                                <span>
                                    Privacy Policy and
                                </span> <br />
                                <span className='text-primary'>
                                    Terms
                                </span>
                            </h2>

                            <p className='text-xs mt-2'>
                                Last updated on September 12, 2023
                            </p>

                            <p className='text-sm mt-6 leading-7'>
                                Below are our privacy & policy, which outline a lot of goodies.
                                it's our aim to always take of our participant
                            </p>

                        </div>

                    </div>

                    <div className='flex items-center relative justify-center'>
                        <div>
                            <img src={lock} alt="icon"  className='relative z-40'/>
                            <img src={lockSign} alt="lock sign" className='absolute z-10 top-0 left-2'/>
                        </div>
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default Privacy