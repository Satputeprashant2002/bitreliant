
import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom';
import Reason from './Reason'
import Techuse from './Techuse'
import homeimg from '../../components/images/home-img.svg';
const HomePage = () => {
  
  return (
    <div className="homepage">
      <div className='homeup'>
        <div className='tog-homeup'>
        <div className='lhomeup'>
       <div className='headtag'>
        <span className='tag1' >Elevate Your Business with </span> <br/>
        <span className='tag2'>Bit Reliant Solutions</span>
       </div>
       <div className='stag'>
        <span >Transform your online presence with our expert web development and design services.Get started today and watch your vision come to life !</span>
       </div>
       <div className='btn'>
       <button className='btn-set'><Link  to="/about">Get Quote</Link></button>
        <button className='btn-set'><Link  to="/about">Learn More</Link></button>
       </div>
      
       </div>
       <div className='rhomeup'>
        <img src={homeimg} alt='homeside'></img>
       </div>
       </div>
       <div className='contact-icon-h'>
        
        </div>
      </div>
      <Reason/>
      <Techuse/>
    </div>
    
  );
};

export default HomePage;
