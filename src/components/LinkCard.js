import React from 'react';
import '../stylesheets/LinkCard.scss';

const LinkCard = ({ link, handleCopy, copied }) => {
  return (
    <div className="link-card">
      <span className="full-link">{link.fullLink}</span>
      <div className="short-link-container">
        <span className="short-link">{link.shortLink}</span>
        <button
          onClick={() => handleCopy(link)}
          className={`btn ${copied ? 'copied' : ''}`}
          type="button"
        >
          {copied ? 'Copied!' : 'Copy'}
        </button>
      </div>
    </div>
  );
};

export default LinkCard;
