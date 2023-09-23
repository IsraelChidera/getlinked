import Container from '../elements/Container';
import Card from '../elements/Card';
import line3 from '../../assets/line-3.png';
import line4 from '../../assets/line-4.png';
import ball from '../../assets/ball.png';

const Timeline = () => {
    return (
        <section id="timeline">
            <Card className='pb-20'>
                <Container>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='text-4xl font-bold text-center'>Timeline</h1>
                            <p className="text-sm w-80 text-center leading-6 mt-2">Here is the breakdown of the time we anticipate
                                using for the upcoming event.</p>
                        </div>
                    </div>

                    <div className='mt-40'>
                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                                <h3 className='text-lg text-primary font-bold'>Hackathon Announcement</h3>
                                <p className='mt-2 text-xs'>
                                    The getlinked tech hackathon 1.0 is formally announced
                                    to the general public and teams begin to get ready to register
                                </p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' z-20' src={ball} alt="ball" />
                                <p className='abs z-50 text-3xl '>1</p>
                                <img src={line3} alt="line" className='abs -top-16' />
                            </div>

                            <div className='col-span-2 flex items-center'>
                                <p className='text-lg font-bold text-primary'> November 18, 2023</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img src={line4} alt="" />
                            </div>

                            <div className='col-span-2 flex items-center'>

                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>

                            <div className='col-span-2 flex items-center justify-end'>
                                <p className='text-lg font-bold text-primary'> November 18, 2023</p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' z-20' src={ball} alt="ball" />
                                <p className='abs z-50 text-3xl '>2</p>
                            </div>

                            <div className='col-span-2 text-left'>
                                <h3 className='text-lg text-primary font-bold'>Teams Registration begins</h3>
                                <p className='mt-2 text-xs'>
                                    Interested teams can now show their interest in the getlinked tech hackathon 1.0 2023 by proceeding to register
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img src={line4} alt="" />
                            </div>

                            <div className='col-span-2 flex items-center'>

                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                                <h3 className='text-lg text-primary font-bold'>Teams Registration ends</h3>
                                <p className='mt-2 text-xs'>
                                    Interested Participants are no longer Allowed to register
                                </p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' z-20' src={ball} alt="ball" />
                                <p className='abs z-50 text-3xl '>3</p>
                                <img src={line3} alt="line" className='abs -top-16' />
                            </div>

                            <div className='col-span-2 flex items-center'>
                                <p className='text-lg font-bold text-primary'> November 18, 2023</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img src={line4} alt="" />
                            </div>

                            <div className='col-span-2 flex items-center'>

                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>

                            <div className='col-span-2 flex items-center justify-end'>
                                <p className='text-lg font-bold text-primary'> November 18, 2023</p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' z-20' src={ball} alt="ball" />
                                <p className='abs z-50 text-3xl '>4</p>
                            </div>

                            <div className='col-span-2 text-left'>
                                <h3 className='text-lg text-primary font-bold'>Announcement of the accepted teams and ideas</h3>
                                <p className='mt-2 text-xs'>
                                    All teams whom idea has been accepted into getlinked tech hackathon 1.0 2023 are formally announced
                                </p>
                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img src={line4} alt="" />
                            </div>

                            <div className='col-span-2 flex items-center'>

                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                                <h3 className='text-lg text-primary font-bold'>Getlinked Hackathon 1.0 Offically Begins</h3>
                                <p className='mt-2 text-xs'>
                                    Accepted teams can now proceed to build their ground breaking skill driven solutions
                                </p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' z-20' src={ball} alt="ball" />
                                <p className='abs z-50 text-3xl '>5</p>
                                <img src={line3} alt="line" className='abs -top-16' />
                            </div>

                            <div className='col-span-2 flex items-center'>
                                <p className='text-lg font-bold text-primary'> November 18, 2023</p>
                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img src={line4} alt="" />
                            </div>

                            <div className='col-span-2 flex items-center'>

                            </div>
                        </div>

                        <div className='grid grid-cols-5 gap-x-6'>

                            <div className='col-span-2 flex items-center justify-end'>
                                <p className='text-lg font-bold text-primary'> November 18, 2023</p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' z-20' src={ball} alt="ball" />
                                <p className='abs z-50 text-3xl '>6</p>
                            </div>

                            <div className='col-span-2 text-left'>
                                <h3 className='text-lg text-primary font-bold'> Demo Day </h3>
                                <p className='mt-2 text-xs'>
                                    Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                                </p>
                            </div>
                        </div>
                    </div>
                </Container>
            </Card>
        </section>
    )
}

export default Timeline