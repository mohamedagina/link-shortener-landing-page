import React, { useState, useEffect } from 'react';
import '../stylesheets/Main.scss';

import LinksList from './LinksList';
import LinkForm from './LinkForm';
import InfoCard from './InfoCard';

import recognition from '../images/icon-brand-recognition.svg';
import detailed from '../images/icon-detailed-records.svg';
import customizable from '../images/icon-fully-customizable.svg';

const Main = () => {
  const [invalid, setInvalid] = useState(false);
  const [links, setLinks] = useState(
    JSON.parse(localStorage.getItem('shortLinks'))
  );
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    localStorage.setItem('shortLinks', JSON.stringify(links));
  }, [links]);

  const infos = [
    {
      id: 'i0',
      logo: recognition,
      title: 'Brand Recognition',
      details:
        'Boost your brand recognition with each click. Generic links don`t mean a thing. Branded links help instil confidence in your content'
    },
    {
      id: 'i1',
      logo: detailed,
      title: 'Detailed Records',
      details:
        'Gain insights into who is clicking your links. Knowing when and where people engage with your content helps to inform better decisions.'
    },
    {
      id: 'i2',
      logo: customizable,
      title: 'Fully Customizable',
      details:
        'Improve brand awareness and content discoverability through cutomizable links, supercharging audience engagement.'
    }
  ];

  const handleSubmit = e => {
    e.preventDefault();
    if (!loading) {
      const input = document.getElementById('link-input');
      if (!input.value) {
        setInvalid(true);
        return;
      }
      setLoading(true);
      setInvalid(false);
      fetch(`https://api.shrtco.de/v2/shorten?url=${input.value}`)
        .then(res => res.json())
        .then(res => {
          const { result } = res;
          input.value = '';
          setLoading(false);
          setLinks([
            ...links,
            {
              id: result.code,
              fullLink: result.original_link,
              shortLink: result.short_link
            }
          ]);
        })
        .catch(() => {
          setLoading(false);
          alert('some error happened, try again.');
        });
    }
  };
  return (
    <main>
      <LinkForm
        handleSubmit={handleSubmit}
        invalid={invalid}
        loading={loading}
      />
      <LinksList links={links} />
      <section className="site-info">
        <span className="info-heading">Advanced Statistics</span>
        <p>
          Track how your links are performing across the web with our advanced
          Statistics dashboard.
        </p>
      </section>
      <section className="info-cards">
        {infos.map(info => (
          <InfoCard key={info.id} info={info} />
        ))}
      </section>
    </main>
  );
};

export default Main;
