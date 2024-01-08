import React from 'react'
import './Header.css'
import FPStar from '../../public/four-point-star.png' ;

export default function Header() {
  return (
    <div className='header-view'>

      <NameLogo />
      <FourPStar />
      <ResumeButton />

    </div>
  )
}

export function NameLogo()  {
  return (
  <div className="nameLogo">
    <p>Jerin James</p>
  </div>
  );
}

export function FourPStar()  {
  return (
    <div className="fourPStar">
      <img src={FPStar} alt="Four Point Star" />
    </div>
  );
}

export function ResumeButton()  {
  return (
    <div className="resumeButton">
      <a href='' target='_blank'>resume</a>
    </div>
  );
}
