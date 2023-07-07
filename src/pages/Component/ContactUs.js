import React, { useState, useEffect } from 'react'
import Aboutus from './Aboutus'


function ContactUs() {

    const [submit, setsubmit] = useState(false)
    useEffect(() => {

    }, [submit])
    const handleSubmit = () => {
        setsubmit(true)
    }
    return (
        <>
            <div className='contactusDiv'>
                <div className='contactusDiv_one' >
                    <div className='contactusDivOne_aboutus'>
                        <div >
                            <h3 className='contactus_text'>
                                Contact us to drive your RTO at scale
                            </h3>
                        </div>
                        <div>
                            <h6 className='contactus_text my-3'>
                                Discover new avenues of growth with Accelerate Your Success with Precify Commerce.
                            </h6>
                        </div>
                        <div>
                            <p>✅ Accuracy rate of over 95% </p>
                            <p>✅ Decreasing RTO rates by 30%</p>
                            <p>✅ Achieving a 20% increase in revenue</p>
                        </div>
                    </div>
                </div>
                <div className='contactusDiv_two'>
                    {submit ? (<div className='form_submittion_message'>
                        Thank you for submitting the form. We appreciate your interest and will get in touch with you soon. Our team is dedicated to providing excellent service and we look forward to connecting with you shortly.
                    </div>) : (<div className='contactusDivtwo_Container'>
                        <div className='contactusDivtwo_Container_form'>
                            <h4 >Sign-up for a free demo</h4>
                            <div class="form-group">
                                <input type="text" id="brand-url" className='formfield' placeholder='Name' required />
                            </div>
                            <div class="form-group">
                                <input type="text" id="brand-url" className='formfield' placeholder='Phone' required />
                            </div>
                            <div class="form-group">
                                <input type="text" id="brand-url" className='formfield' placeholder='Email' required />
                            </div>
                            <div class="form-group">
                                <input type="text" id="brand-url" className='formfield' placeholder='Inquire ' required />
                            </div>
                            <button class="custom-btn btn-15" onClick={handleSubmit} >Submit</button>
                        </div>

                    </div>)}
                </div>
            </div>
        </>
    )
}

export default ContactUs