import React from "react";
import BlrMap from "../../assets/blr-map.png";
import GithubLogo from "../../assets/github.png";
import TwitterLogo from "../../assets/twitter.png";
import LinkedInLogo from "../../assets/linkedin.png";
import InstagramLogo from "../../assets/instagram.png";

export default function Bio() {
  return (
    <div className="bio-block">
      <div className="bio-name">
        <p className="bio-tag">Name :</p>
        <p className="bio-value">Jerin James</p>
      </div>
      <div className="bio-location">
        <div className="bio-location-text">
          <p className="bio-tag">Based in :</p>
          <p className="bio-value">Bengaluru, India</p>
        </div>
        <div className="bio-location-map">
          <img className="bio-blr-map" src={BlrMap} alt="Map of Bengaluru" />
        </div>
      </div>
      <div className="bio-social">
        <div className="github">
          <img src={GithubLogo} alt="Four Point Star" />
        </div>
        <div className="linkedIn">
          <img src={LinkedInLogo} alt="Four Point Star" />
        </div>
        <div className="twitter">
          <img src={TwitterLogo} alt="Four Point Star" />
        </div>
        <div className="instagram">
          <img src={InstagramLogo} alt="Four Point Star" />
        </div>
      </div>
    </div>
  );
}
