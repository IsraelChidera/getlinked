
import { useEffect, useState } from 'react';
import * as yup from 'yup';
import Button from '../components/elements/Button';
import lens from '../assets/contact-lens.png';
import hero from '../assets/contact-img.png';
import register from '../assets/registerImg.png';
import lens1 from '../assets/contact-lens-1.png';
import congrats from '../assets/congrats.png';


type RequestOptionsProps = {
    method: string,
    headers: any,
    redirect: any
}


const Register = () => {
    const [open, setOpen] = useState(false);
    const [category, setCategory] = useState([]);
    const [submitting, setSubmitting] = useState(false);
    const [validationErrors, setValidationErrors] = useState([]);
    const [errors, setErrors] = useState("");
    const [formData, setFormData] = useState({
        team_name: '',
        phone_number: '',
        email: '',
        project_topic: '',
        category: '',
        group_size: '',
        privacy_policy_accepted: false,
    });



    const validationSchema = yup.object().shape({
        team_name: yup.string().required('Team Name is required'),
        phone_number: yup.string().required('Phone Number is required'),
        email: yup.string().email('Invalid email address').required('Email is required'),
        project_topic: yup.string().required('Project Topic is required'),
        category: yup.number().required('Category is required'),
        group_size: yup.number().required('Group Size is required'),
        privacy_policy_accepted: yup.boolean().oneOf([true], 'You must accept the privacy policy'),
    });

    let requestOptions: RequestOptionsProps = {
        method: 'GET',
        headers: {
            'Content-Type':
                'application/json;charset=utf-8'
        },
        redirect: 'follow'
    };

    const fetchCategory = async () => {
        await fetch("https://backend.getlinked.ai/hackathon/categories-list", requestOptions)
            .then(response => response.json())
            .then(result => {
                setCategory(result)
            }
            )
            .catch(error => console.log('error', error));
    }

    useEffect(() => {
        fetchCategory();
    }, [])


    const handleReturnToRegister = () => {
        setOpen(false);
    }

    const handleInputChange = (e: any) => {
        const { name, value, type, checked } = e.target;
        let newValue = type === 'checkbox' ? checked : value;

        if (name === 'category') {
            newValue = parseInt(value, 10);
        }
        setFormData({ ...formData, [name]: newValue });
    };

    const resetForm = () => {
        setFormData({
            team_name: '',
            phone_number: '',
            email: '',
            project_topic: '',
            category: '',
            group_size: '',
            privacy_policy_accepted: false,
        });
        setValidationErrors([]);
    };

    const handleFormSubmit = async (e: React.FormEvent) => {
        setSubmitting(true);
        console.log(formData);

        e.preventDefault();

        try {
            await validationSchema.validate(formData, { abortEarly: false });

            const response = await fetch('https://backend.getlinked.ai/hackathon/registration', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(formData),
                redirect: 'follow',
            });

            if (response.ok) {
                const result = await response.json();
                console.log(result);
                setOpen(true);
                setErrors("");
                resetForm();
                setSubmitting(false);
            } else {
                console.error('Registration failed. HTTP Status Code:', response);
                setErrors("Registration failed. Invalid inputs");
                const errorResponse = await response.json(); // Attempt to parse the error response from the server
                if (errorResponse && errorResponse.message) {
                    console.error('Error Message:', errorResponse.message);
                    setErrors(errorResponse.message);
                    setSubmitting(false);
                }
                setSubmitting(false);
            }
        } catch (error: any) {
            console.error('Error:', error);
            console.error('Validation Error:', setValidationErrors(error.errors));
            setSubmitting(false);
        } finally {
        }

    };

    return (
        <div className='py-10 md:px-0 px-3 overflow-hidden'>

            <img src={lens} alt="lens" className='absolute top-0 left-0' />
            <img src={lens1} alt="lens" className='absolute bottom-0 right-0' />

            <h1 className='text-2xl md:hidden block font-bold text-primary mb-6'>Register</h1>
            <div className='relative z-20'>
                <main className="mx-auto py-10 md:w-11/12 md:grid grid-cols-2">
                    <div className='flex relative md:z-40 z-0 justify-center items-center'>
                        <div>

                            <img src={hero} alt="hero img" className='md:block hidden' />
                            <img src={register} alt="hero image" className="md:hidden " />
                        </div>
                    </div>

                    <div
                        className='relative md:z-40 rounded-md py-16 px-3 md:px-16 md:authBg'                        
                    >
                        <h1 className='text-2xl md:block hidden font-bold text-primary mb-6'>Register</h1>

                        <div>
                            <div>
                                <p className='text-sm'>Be part of this movement</p>
                            </div>

                            <h2 className='mt-4 font-semibold text-2xl'>CREATE YOUR ACCOUNT</h2>
                        </div>

                        {
                            validationErrors && <ul className='list-disc text-xs text-red-400'>
                                {
                                    validationErrors.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))
                                }
                            </ul>
                        }

                        {
                            errors && <p className=' mt-4 mb-4 text-xs text-red-400'>
                                {errors}
                            </p>
                        }

                        <form className='mt-10 space-y-8' >

                            <div className='md:grid grid-cols-2 md:space-y-0 space-y-8 md:gap-x-4'>
                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Team's Name</label>
                                    <input
                                        style={{ background: "#d9d9d908" }}
                                        name='team_name'
                                        value={formData.team_name}
                                        onChange={handleInputChange}
                                        className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text"
                                        placeholder='Enter the name of your group'
                                    />
                                </div>

                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Phone</label>
                                    <input
                                        style={{ background: "#d9d9d908" }}
                                        name='phone_number'
                                        value={formData.phone_number}
                                        onChange={handleInputChange}
                                        className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text" placeholder='Enter your phone number' />
                                </div>
                            </div>

                            <div className='md:grid grid-cols-2 md:space-y-0 space-y-8 md:gap-x-4'>
                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Email</label>
                                    <input
                                        style={{ background: "#d9d9d908" }}
                                        name='email'
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text"
                                        placeholder='Enter your email address'
                                    />
                                </div>

                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Project Topic</label>
                                    <input
                                        style={{ background: "#d9d9d908" }}
                                        name='project_topic'
                                        value={formData.project_topic}
                                        onChange={handleInputChange}
                                        className='border-white border text-xs py-2 pl-4 w-full'
                                        type="text" placeholder='What is your group project topic' />
                                </div>
                            </div>

                            <div className='md:grid grid-cols-2 md:space-y-0 space-y-8 md:gap-x-4'>
                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Category</label>
                                    <select
                                        className='py-2 pl-4 w-full text-xs'
                                        style={{ background: "#d9d9d908" }}
                                        name='category'
                                        value={formData.category}
                                        onChange={handleInputChange}
                                    >
                                        <option className='bg-primary' >Select your category</option>
                                        {
                                            category.map((item: any) => (
                                                <option value={item.id} className='bg-primary' key={item.id}> {item.name} </option>
                                            ))
                                        }
                                    </select>
                                </div>

                                <div>
                                    <label className='block text-xs mb-1 font-semibold'>Group Size</label>
                                    <select
                                        className='py-2 pl-4 w-full text-xs'
                                        style={{ background: "#d9d9d908" }}
                                        name='group_size'
                                        value={formData.group_size}
                                        onChange={handleInputChange}
                                    >
                                        <option className='bg-primary' >Select </option>
                                        <option className='bg-primary'>5</option>
                                        <option className='bg-primary'>10</option>
                                        <option className='bg-primary'>20</option>
                                        <option className='bg-primary'>50</option>
                                    </select>
                                </div>
                            </div>

                            <div>
                                <p className='text-xs italic text-primary'>Please review your registration details before submitting</p>
                                <div className='mt-2 flex items-center'>
                                    <input
                                        type="checkbox"
                                        name="privacy_policy_accepted"
                                        checked={formData.privacy_policy_accepted}
                                        onChange={handleInputChange}
                                    />
                                    <label className='text-xs pl-2'>I agreed with the event terms and conditions and privacy policy</label>
                                </div>
                            </div>

                            <div className='block items-center justify-center'>


                                <button
                                    // type="submit"
                                    onClick={(e: any) => handleFormSubmit(e)}
                                    className='text-white w-full text-xs relative md:z-50 py-3 px-10'
                                    style={{
                                        background: "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 37.9, 184.51) 99.99%, rgb(254, 52, 185.32) 100%)",
                                        borderRadius: "4px"
                                    }}
                                >
                                    <span>
                                        {submitting? "Submitting":  "Register"}
                                    </span>
                                </button>
                            </div>

                        </form>
                    </div>
                </main>
            </div>

            {
                open && <section className='h-screen mb-2 fixed w-full md:p-0 p-4 z-50 top-0 left-0 flex items-center  justify-center congrats-dialog-box'>
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