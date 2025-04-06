
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ContactPage.css';
import ReCAPTCHA from 'react-google-recaptcha';
import contfaq from '../../components/images/cont-faq.jpg'
import bannerimg from '../../components/images/cont-meet.PNG'

const ContactPage = () => {
  const [contactMethod, setContactMethod] = useState('');
  const [captchaValue, setCaptchaValue] = useState(null);
  const [activeQuestion, setActiveQuestion] = useState(null);  // 

  const handleChange = (event) => {
    setContactMethod(event.target.value);
  };

  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!captchaValue) {
      alert("Please verify you're not a robot!");
      return;
    }

   
    console.log("Form submitted with captcha verification");
  };

  const toggleAnswer = (index) => {
    
    setActiveQuestion(activeQuestion === index ? null : index);
  };

  const faqData = [
    {
      question: "What services do you offer?",
      answer: "We offer a variety of services including web development, IT consulting, software solutions, and more.",
    },
    {
      question: "How can I get in touch with you?",
      answer: "You can contact us via email, phone, or WhatsApp. Please visit our contact page for more details.",
    },
    {
      question: "Do you provide customer support?",
      answer: "Yes, we offer 24/7 customer support to assist with any issues you might face.",
    },
    {
      question: "What is included in the design consultation?",
      answer: "Our designers collaborate with you to create a personalized design that matches your vision and needs.",
    },
    {
      question: "What is included in the design consultation?",
      answer: "You can reach us 24/7 by calling +917498935637, or by filling out our contact form. We will respond to your inquiry within 24 hours via email at bitreliantsolution@gmail.com",
    },
    {
      question: "What is included in the design consultation?",
      answer: "You can reach us 24/7 by calling +917498935637, or by filling out our contact form. We will respond to your inquiry within 24 hours via email at bitreliantsolution@gmail.com",
    },

  ];

  return (
    <div className="contactmain">
      <div className="contactmainup">
        <div className="c-m-utr">
          <h1>Contact Bit Reliant</h1>
          <div className='c-m-utr-para-text'>
          <p>
            Got an idea, a challenge, or a project that needs the right tech partner? We’re here to listen,
            innovate, and deliver. Whether you're scaling up or just starting out, let’s build something extraordinary—together. Reach out today!
          </p>
          </div>
          <div className='c-m-utr-btn'>
          <a href="https://wa.me/PHONE_NUMBER" target="_blank" >Chat live with us</a>
          <div className='btn-r'>
          <a href="#cf">Contect Us</a>
          </div>
          </div>
        </div>
        <div className="c-m-utl">
          <img src={bannerimg}></img>
          
       
        </div>
      </div>

      <div className="contactways">
        <div className="requestservice">
          <i className="fas fa-building"></i>
          <p>Request for Service</p>
        </div>

        <div className="requestservice">
          <i className="fas fa-id-card"></i>
          <p>About Us</p>
        </div>

        <div className="requestservice">
          <i className="fas fa-users"></i>
          <p>Media Contacts</p>
        </div>
      </div>

      <div className="contactus">
        <h2>Contact Us</h2>
        <div className="contactus-tog">
          <div className="look-f-s-e">
            <h2>Looking for something else?</h2>
            <div className="cont-inqu">
              <Link> Website feedback</Link>
              <Link> Analyst inquiries</Link>
              <Link> Investor inquiries</Link>
              <Link> Job and career seekers</Link>
              <Link> Report a security incident</Link>
              <Link> Artificial Intelligence</Link>
              <Link> Payment Related Queries</Link>
            </div>
            <div className="contact-e-n-tog">
              <div className="contact-e">
                <p>Contact Email</p>
                <p>Business: <a href="mailto:bitreliantsolutions@gmail.com">bitreliantsolutions@gmail.com</a></p>
                <p>Careers: <a href="mailto:bitreliantsolutions@gmail.com">bitreliantsolutions@gmail.com</a></p>
              </div>
              <div className="contact-n">
                <p>Contact No</p>
                <p>Business: <a href="tel:7498935637">+91 7498935637</a></p>
                <p>Careers: <a href="tel:7498935637">+91 7498935637</a></p>
              </div>
            </div>
            <div className="cont-location">
              <iframe
                src="https://www.google.com/maps/embed?pb=..."
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
              ></iframe>
            </div>
          </div>

          <div id='cf' className="cont-form">
            <form onSubmit={handleSubmit}>
              <label>
                <input type="text" name="name" placeholder="Full Name" required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <input type="email" name="email" placeholder="Email" required />
              </label>
              <label>
                <input type="tel" name="phone" placeholder="Phone Number" required />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select name="categories">
                  <option value="usertype">Helps categorize the user type</option>
                  <option value="organization">Organization</option>
                  <option value="institute">Institute</option>
                  <option value="individual">Individual</option>
                </select>
              </label>
              <label>
                <input type="text" name="hearus" placeholder="How Did You Hear About Us?" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <select name="service">
                  <option value="default">Interested Service</option>
                  <option value="webdevelopment">Web Development</option>
                  <option value="itconsulting">IT Consulting</option>
                  <option value="softwaresolutions">Software Solutions</option>
                </select>
              </label>
              <p> Preferred Contact Method</p>
              <label className='cont-method'>
                <input type="radio" name="contactMethod" value="email" checked={contactMethod === 'email'} onChange={handleChange} />
                <span>Email</span>

                <input type="radio" name="contactMethod" value="phone" checked={contactMethod === 'phone'} onChange={handleChange} />
                <span> Phone</span>

                <input type="radio" name="contactMethod" value="whatsapp" checked={contactMethod === 'whatsapp'} onChange={handleChange} />
                <span>WhatsApp</span>
              </label>
              <textarea name="message" rows="4" cols="50" placeholder="Type your message here..."></textarea>

              <div className="recaptch">
                <ReCAPTCHA sitekey="YOUR_RECAPTCHA_SITE_KEY" onChange={handleCaptchaChange} />
              </div>

              <label className='cont-termcondition'>
                <input type="checkbox" name="termsAgreed" onChange={handleChange} required />&nbsp;
                <a> I have read BitReliant Solution’s Privacy Statement and agree to the terms of use.*</a>
              </label>

              <button type="submit" className="submit-btn">Submit</button>
            </form>
          </div>
        </div>
      </div>  
        <div className="image-container">
                <img
                  src={contfaq}
                  alt="faqback"
                  className="image"
                   />
                 <div className="overlay-text">FAQS</div>
          </div>  
          <div className="faq-que">
  <h2>Frequently Asked Questions</h2>
  {faqData.map((faq, index) => (
    <div key={index} className="faq-item">
      <div
        className={`faq-question ${activeQuestion === index ? 'active' : ''}`}
        onClick={() => toggleAnswer(index)}
      >
        <span>{faq.question}</span>
      </div>
      {activeQuestion === index && (
        <div className="faq-answer">
          <ul>
            <li><p>{faq.answer}</p></li>
          </ul>
        </div>
      )}
    </div>
  ))}
</div>

    </div>
  );
};

export default ContactPage;
