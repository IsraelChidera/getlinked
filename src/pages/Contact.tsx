
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import lens from '../assets/contact-lens.png';
import lens1 from '../assets/contact-lens-1.png';
import { useState } from 'react';
import { Formik, Field, Form } from 'formik';


type InitialValuesProps = {
  email: string,
  phone_number: string,
  first_name: string,
  message: string
}

type ErrorsProps = {
  email?: string,
  phone_number?: string,
  first_name?: string,
  message?: string
}

const Contact = () => {

  const [success, setSuccess] = useState("");
  const initialValues: InitialValuesProps = {
    email: "",
    phone_number: "",
    first_name: "",
    message: ""
  }

  const validateForm = (values: InitialValuesProps) => {
    const errors: ErrorsProps = {}

    if (!values.first_name) {
      errors.first_name = "First name is required";
    } else if (values.first_name.length <= 3) {
      errors.first_name = 'Must be 3 characters or more';
    }

    if (!values.phone_number) {
      errors.phone_number = "Phone number is required";
    } else if (!/^\d{11}$/.test(values.phone_number)) {
      errors.phone_number = "Invalid phone number. Number must be 11 digits";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }

    return errors;
  }

  const onContactFormSubmission = async (values: any) => {
    console.log("Adad");
    await fetch("https://backend.getlinked.ai/hackathon/contact-form", {
      method: 'POST',
      headers: {
        'Content-Type':
          'application/json;charset=utf-8'
      },
      body: JSON.stringify(values),
      redirect: 'follow'
    })
      .then(response => response.json())
      .then(result => {
        setSuccess("Message submitted successfully");
        console.log(result);
      })
      .catch(error => console.log('error', error));
  }

  return (
    <div className=' overflow-hidden relative'>

      <img src={lens} alt="lens" className='absolute top-0 left-0' />
      <img src={lens1} alt="lens" className='absolute bottom-0 right-0' />
      <div className='mt-10'>
        <main className="mx-auto py-10 md:w-10/12 md:grid grid-cols-2">
          <div className='hidden md:flex relative md:z-50  items-center'>
            <section className="space-y-6">
              <h2 className="font-bold text-xl text-primary ">Get in touch </h2>

              <div>
                <p>Contact <br /> Information</p>
              </div>

              <div>
                <p>
                  27,Alara Street <br />
                  Yaba 100012 <br />
                  Lagos State
                </p>
              </div>


              <div>
                <p>
                  we are open from Monday-Friday <br />
                  08:00am - 05:00pm
                </p>
              </div>

              <div>
                <p className="text-sm text-primary font-bold"> Share on </p>
                <div className='flex mt-2 items-center space-x-3'>
                  <img src={instagram} alt="instagram icon" className='w-3' />
                  <img src={twitter} alt="twitter icon" className='w-3' />
                  <img src={facebook} alt="facebook icon" className='w-3' />
                  <img src={linkedin} alt="linkedin icon" className='w-3' />
                </div>
              </div>
            </section>
          </div>

          <div
            className='relative z-50 rounded-md md:py-16 px-4 md:px-16 md:authBg'
          >
            <p className='pb-4 text-center text-sm'>{success}</p>
            <Formik
              initialValues={initialValues}
              validate={validateForm}
              onSubmit={(values, { resetForm }: { resetForm: any }) => {
                onContactFormSubmission(values);
                resetForm({ values: '' });
              }}
            >
              {
                (
                  { values, errors, touched, handleChange, }:
                    {
                      values: any, errors: any,
                      touched: any, handleChange: any,
                    }
                ) => (
                  <>
                    <Form className='space-y-8'>
                      <div>
                        <p className='font-bold text-primary'> Questions or need assistance?</p>
                        <p className='font-bold text-primary'>Let us know about it</p>
                      </div>

                      <div>
                        <Field
                          required
                          type="text"
                          name="first_name"
                          value={values.first_name}
                          placeholder="First Name"
                          style={{ background: "#d9d9d908" }}
                          className='border-white border text-sm py-2 pl-6 w-full'
                          onChange={handleChange}
                        />
                        <p className='text-xs text-red-700'>
                          {errors.first_name && touched.first_name && errors.first_name}
                        </p>
                      </div>

                      <div>
                        <Field
                          required
                          type="text"
                          name="phone_number"
                          value={values.phone_number}
                          placeholder="Phone Number"
                          style={{ background: "#d9d9d908" }}
                          className='border-white border text-sm py-2 pl-6 w-full'
                          onChange={handleChange}
                        />
                        <p className='text-xs text-red-700'>
                          {errors.phone_number && touched.phone_number && errors.phone_number}
                        </p>
                      </div>

                      <div>
                        <Field
                          required
                          type="email"
                          name="email"
                          value={values.email}
                          placeholder="Email"
                          style={{ background: "#d9d9d908" }}
                          className='border-white border text-sm py-2 pl-6 w-full'
                          onChange={handleChange}
                        />

                        <p className='text-xs text-red-700'>
                          {errors.email && touched.email && errors.email}
                        </p>
                      </div>

                      <div>
                        <textarea
                          name="message"
                          value={values.message}
                          placeholder='Message'
                          style={{ background: "#d9d9d908", height: "150px", resize: "none" }}
                          className='w-full border-white border py-2 pl-6'
                          onChange={handleChange}
                          required
                        ></textarea>

                        <p className='text-xs text-red-700'>
                          {errors.message && touched.message && errors.message}
                        </p>
                      </div>

                      <div className='flex  items-center justify-center'>
                        <button
                          type="submit"
                          className='text-white text-xs relative md:z-50 py-3 px-10'
                          style={{
                            background: "linear-gradient(270deg, rgb(144, 58, 255) 0%, rgb(212, 52, 254) 56.42%, rgb(255, 37.9, 184.51) 99.99%, rgb(254, 52, 185.32) 100%)",
                            borderRadius: "4px"
                          }}
                        >
                          <span>
                            Submit
                          </span>
                        </button>
                      </div>

                    </Form>
                  </>
                )
              }
            </Formik>


            <div className='md:hidden mt-10 flex justify-center items-center'>
              <div>
                <p className="text-sm text-primary text-center font-bold"> Share on </p>
                <div className='flex mt-2 items-center space-x-3'>
                  <img src={instagram} alt="instagram icon" className='w-3' />
                  <img src={twitter} alt="twitter icon" className='w-3' />
                  <img src={facebook} alt="facebook icon" className='w-3' />
                  <img src={linkedin} alt="linkedin icon" className='w-3' />
                </div>
              </div>
            </div>

          </div>
        </main>
      </div >

    </div >
  )
}

export default Contact