import { useState } from 'react';
import logo from '/logo.svg';
import { NavLink as NavL, useLocation, useNavigate } from 'react-router-dom';
import Container from '../elements/Container';
import Button from '../elements/Button';
import { HashLink as NavLink } from 'react-router-hash-link';
import navIcon from '../../assets/navbar.png';
import cancel from '../../assets/cancel.png';

const Navbar = () => {

    const [show, setShow] = useState(false);
    const navigate = useNavigate();
    let { pathname }: any = useLocation();

    const handleRegisterClick = () => {
        navigate("/register");
        setShow(false);
    }

    const showMenu = () => {
        setShow(prev => !prev);
    }

    return (
        <nav id="navbar" className='fixed w-full z-50 pt-10 px-4 md:px-0 pb-4 border-b border-b-gray-500/50 '>
            <Container className='flex justify-between md:grid grid-cols-2'>
                <div>
                    <NavLink className="inline" to="/">
                        <img style={{ height: "24px", width: "151px" }} src={logo} alt="logo" />
                    </NavLink>
                </div>

                <div className='hidden md:flex justify-between items-center'>
                    <ul className='flex space-x-10 items-center text-sm'>
                        <li className='cursor-pointer'>
                            <NavLink to="/#timeline">
                                Timeline
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/#overview">
                                Overview
                            </NavLink>
                        </li>

                        <li>
                            <NavLink to="/#faq">
                                FAQs
                            </NavLink>
                        </li>

                        <li>
                            <NavL to="/contact">
                                Contact
                            </NavL>
                        </li>
                    </ul>

                    {
                        pathname === '/register' ?
                            <button className='btn-link text-xs py-3 px-10'>
                                Register
                            </button> :
                            <Button onClick={handleRegisterClick}>
                                <span>
                                    Register
                                </span>
                            </Button>
                    }


                </div>

                <img src={navIcon} onClick={showMenu} className='object-contain md:hidden block' alt="navbar icon" />

                {/* mobile navigation */}

                {
                    show &&
                    <div style={{ background: "#150E28", height: "100vh" }} className=' p-10 fixed md:z-50 top-0 left-0 w-full'>
                        <div className='flex justify-end mt-10'>
                            <img className='rounded-full p-2 border border-primary' src={cancel} alt="cancel icon" onClick={() => setShow(false)} />
                        </div>

                        <div>
                            <ul className='flex flex-col pb-6 space-y-6 text-sm'>
                                <li className='cursor-pointer'>
                                    <NavLink to="/#timeline" onClick={() => setShow(false)}>
                                        Timeline
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/#overview" onClick={() => setShow(false)}>
                                        Overview
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/#faq" onClick={() => setShow(false)}>
                                        FAQs
                                    </NavLink>
                                </li>

                                <li>
                                    <NavL to="/contact" onClick={() => setShow(false)}>
                                        Contact
                                    </NavL>
                                </li>
                            </ul>
                            {
                                pathname === '/register' ?
                                    <button className='btn-link text-xs py-3 px-10' onClick={() => setShow(false)}>
                                        Register
                                    </button> :
                                    <Button onClick={handleRegisterClick}>
                                        <span>
                                            Register
                                        </span>
                                    </Button>
                            }
                        </div>
                    </div>
                }


            </Container>
        </nav>
    )
}

export default Navbar