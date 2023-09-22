import logo from '/logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import Container from '../elements/Container';
import Button from '../elements/Button';


const Navbar = () => {

    const navigate = useNavigate();

    const handleRegisterClick = () => {
        navigate("/register")
    }
    return (
        <nav id="navbar" className='relative z-50 pt-10 pb-4 border-b border-b-gray-500/50 '>
            <Container className='grid grid-cols-2'>
                <div>
                    <NavLink className="inline" to="/">
                        <img style={{ height: "24px", width: "151px" }} src={logo} alt="logo" />
                    </NavLink>
                </div>

                <div className='flex justify-between items-center'>
                    <ul className='flex space-x-10 items-center text-sm'>
                        <li className='cursor-pointer'>
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
                            <NavLink to="/contact">
                                Contact
                            </NavLink>
                        </li>
                    </ul>

                    <Button onClick={handleRegisterClick}>
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