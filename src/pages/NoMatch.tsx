import { useNavigate } from 'react-router-dom';
import Button from '../components/elements/Button';

const NoMatch = () => {

    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/");
    }

    return (
        <div className='h-screen flex justify-center text-center items-center mx-auto md:w-1/4'>
            <div>
                <div>
                    <h1 className='text-8xl font-bold'>
                        404
                    </h1>
                    <p className='mt-2 md:text-sm text-xs'>page not found</p>
                </div>

                <div className='mt-2'>
                    <Button className="inline" onClick={handleClick}>
                        Return to Home
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default NoMatch