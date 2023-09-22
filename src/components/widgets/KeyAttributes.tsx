import Container from '../elements/Container';
import Card from '../elements/Card';
import Button from '../elements/Button';
import attributeImg from '../../assets/attributes-img.png';
import star from '../../assets/attributes-star.png';
import circle from '../../assets/attributes-circle.png';
import lens from '../../assets/attributes-lens.png';
import lens2 from '../../assets/attributes-lens2.png';
import brightStar from '../../assets/rules-star-2.png';
import dullStar from '../../assets/rules-star-1.png';

const KeyAttributes = () => {
    return (
        <section id="overview" className='relative z-20'>
            <img className='absolute -top-10 left-48' src={star} alt="star icon" />
            <Card>
                <Container className='grid grid-cols-2 gap-x-4 '>
                    <div className='relative z-40 flex items-center justify-center'>
                        <img src={dullStar} alt="dull star" className='absolute'/>
                        <div>
                            <img src={attributeImg} alt="info globe" className='relative z-50' />
                            <img className='absolute z-20 top-20 left-24' src={circle} alt="filled circle icon" />
                        </div>

                        <img src={brightStar} className='absolute bottom-1 right-0' />
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='space-y-6'>
                            <h2 className='text-4xl relative font-bold'>
                                <span>
                                    Judging Criteria
                                </span> <br />
                                <span className='text-primary'>
                                    Key attributes
                                </span>
                            </h2>

                            <p className='text-sm mt-6 leading-7'>
                                <span className='text-primary font-bold'>
                                    Innovation and Creativity: </span>
                                Evaluate the uniqueness and creativity of the
                                solution. Consider whether it addresses a real-world problem in a novel
                                way or introduces innovative features.
                            </p>

                            <p className='text-sm mt-6 leading-7'>
                                <span className='text-primary font-bold'>
                                    Functionality:  </span>
                                Assess how well the solution works. Does it perform its
                                intended functions effectively and without major issues? Judges would
                                consider the completeness and robustness of the solution.
                            </p>

                            <p className='text-sm mt-6 leading-7'>
                                <span className='text-primary font-bold'>
                                    Impact and Relevance: </span>
                                Determine the potential impact of the solution
                                in the real world. Does it address a significant problem, and is it relevant
                                to the target audience? Judges would assess the potential social,
                                economic, or environmental benefits.
                            </p>

                            <p className='text-sm mt-6 leading-7'>
                                <span className='text-primary font-bold'>
                                    Technical Complexity: </span>
                                Evaluate the technical sophistication of the solution.
                                Judges would consider the complexity of the code, the use of advanced
                                technologies or algorithms, and the scalability of the solution.
                            </p>

                            <p className='text-sm mt-6 leading-7'>
                                <span className='text-primary font-bold'>
                                    Adherence to Hackathon Rules: </span>
                                Judges will Ensure that the team adhered
                                to the rules and guidelines of the hackathon, including deadlines, use of
                                specific technologies or APIs, and any other competition-specific requirements.
                            </p>

                            <Button>
                                <span>
                                    Read More
                                </span>
                            </Button>
                        </div>


                    </div>

                </Container>
            </Card>

            <img src={lens} alt="purple lens" className='absolute z-10 top-0 left-0' />
            <img src={lens2} alt="purple lens" className='absolute z-10 -bottom-96 right-0' />
        </section>
    )
}

export default KeyAttributes