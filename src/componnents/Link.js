import React from 'react';

const Link = (props) => {
  const { link } = props;
  return (
    <li>
      <div>
        {link.description} ({link.url})
      </div>
    </li>
  );
};

export default Link;