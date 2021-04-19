import React from 'react';

const InfoCard = ({ info }) => {
  return (
    <div className="info-card">
      <div className="logo-container">
        <div className="info-logo">
          <img src={info.logo} alt=""></img>
        </div>
      </div>
      <span className="card-heading">{info.title}</span>
      <p>{info.details}</p>
    </div>
  );
};

export default InfoCard;
