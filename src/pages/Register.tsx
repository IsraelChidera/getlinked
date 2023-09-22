
import { useState } from 'react';
import Button from '../components/elements/Button';
import lens from '../assets/contact-lens.png';
import hero from '../assets/contact-img.png';
import lens1 from '../assets/contact-lens-1.png';
import congrats from '../assets/congrats.png';

const Register = () => {
    const [open, setOpen] = useState(false);   


    const handleRegistration = (e: any) => {
        e.preventDefault();
        setOpen(true);
    }

    const handleReturnToRegister = () => {
        setOpen(false);
    }


    return (
        <div className='py-10 overflow-hidden'>

            <img src={lens} alt="lens" className='absolute top-0 left-0' />
            <img src={lens1} alt="lens" className='absolute bottom-0 right-0' />

            <div className='relative z-20'>
                <main className="mx-auto py-10 md:w-11/12 grid grid-cols-2">
                    <div className='flex relative z-50  items-center'>
                        <div>
                            <img src={hero} alt="hero img" />
                        </div>
                    </div>

                    <div
                        className='relative z-50 rounded-md py-16 px-16'
                        style={{ background: "#d9d9d908", border: "1px solid #d434fe", }}
                    >
                        <h1 className='text-2xl font-bold text-primary mb-6'>Register</h1>

                        <div>
                            <div>
                                <p className='text-sm'>Be part of this movement</p>
                            </div>

                            <h2 className='mt-4 font-semibold text-2xl'>CREATE YOUR ACCOUNT</h2>
                        </div>

                        <form className='mt-10 space-y-8'>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Team's Name</label>
                                    <input style={{ background: "#d9d9d908" }} className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text"
                                        placeholder='Enter the name of your group'
                                    />
                                </div>

                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Phone</label>
                                    <input style={{ background: "#d9d9d908" }} className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text" placeholder='Enter your phone number' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Email</label>
                                    <input style={{ background: "#d9d9d908" }} className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text"
                                        placeholder='Enter your email address'
                                    />
                                </div>

                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Project Topic</label>
                                    <input style={{ background: "#d9d9d908" }} className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text" placeholder='What is your group project topic' />
                                </div>
                            </div>

                            <div className='grid grid-cols-2 gap-x-4'>
                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Category</label>
                                    <select className='py-2 pl-4 w-full text-xs' style={{ background: "#d9d9d908" }}>
                                        <option >Select your category</option>
                                    </select>
                                </div>

                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Group Size</label>
                                    <select className='py-2 pl-4 w-full text-xs' style={{ background: "#d9d9d908" }}>
                                        <option >Select </option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs italic text-primary'>Please review your registration details before submitting</p>
                                <div className='mt-2 flex items-center'>
                                    <input type="checkbox" />
                                    <label className='text-xs pl-2'>I agreed with the event terms and conditions and privacy policy</label>
                                </div>
                            </div>

                            <div className='flex items-center justify-center'>


                                <Button className='w-full' onClick={handleRegistration}>
                                    <span>
                                        Register
                                    </span>
                                </Button>
                            </div>

                        </form>
                    </div>
                </main>
            </div>

            {
                open && <section className='h-screen mb-2 fixed w-full z-50 top-0 left-0 flex items-center  justify-center congrats-dialog-box'>
                    <div className='space-y-6 py-20'>
                        <img src={congrats} alt="congrats pop up" />

                        <div className='text-center'>
                            <h3 className='font-semibold text-2xl'> Congratulations </h3>
                            <h3 className='font-semibold text-2xl'> you have successfully Registered! </h3>
                        </div>

                        <div className='text-center text-xs'>
                            <p>
                                Yes, it was easy and you did it!
                            </p>

                            <p>
                                check your mail box for next step
                            </p>
                        </div>

                        <div>
                            <Button className='w-full' onClick={handleReturnToRegister}>
                                <span> Back </span>
                            </Button>
                        </div>
                    </div>
                </section>
            }


        </div>
    )
}

export default Register