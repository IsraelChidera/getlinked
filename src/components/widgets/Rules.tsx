import Container from '../elements/Container';
import Card from '../elements/Card';
import rulesImg from '../../assets/rules-img.png';
import star1 from '../../assets/rules-star-1.png';
import star2 from '../../assets/rules-star-2.png';
import lens from '../../assets/rules-lens.png';

const Rules = () => {
    return (
        <Card>
            <Container className='md:grid grid-cols-2 gap-x-4'>
                <div className='md:hidden block'>
                    <div className='relative'>

                        <img src={rulesImg} alt="info globe" />

                    </div>
                </div>
                <div className='flex  items-center justify-center relative'>
                    <div className='relative z-20'>
                        <h2 className='text-center md:text-left text-2xl md:text-4xl relative font-bold'>
                            <span>
                                Rules and
                            </span> <br />
                            <span className='text-primary'>
                                Guidelines
                            </span>

                            <img className='absolute top-0 right-40' src={star1} alt="star icon" />
                        </h2>

                        <p className='text-xs  md:text-sm mt-6 leading-7 '>
                            Our tech hackathon is a melting pot of visionaries, and its purpose is as
                            clear as day: to shape the future. Whether you're a coding genius, a
                            design maverick, or a concept wizard, you'll have the chance to transform
                            your ideas into reality. Solving real-world problems, pushing the boundaries
                            of technology, and creating solutions that can change the world,
                            that's what we're all about!
                        </p>

                        <img className='absolute bottom-0 right-0' src={star2} alt="star icon" />
                    </div>

                    <img className='absolute z-10 -top-10 left-0 ' src={lens} alt="lens" />
                </div>

                <div className='md:block hidden'>
                    <div className='relative'>

                        <img src={rulesImg} alt="info globe" />

                    </div>
                </div>
            </Container>
        </Card>
    )
}

export default Rules