
import Container from '../elements/Container';
import Card from '../elements/Card';
import lens from '../../assets/partners-lens.png';
import lens2 from '../../assets/partners-lens-2.png';
import product1 from '../../assets/product1.png';
import product2 from '../../assets/product2.png';
import product3 from '../../assets/product3.png';
import product4 from '../../assets/product4.png';
import product5 from '../../assets/product5.png';
import product6 from '../../assets/product6.png';
import star2 from '../../assets/rules-star-2.png';
import line1 from '../../assets/line-1.png';
import line2 from '../../assets/line-2.png';
import brightStar from '../../assets/attributes-star.png';
import partners from '../../assets/partners.png';

const Partners = () => {
    return (
        <div className='relative '>
            <img src={lens} alt="purple lens" className='z-10 absolute top-0 left-0' />
            <img src={lens2} alt="purple lens" className='z-10 absolute bottom-0 right-0' />
            <img className='absolute animate-pulse -top-10 left-20' src={brightStar} alt="star icon" />
            <Card className='py-6'>
                <Container>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='text-2xl md:text-4xl font-bold text-center'>Partners and Sponsors</h1>
                            <div className='flex items-center justify-center'>
                                <p className="text-sm w-80 text-center leading-6 mt-2">
                                    Getlinked Hackathon 1.0 is honored to have the following major
                                    companies as its partners and sponsors
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='relative z-40 md:z-50 p-10 mt-10'>
                        <img className='absolute animate-pulse md:z-50 inset-x-1/2 bottom-0' src={star2} alt="star icon" />
                        <div className='hidden md:grid grid-cols-3 gap-y-10'>
                            <div className='relative flex items-center justify-center'>
                                <img src={product1} className="" alt="logo that support" />
                                <img src={line1} className="absolute right-0 top-0 " alt="logo that support" />
                            </div>

                            <div className='flex relative items-center justify-center'>
                                <img src={product2} className='p-6  border-primary' alt="logo that support" />
                                <img src={line1} className="absolute right-0 top-0 " alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product3} className="" alt="logo that support" />
                            </div>

                            <div >
                                <img src={line2} className=" " alt="logo that support" />
                            </div>

                            <div className='px-4'>
                                <img src={line2} className=" " alt="logo that support" />
                            </div>

                            <div>
                                <img src={line2} className=" " alt="logo that support" />
                            </div>

                            <div className='flex relative items-center justify-center'>
                                <img src={product4} className="" alt="logo that support" />
                                <img src={line1} className="absolute right-0 top-0 " alt="logo that support" />
                            </div>

                            <div className='flex relative items-center justify-center'>
                                <img src={product5} className="" alt="logo that support" />
                                <img src={line1} className="absolute right-0 top-0 " alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product6} className="" alt="logo that support" />
                            </div>
                        </div>

                        <div className='md:hidden flex items-center justify-center'>
                            <div>
                                <img src={partners} alt="partners" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default Partners