import Container from '../elements/Container';
import Card from '../elements/Card';
import prizeImg from '../../assets/prizeImg.png';
import brightStar from '../../assets/attributes-star.png';
import gold from '../../assets/goldMedal.png';
import silver from '../../assets/silverMedal.png';
import bronze from '../../assets/bronzeMedal.png';
import lens from '../../assets/prize-lens.png';
import lens2 from '../../assets/prize-lens-2.png';
import star2 from '../../assets/rules-star-2.png';

const Prizes = () => {
    return (
        <div className='relative z-30'>
            <img className='absolute z-10 -top-20 left-0' src={lens} alt="star icon" />
            <Card>
                <Container className='flex items-center justify-between'>
                    <div className='relative flex items-center justify-center'>
                        <img className='absolute -top-10 left-8' src={brightStar} alt="star icon" />
                        <div className='relative z-20'>
                            <img src={prizeImg} alt="prize image" />
                        </div>

                    </div>

                    <div>
                        <div className='flex items-center justify-center'>
                            <div>
                                <h1 className='text-3xl font-bold'>Prizes and</h1>
                                <h1 className='text-3xl font-bold text-primary'>Rewards</h1>
                                <p className="text-sm  leading-6 mt-2">
                                    Highlight of the prizes or rewards for winners and
                                    <br /> for participants
                                </p>
                            </div>
                        </div>

                        <div className='flex mt-40 justify-between space-x-6'>
                            <div className='relative pt-20'>
                                <img className='absolute z-50 bottom-0 right-0' src={star2} alt="star icon" />
                                <img className='absolute z-50 top-0 right-0' src={star2} alt="star icon" />
                                <div style={{ background: "#d434fe1f", border: "1px solid #d434fe" }} className='rounded-lg'>
                                    <img className='relative -top-20' src={silver} alt="silver medal image" />

                                    <div className='space-y-2 relative -top-10 text-center'>
                                        <h3 className='text-2xl font-bold'>2nd</h3>
                                        <p className='text-xl font-semibold'>Runner</p>
                                        <p className='text-2xl font-bold text-primary'>N300,000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='relative'>
                                <div style={{ background: "#d434fe1f", border: "1px solid #d434fe" }} className='rounded-lg'>
                                    <img className='relative -top-20' src={gold} alt="silver medal image" />

                                    <div className='space-y-2 relative -top-10 text-center'>
                                        <h3 className='text-4xl font-bold'>1st</h3>
                                        <p className='text-xl font-semibold'>Runner</p>
                                        <p className='text-3xl font-bold text-primary'>N400,000</p>
                                    </div>
                                </div>
                            </div>

                            <div className='relative pt-20'>
                                <div style={{ background: "#d434fe1f", border: "1px solid #d434fe" }} className='rounded-lg'>
                                    <img className='relative -top-20' src={bronze} alt="bronze medal image" />

                                    <div className='space-y-2 relative -top-10 text-center'>
                                        <h3 className='text-2xl font-bold'>3rd</h3>
                                        <p className='text-xl font-semibold'>Runner</p>
                                        <p className='text-2xl font-bold text-primary'>N150,000</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Card>
            <img className='absolute z-10 -bottom-20 right-0' src={lens2} alt="star icon" />
        </div>
    )
}

export default Prizes