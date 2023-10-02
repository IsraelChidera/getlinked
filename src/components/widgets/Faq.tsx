import { useState } from 'react';
import Container from '../elements/Container';
import Card from '../elements/Card';
import star1 from '../../assets/rules-star-1.png';
import brightStar from '../../assets/attributes-star.png';
import faqImg from '../../assets/faq-img.png';
import faq1 from '../../assets/faq-1.png';
import faq2 from '../../assets/faq-2.png';
import faq3 from '../../assets/faq-3.png';
import faqBrightStar from '../../assets/faq-bright-star.png';
import faqBrightStar2 from '../../assets/faq-bright-star-2.png';
import plus from '../../assets/plus-icon.png';

const faqItems = [
    {
        question: "Can I work on a project I started before the hackathon?",
        answer: `Yes, in most cases, participants are allowed to continue 
        working on projects they started before the hackathon. 
        However, it's essential to review the specific rules and 
        guidelines provided by the hackathon organizers as rules may 
        vary. Ensure your project aligns with the hackathon's theme 
        and adhere to any relevant guidelines to participate successfully.`
    },
    {
        question: "What happens if I need help during the hackathon?",
        answer: `If you require assistance during the hackathon, 
        you're in luck! Most hackathons have a support system 
        in place to help participants. You can usually reach out to 
        mentors, organizers, or fellow participants for guidance. 
        Don't hesitate to ask questions or seek help when you encounter 
        challenges. Collaboration and learning from others are often 
        encouraged during hackathons.`
    },
    {
        question: `What happens if I don't have an idea for a project?`,
        answer: `Not having a project idea is absolutely fine! 
        Many hackathons welcome participants without preconceived 
        project ideas. You can join a team and brainstorm ideas 
        collectively. Alternatively, hackathons often have theme 
        challenges or problem statements that you can choose to 
        work on. It's a great opportunity to explore new concepts
         and collaborate with others.`
    },
    {
        question: `Can I join a team or do I have to come with one?`,
        answer: `You can do either! Most hackathons allow participants 
        to form teams at the event if they haven't come with one. 
        If you have a team, that's fantastic, but if you're attending 
        solo, you'll have the chance to meet like-minded individuals 
        and collaborate on exciting projects. It's a flexible and 
        inclusive environment.`
    },
    {
        question: `What happens after the hackathon ends?`,
        answer: `After the hackathon concludes, you typically 
        have the opportunity to showcase your project to judges
         or the community, depending on the event. There are 
         often awards, prizes, and recognition for outstanding
          projects. Additionally, you can continue working on 
          your project, refine it further, and potentially turn
           it into a real-world application or startup.`
    },
    {
        question: `Can I work on a project I started before the hackathon?`,
        answer: `In many cases, participants are allowed to work 
        on projects they initiated before the hackathon begins. 
        However, it's essential to review the specific rules and 
        guidelines provided by the hackathon organizers, as rules 
        may vary from one event to another. Ensure that your project
         aligns with the hackathon's theme (if any) and adheres to 
         any relevant guidelines to participate successfully.`
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleFaqClick = (index: any) => {
        if (openIndex === index) {
            setOpenIndex(null)
        } else {
            setOpenIndex(index)
        }
    }
    return (
        <section id="faq">
            <Card>
                <Container className='md:grid md:p-0 p-4 grid-cols-2 gap-x-10'>
                    <div className='flex items-center justify-center relative'>
                        <div className='relative z-20'>
                            <img className='absolute -top-10 left-8' src={brightStar} alt="star icon" />
                            <h2 className='text-center md:text-left text-2xl md:text-4xl relative font-bold'>
                                <span>
                                    Frequently Ask
                                </span> <br />
                                <span className='text-primary'>
                                    Question
                                </span>


                            </h2>

                            <p className='text-center md:text-left text-xs md:text-sm mt-6 leading-7'>
                                We got answers to the questions that you might
                                want to ask about getlinked Hackathon 1.0
                            </p>

                            <div className='mt-10 text-sm'>
                                <ul className='space-y-10'>

                                    {
                                        faqItems.map((items, index) => (
                                            <>
                                                <div key={index}>
                                                    <li data-aos="fade-up" className='flex border-b border-primary pb-3 items-center justify-between'>
                                                        <p> {items.question} </p>
                                                        <img src={plus} alt="plus icon" className='cursor-pointer' onClick={() => handleFaqClick(index)} />
                                                    </li>

                                                    {
                                                        openIndex === index && (
                                                            <div data-aos="fade-down" className={` bg-primary text-black md:text-base text-sm font-bold p-2`}>
                                                                {items.answer}
                                                            </div>
                                                        )
                                                    }

                                                </div>
                                            </>
                                        ))
                                    }

                                </ul>
                            </div>



                            {/* <img className='absolute bottom-0 right-0' src={star2} alt="star icon" /> */}
                        </div>

                    </div>

                    <div className='md:mt-0 mt-20 flex items-center justify-center'>
                        <div className='relative'>
                            <img className='absolute animate-pulse bottom-0 left-0' src={star1} alt="star icon" />
                            <img className='animate-pulse absolute top-0 right-0' src={faqBrightStar} alt="faq image" />
                            <img className='absolute animate-pulse inset-x-2/4' src={faqBrightStar2} alt="faq image" />
                            <img src={faqImg} alt="faq image" />
                            <img className='absolute animate-bounce top-0 left-0' src={faq1} alt="faq image" />
                            <img className='absolute animate-bounce -top-10 left-40' src={faq2} alt="faq image" />
                            <img className='absolute animate-bounce -top-10 right-40' src={faq3} alt="faq image" />
                        </div>
                    </div>
                </Container>
            </Card>
        </section>
    )
}

export default Faq