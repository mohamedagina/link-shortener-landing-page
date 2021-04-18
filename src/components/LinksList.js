import React, { useState } from 'react';
import LinkCard from './LinkCard';

const LinksList = ({ links = [] }) => {
  const [copied, setCopied] = useState(-1);
  const handleCopy = link => {
    navigator.clipboard
      .writeText(link.shortLink)
      .then(() => setCopied(link.id))
      .catch(err => console.log(err));
  };
  return (
    <section className="links-list">
      {links.map(link => (
        <LinkCard
          copied={link.id === copied}
          handleCopy={handleCopy}
          key={link.id}
          link={link}
        />
      ))}
    </section>
  );
};

export default LinksList;
