import React from 'react';
import { Link } from 'react-router-dom';
import '../stylesheets/Footer.scss';

import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';

const Footer = () => {
  const links = [
    {
      id: 'l0',
      title: 'Features',
      subLinks: [
        { id: 'sl0', title: 'Link Shortening', link: 'link-shortening' },
        { id: 'sl1', title: 'Branded Links', link: 'branded-links' },
        { id: 'sl2', title: 'Analytics', link: 'analytics' }
      ]
    },
    {
      id: 'l1',
      title: 'Resources',
      subLinks: [
        { id: 'sl3', title: 'Blog', link: 'blog' },
        { id: 'sl4', title: 'Developers', link: 'developers' },
        { id: 'sl5', title: 'Support', link: 'support' }
      ]
    },
    {
      id: 'l2',
      title: 'Company',
      subLinks: [
        { id: 'sl6', title: 'About', link: 'about' },
        { id: 'sl7', title: 'Our Team', link: 'our-team' },
        { id: 'sl8', title: 'Careers', link: 'careers' },
        { id: 'sl9', title: 'Contact', link: 'contact' }
      ]
    }
  ];
  const socialLinks = [
    { id: 'sol0', title: 'facebook', icon: facebook, link: '#' },
    { id: 'sol1', title: 'twitter', icon: twitter, link: '#' },
    { id: 'sol2', title: 'pinterest', icon: pinterest, link: '#' },
    { id: 'sol3', title: 'instagram', icon: instagram, link: '#' }
  ];
  return (
    <footer>
      <div className="logo-container">Shortly</div>
      <div className="footer-links">
        {links.map(group => (
          <ul key={group.id} className="links-group">
            <h4>{group.title}</h4>
            {group.subLinks.map(link => (
              <li key={link.id}>
                <Link to={link.link}>{link.title}</Link>
              </li>
            ))}
          </ul>
        ))}
        <div className="social-links">
          {socialLinks.map(link => (
            <a key={link.id} href={link.link} aria-label={link.title}>
              <img src={link.icon} alt={link.title}></img>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
