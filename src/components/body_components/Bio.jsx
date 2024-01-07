import React from 'react'
import FPStar from '../../assets/four-point-star.png' ;

export default function Bio() {
  return (
    <div className='bio-block'>
      <div className="bio-name">
        <p className='bio-tag'>Name :</p>
        <p>Jerin James</p>
      </div>
      <div className="bio-location">
        <div className="bio-location-text">
          <p className='bio-tag'>Based in :</p>
          <p>Bengaluru, India</p>
        </div>
        <div className="bio-location-map"></div>
        

      </div>
      <div className="bio-social">
        <div className="github">
          <img src={FPStar} alt="Four Point Star" />
        </div>
        <div className="linkedIn">
          <img src={FPStar} alt="Four Point Star" />
          </div>
        <div className="twitter">
          <img src={FPStar} alt="Four Point Star" />
          </div>
        <div className="instagram">
          <img src={FPStar} alt="Four Point Star" />
          </div>     
      </div>
    </div>
  )
}
