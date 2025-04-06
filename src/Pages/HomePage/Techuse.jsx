import React from "react";
import './Techuse.css'
import Eimage from '../../components/images/Ecommerce.png'
import techwo from '../../components/images/womans.png'
const Techuse =() => {
    return(
        <div className='Techuse'>
        <h2>Technologies We Use</h2><br></br>
        <span>Stay updated with our expert articles and tips.</span>
        <div className='techusetog'>
            <div className='techusel'>
              <img src={Eimage} alt='Ecommerse pic'></img>
              <div className='textinside'>
                <p><span>Tech</span> &nbsp;&nbsp;&nbsp; &nbsp;  5 min read</p>
                    <h4>The Future Of Web Development</h4>
                    Discover the trends shaping the digital landscape today.
                    <p className='countst'>Read more  &nbsp; {'>'}</p>
                </div>
            </div>
            <div className='techuser'>
            <div className='techcount'>
              <div className="img-count">
                   <img src={techwo} alt='picofcount'></img>
              </div>
              <div className='text-count'>
                <div className='textinside'>
                <p><span>Tech</span> &nbsp;&nbsp;&nbsp; &nbsp;  5 min read</p>
                    <h4>Maximizing Your Online Presence</h4>

                    <p className='countst'>Read more  &nbsp; {'>'}</p>
                </div>
              </div>
            </div>
            <div className='techcount1'>
              <div className="img-count">
                   <img src={techwo} alt='picofcount'></img>
              </div>
              <div className='text-count'>
                <div className='textinside'>
                <p><span>Tech</span> &nbsp;&nbsp;&nbsp; &nbsp;  5 min read</p>
                    <h4>Maximizing Your Online Presence</h4>

                    <p className='countst'>Read more  &nbsp; {'>'}</p>
                </div>
              </div>
            </div>
            <div className='techcount'>
              <div className="img-count">
                   <img src={techwo} alt='picofcount'></img>
              </div>
              <div className='text-count'>
                <div className='textinside'>
                <p><span>Tech</span> &nbsp;&nbsp;&nbsp; &nbsp;  5 min read</p>
                    <h4>Maximizing Your Online Presence</h4>

                    <p className='countst'>Read more  &nbsp; {'>'}</p>
                </div>
              </div>
            </div>
            </div>
      
        </div>
        </div>
    )
}

export default Techuse;