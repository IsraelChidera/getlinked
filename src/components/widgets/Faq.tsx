import Container from '../elements/Container';
import Card from '../elements/Card';
import star1 from '../../assets/rules-star-1.png';
// import star2 from '../../assets/rules-star-2.png';
import brightStar from '../../assets/attributes-star.png';
import faqImg from '../../assets/faq-img.png';
import faq1 from '../../assets/faq-1.png';
import faq2 from '../../assets/faq-2.png';
import faq3 from '../../assets/faq-3.png';
import faqBrightStar from '../../assets/faq-bright-star.png';
import faqBrightStar2 from '../../assets/faq-bright-star-2.png';
import plus from '../../assets/plus-icon.png';

const Faq = () => {
    return (
        <section id="faq">
            <Card>
                <Container className='grid grid-cols-2 gap-x-10'>
                    <div className='flex items-center justify-center relative'>
                        <div className='relative z-20'>
                            <img className='absolute -top-10 left-8' src={brightStar} alt="star icon" />
                            <h2 className='text-4xl relative font-bold'>
                                <span>
                                    Frequently Ask
                                </span> <br />
                                <span className='text-primary'>
                                    Question
                                </span>

                                
                            </h2>

                            <p className='text-sm mt-6 leading-7'>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </p>

                            <div className='mt-10 text-sm'>
                                <ul className='space-y-10'>
                                    <li className='flex border-b border-primary pb-3 items-center justify-between'>
                                        <p> Can I work on a project I started before the hackathon? </p>
                                        <img src={plus} alt="plus icon" />
                                    </li>

                                    <li className='flex border-b border-primary pb-3 items-center justify-between'>
                                        <p> What happens if I need help during the hackathon? </p>
                                        <img src={plus} alt="plus icon" />
                                    </li>

                                    <li className='flex border-b border-primary pb-3 items-center justify-between'>
                                        <p> What happens if I don't have an idea for a project? </p>
                                        <img src={plus} alt="plus icon" />
                                    </li>

                                    <li className='flex border-b border-primary pb-3 items-center justify-between'>
                                        <p> Can I join a team or do I have to come with one? </p>
                                        <img src={plus} alt="plus icon" />
                                    </li>

                                    <li className='flex border-b border-primary pb-3 items-center justify-between'>
                                        <p> What happens after the hackathon ends?</p>
                                        <img src={plus} alt="plus icon" />
                                    </li>

                                    <li className='flex border-b border-primary pb-3 items-center justify-between'>
                                        <p> Can I work on a project I started before the hackathon? </p>
                                        <img src={plus} alt="plus icon" />
                                    </li>
                                </ul>
                            </div>



                            {/* <img className='absolute bottom-0 right-0' src={star2} alt="star icon" /> */}
                        </div>

                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='relative'>
                        <img className='absolute bottom-0 left-0' src={star1} alt="star icon" />
                            <img className='absolute top-0 right-0' src={faqBrightStar} alt="faq image" />
                            <img className='absolute inset-x-2/4' src={faqBrightStar2} alt="faq image" />
                            <img src={faqImg} alt="faq image" />
                            <img className='absolute top-0 left-0' src={faq1} alt="faq image" />
                            <img className='absolute -top-10 left-40' src={faq2} alt="faq image" />
                            <img className='absolute -top-10 right-40' src={faq3} alt="faq image" />
                        </div>
                    </div>
                </Container>
            </Card>
        </section>
    )
}

export default Faq