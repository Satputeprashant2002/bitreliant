import React from 'react';
import './Reason.css';
import { Link } from 'react-router-dom'; 
const Reason = () => {
  return (
    <div className='reason'>

      <div className='reason-img'></div>

      <div className='reasontext'>
       <p>Reliable, Scalable, and Always Accessible – Your Success is Our Foremost <br/>
       Commitment!</p><br/>
       <h2>Reasons to Select <span>Bit Reliant For Your Projects</span> </h2>
       <h5>At BITRELIANT, we deliver top-notch IT solutions with a commitment to innovation,<br/> quality, and client satisfaction. With 24/7 remote support and a dedicated team, we<br/> ensure seamless execution and long-term success for your projects.</h5>

       <div className='reasoncard'>
        <div className='src'>
        <span >7-Day Service Availability</span>
        <p>We go above and beyond conventional boundaries by providing comprehensive 7-day support to ensure your projects remain on schedule and free from delays. Your success is our foremost priority.</p>
        </div>
        <div className='src'>
          <span >7-Day Service Availability</span>
          <p>We go above and beyond conventional boundaries by providing comprehensive 7-day support to ensure your projects remain on schedule and free from delays. Your success is our foremost priority.</p>
        </div>
       </div>

       <div className='taillink'>
       <button><Link  to='/contact'>Learn More</Link></button>
       <Link to='/contact'>Contact  </Link>
      </div>
      
      </div>
    </div>
  );
};

export default Reason;