import Container from '../elements/Container';
import Card from '../elements/Card';
import heroImg from '../../assets/hero-img2.png';
import arrow from '../../assets/arrow.png';
import star2 from '../../assets/star2.png';
import star3 from '../../assets/star3.png';

const Introduction = () => {
    return (
        <Card>
            <Container className='md:grid grid-cols-2'>
                <div className='relative'>
                    <img className='absolute top-10 left-0' src={star2} alt="star icon" />
                    <img className='px-10 md:px-0 mx-auto w-10/12 ' src={heroImg} alt="info globe" />
                    <img className='absolute bottom-0 right-0' src={arrow} alt="arrow icon" />
                </div>

                <div className='mt-6 md:mt-0 flex items-center justify-center'>
                    <div>
                        <h2 className='text-2xl md:text-4xl text-center md:text-left relative font-bold'>
                            <span>
                                Introduction to getlinked
                            </span> <br />
                            <span className='text-primary'>
                                tech Hackathon 1.0
                            </span>

                            <img className='absolute top-1 right-10' src={star3} alt="star icon" />
                        </h2>

                        <p className='text-xs md:text-left text-center p-4 md:p-0 md:text-sm mt-6 leading-7'>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a
                            design maverick, or a concept wizard, you'll have the chance to transform
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>
                    </div>

                    
                </div>
            </Container>
        </Card>
    )
}

export default Introduction