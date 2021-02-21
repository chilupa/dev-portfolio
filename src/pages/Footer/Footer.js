import React from 'react';
import Icon from '../../components/Icon/Icon';
import { icons } from './icons';

const Footer = () => {
  return (
    <div class="pv4 ph3 ph5-ns tc">
      {icons.map((props, index) => (
        <Icon key={index} {...props} />
      ))}
    </div>
  );
};

export default Footer;
