import logo from '/logo.svg';
import { NavLink } from 'react-router-dom';
import Container from '../elements/Container';
import Button from '../elements/Button';

const Navbar = () => {
    return (
        <nav className='pt-10 pb-4 border-b border-b-gray-500/50 '>
            <Container className='grid grid-cols-2'>
                <div>
                    <img style={{ height: "24px", width: "151px" }} src={logo} alt="logo" />
                </div>

                <div className='flex justify-between items-center'>
                    <ul className='flex space-x-10 items-center text-sm'>
                        <li>
                            <NavLink to="#">
                                Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Overview
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                FAQs
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="#">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <Button>
                        <span>
                            Register
                        </span>
                    </Button>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar