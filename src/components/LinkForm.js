import React from 'react';
import '../stylesheets/LinkForm.scss';

const LinkForm = ({ handleSubmit, invalid, loading }) => {
  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="link-form">
        <div className={`input-container ${invalid ? 'empty-input' : ''}`}>
          <input
            id="link-input"
            type="url"
            placeholder="Shorten a link here..."
          ></input>
        </div>
        <button disabled={loading} className="btn" type="submit">
          {loading ? <i className="fas fa-circle-notch"></i> : 'Shorten It'}
        </button>
      </form>
    </div>
  );
};

export default LinkForm;
