import React from 'react';

const Icon = ({ link, title, icon }) => (
  <a
    class="link near-black hover-white dib h2 w2 mr3"
    href={link}
    target="_blank"
    rel="noreferrer"
    title={title}>
    {icon}
  </a>
);

export default Icon;
