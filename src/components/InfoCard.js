import React from 'react';

const InfoCard = ({ info }) => {
  return (
    <div className="info-card">
      <div className="info-logo">
        <img src={info.logo} alt=""></img>
      </div>
      <span className="card-heading">{info.title}</span>
      <p>{info.details}</p>
    </div>
  );
};

export default InfoCard;
