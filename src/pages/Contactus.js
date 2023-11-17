import React from 'react'
import photo from '../Assets/06.jpg'
import { FaWhatsapp } from "react-icons/fa";
// import { FaInstagram } from "react-icons/fa";
const Contactus = () => {
  return (
    <>
    <div className="container01">
      <div className="photo">
      <img src={photo} alt="GroupPhoto"
      height={'450'}
      width={'450'} 
      style={{aspectRatio:1/1, objectFit:'cover'}} />
      </div>
      <div className="form">
      <div className="fcf-body" id="contact">
        <div id="fcf-form">

            <div className="headingz">
                Submit Your Query
            </div>

            <form id="fcf-form-id" className="fcf-form-className" method="post" action="https://formspree.io/f/xayglawa">

                <div className="fcf-form-group">
                    <label htmlFor="Name" className="fcf-label">Your Name</label>
                    <div className="fcf-input-group">
                        <input type="text" placeholder="Name" id="Name" name="Name" className="fcf-form-control" required/>
                    </div>
                </div>

                <div className="fcf-form-group">
                    <label htmlFor="Email" className="fcf-label">Your Email address</label>
                    <div className="fcf-input-group">
                        <input type="email" placeholder="Email" id="Email" name="Email" className="fcf-form-control" required/>
                    </div>
                </div>

                <div className="fcf-form-group">
                    <label htmlFor="Message" className="fcf-label">Your Message</label>
                    <div className="fcf-input-group">
                        <textarea id="Message" placeholder="Message" name="Message" className="fcf-form-control" rows="6" maxLength="3000"
                            required></textarea>
                    </div>
                </div>

                <div className="fcf-form-group">
                    {/* <button type="submit" id="fcf-button" className="fcf-btn fcf-btn-primary fcf-btn-lg fcf-btn-block">Send
                        Message</button> */}
                        <button type='submit' style={{padding:'7px 15px' , background:'#fff', borderRadius:'10px',border:'2px solid'}}>Send</button>  
                        <a href="https://wa.me/919510232212?text=Hello%20I%20Also%20Wanna%20Come%20For%20Sewa!" target='_blank' rel="noreferrer" style={{textDecoration:'none'}}> <FaWhatsapp size={30} color='black' /> </a>
                        <a href="https://wa.me/919510553908?text=Hello%20I%20Also%20Wanna%20Come%20For%20Sewa!" target='_blank' rel="noreferrer" style={{textDecoration:'none'}}> <FaWhatsapp size={30} color='black' /> </a>
                        {/* <a href="" classNameName='insta' rel="noreferrer" style={{textDecoration:'none'}}> <FaInstagram size={30} color='black' /> </a> */}
                </div>

            </form>
        </div>

    </div>

      </div>
    </div>
    </>
  )
}

export default Contactus
