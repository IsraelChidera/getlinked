
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

const Partners = () => {
    return (
        <div className='relative '>
            <img src={lens} alt="purple lens" className='z-10 absolute top-0 left-0' />
            <img src={lens2} alt="purple lens" className='z-10 absolute bottom-0 right-0' />
            <Card>
                <Container>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='text-4xl font-bold text-center'>Partners and Sponsors</h1>
                            <div className='flex items-center justify-center'>
                                <p className="text-sm w-80 text-center leading-6 mt-2">
                                    Getlinked Hackathon 1.0 is honored to have the following major
                                    companies as its partners and sponsors
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='relative z-50 p-10 mt-10'>
                        <div className='grid grid-cols-3 gap-y-10'>
                            <div className=' border-b border-r flex items-center justify-center'>
                                <img src={product1} className="p-2" alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product2} alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product3} alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product4} alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product5} alt="logo that support" />
                            </div>

                            <div className='flex items-center justify-center'>
                                <img src={product6} alt="logo that support" />
                            </div>
                        </div>
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default Partners