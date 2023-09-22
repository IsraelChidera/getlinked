
import twitter from '../assets/twitter.png';
import linkedin from '../assets/linkedin.png';
import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import Button from '../components/elements/Button';
import lens from '../assets/contact-lens.png';
import lens1 from '../assets/contact-lens-1.png';
import { useEffect, useState } from 'react';

const Contact = () => {  

  const [formData, setFormData] = useState({
    email: "",
    phone_number: "",
    first_name: "",
    message: ""
  })

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value })
  }

  type RequestOptionsProps = {
    method: string,
    headers: any,
    body: any,
    redirect: any
  }

  let obj = JSON.stringify({
    "email": "sample@eexample.com",
    "phone_number": "0903322445533",
    "first_name": "Space Explore",
    "message": "I need further info"
  });

  let requestOptions: RequestOptionsProps = {
    method: 'POST',
    headers: {
      'Content-Type':
        'application/json;charset=utf-8'
    },
    body: JSON.stringify(formData),
    redirect: 'follow'
  };

  const handleContactSubmit = async (e: any) => {
    e.preventDefault();

    await fetch("https://backend.getlinked.ai/hackathon/contact-form", requestOptions)
      .then(response => response.json())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  }


  return (
    <div className=' overflow-hidden relative'>

      <img src={lens} alt="lens" className='absolute top-0 left-0' />
      <img src={lens1} alt="lens" className='absolute bottom-0 right-0' />
      <div className='mt-10'>
        <main className="mx-auto py-10 md:w-10/12 grid grid-cols-2">
          <div className='flex relative z-50  items-center'>
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
            className='relative z-50 rounded-md py-16 px-16'
            style={{ background: "#d9d9d908", border: "1px solid #d434fe", }}
          >
            <form className='space-y-8'>
              <div>
                <p className='font-bold text-primary'> Questions or need assistance?</p>
                <p className='font-bold text-primary'>Let us know about it</p>
              </div>

              <div>
                <input name="first_name" value={formData.first_name} onChange={handleInputChange} style={{ background: "#d9d9d908" }} className='border-white border text-sm py-2 pl-6 w-full' type="text" placeholder='First Name' />
              </div>

              <div>
                <input name="phone_number" value={formData.phone_number} onChange={handleInputChange} style={{ background: "#d9d9d908" }} className='border-white border text-sm py-2 pl-6 w-full' type="text" placeholder='Phone Number' />
              </div>

              <div>
                <input name="email" value={formData.email} onChange={handleInputChange} style={{ background: "#d9d9d908" }} className='border-white border text-sm py-2 pl-6 w-full' type="text" placeholder='Mail' />
              </div>

              <div>
                <textarea
                  name="message" 
                  value={formData.message} 
                  onChange={handleInputChange}
                  placeholder='Message'
                  style={{ background: "#d9d9d908", height: "150px", resize: "none" }}
                  className='w-full border-white border py-2 pl-6'
                >

                </textarea>
              </div>

              <div className='flex items-center justify-center'>
                <Button onClick={(e: any) => handleContactSubmit(e)}>
                  <span>
                    Register
                  </span>
                </Button>
              </div>

            </form>
          </div>
        </main>
      </div>

    </div>
  )
}

export default Contact