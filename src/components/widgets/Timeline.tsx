import Container from '../elements/Container';
import Card from '../elements/Card';

const Timeline = () => {
    return (
        <div>
            <Card>
                <Container>
                    <div className='flex items-center justify-center'>
                        <div>
                            <h1 className='text-4xl font-bold text-center'>Timeline</h1>
                            <p className="text-sm w-80 text-center leading-6 mt-2">Here is the breakdown of the time we anticipate
                                using for the upcoming event.</p>
                        </div>
                    </div>
                </Container>
            </Card>
        </div>
    )
}

export default Timeline