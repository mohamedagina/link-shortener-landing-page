import React from 'react';
import '../stylesheets/LinkForm.scss';

const LinkForm = () => {
  return (
    <div className="form-container">
      <form className="link-form">
        <div className="input-container">
          <input
            className=""
            type="url"
            placeholder="Shorten a link here..."
          ></input>
        </div>
        <button className="btn" type="submit">
          Shorten It
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
