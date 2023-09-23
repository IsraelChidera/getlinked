import Container from '../elements/Container';
import Card from '../elements/Card';
import line3 from '../../assets/line-3.png';
import line4 from '../../assets/line-4.png';
import ball from '../../assets/ball.png';
import lineMobile from '../../assets/line-mobile.png';

const Timeline = () => {
    return (
        <section id="timeline" className='px-3 md:px-0 timeline relative overflow-y-hidden'>
            <Card className='pb-20'>
                <Container>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='text-2xl md:text-4xl font-bold text-center'>Timeline</h1>
                            <p className="text-xs md:text-sm w-80 text-center leading-6 mt-2">Here is the breakdown of the time we anticipate
                                using for the upcoming event.</p>
                        </div>
                    </div>

                    <div className='hidden md:block mt-40'>
                        <div className='grid grid-cols-5 gap-x-6'>
                            <div className='col-span-2 text-right'>
                                <h3 className='text-lg text-primary font-bold'>Hackathon Announcement</h3>
                                <p className='mt-2 text-xs'>
                                    The getlinked tech hackathon 1.0 is formally announced
                                    to the general public and teams begin to get ready to register
                                </p>
                            </div>

                            <div className='col-span-1 flex relative justify-center items-center'>
                                <img className=' md:z-20' src={ball} alt="ball" />
                                <p className='abs md:z-50 text-3xl '>1</p>
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
                                <img className=' md:z-20' src={ball} alt="ball" />
                                <p className='abs md:z-50 text-3xl '>2</p>
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
                                <img className=' md:z-20' src={ball} alt="ball" />
                                <p className='abs md:z-50 text-3xl '>3</p>
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
                                <img className=' md:z-20' src={ball} alt="ball" />
                                <p className='abs md:z-50 text-3xl '>4</p>
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
                                <img className=' md:z-20' src={ball} alt="ball" />
                                <p className='abs md:z-50 text-3xl '>6</p>
                            </div>

                            <div className='col-span-2 text-left'>
                                <h3 className='text-lg text-primary font-bold'> Demo Day </h3>
                                <p className='mt-2 text-xs'>
                                    Teams get the opportunity to pitch their projects to judges. The winner of the hackathon will also be announced on this day
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='md:hidden block mt-20'>
                        <div className='space-y-6'>
                            <div className='flex justify-between space-x-4'>
                                <div className=''>
                                    <div className='flex items-center justify-center'>
                                        <img src={lineMobile} alt="line mobile" />
                                    </div>
                                    <div className='pt-2 relative'>

                                        <p className='bg-primary text-xs rounded-full p-1'>1</p>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <h3 className='text-base text-primary font-bold'>Hackathon Announcement</h3>
                                    <p className='mt-2 text-xs'>
                                        The getlinked tech hackathon 1.0 is formally announced
                                        to the general public and teams begin to get ready to register
                                    </p>

                                    <h3 className='text-sm mt-2 text-primary font-bold'>November 18, 2023</h3>
                                </div>
                            </div>

                            <div className='flex justify-between space-x-4'>
                                <div className=''>
                                    <div className='flex items-center justify-center'>
                                        <img src={lineMobile} alt="line mobile" />
                                    </div>
                                    <div className='pt-2 relative'>

                                        <p className='bg-primary text-xs rounded-full p-1'>2</p>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <h3 className='text-base text-primary font-bold'>Teams Registration begins</h3>
                                    <p className='mt-2 text-xs'>
                                        Interested teams can now show their interest
                                        in the getlinked tech hackathon 1.0 2023
                                        by proceeding to register
                                    </p>

                                    <h3 className='text-sm mt-2 text-primary font-bold'>November 18, 2023</h3>
                                </div>
                            </div>

                            <div className='flex justify-start space-x-4 '>
                                <div className=''>
                                    <div className='flex items-center justify-center'>
                                        <img src={lineMobile} alt="line mobile" />
                                    </div>
                                    <div className='pt-2 relative'>

                                        <p className='bg-primary text-xs rounded-full p-1'>3</p>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between items-start'>
                                    <h3 className='text-base text-primary font-bold'>Teams Registration ends</h3>
                                    <p className='mt-2 text-xs'>
                                        Interested Participants are no longer Allowed to register
                                    </p>

                                    <h3 className='text-sm mt-2 text-primary font-bold'>November 18, 2023</h3>
                                </div>
                            </div>

                            <div className='flex justify-between space-x-4'>
                                <div className=''>
                                    <div className='flex items-center justify-center'>
                                        <img src={lineMobile} alt="line mobile" />
                                    </div>
                                    <div className='pt-2 relative'>

                                        <p className='bg-primary text-xs rounded-full p-1'>3</p>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <h3 className='text-base text-primary font-bold'> Announcement of the accepted teams and ideas </h3>
                                    <p className='mt-2 text-xs'>
                                        All teams whom idea has been accepted into
                                        getlinked tech hackathon 1.0 2023 are formally announced
                                    </p>

                                    <h3 className='text-sm mt-2 text-primary font-bold'>November 18, 2023</h3>
                                </div>
                            </div>

                            <div className='flex justify-between space-x-4'>
                                <div className=''>
                                    <div className='flex items-center justify-center'>
                                        <img src={lineMobile} alt="line mobile" />
                                    </div>
                                    <div className='pt-2 relative'>

                                        <p className='bg-primary text-xs rounded-full p-1'>5</p>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <h3 className='text-base text-primary font-bold'>  Getlinked Hackathon 1.0 Offically Begins </h3>
                                    <p className='mt-2 text-xs'>
                                        Accepted teams can now proceed to build their ground breaking skill driven solutions
                                    </p>

                                    <h3 className='text-sm mt-2 text-primary font-bold'>November 18, 2023</h3>
                                </div>
                            </div>

                            <div className='flex justify-between space-x-4'>
                                <div className=''>
                                    <div className='flex items-center justify-center'>
                                        <img src={lineMobile} alt="line mobile" />
                                    </div>
                                    <div className='pt-2 relative'>

                                        <p className='bg-primary text-xs rounded-full p-1'>6</p>
                                    </div>
                                </div>

                                <div className='flex flex-col justify-between'>
                                    <h3 className='text-base text-primary font-bold'>  Getlinked Hackathon 1.0 Offically Begins </h3>
                                    <p className='mt-2 text-xs'>
                                        Accepted teams can now proceed to build their ground breaking skill driven solutions
                                    </p>

                                    <h3 className='text-sm mt-2 text-primary font-bold'>November 18, 2023</h3>
                                </div>
                            </div>

                        </div>
                    </div>

                </Container>
            </Card>
        </section>
    )
}

export default Timeline