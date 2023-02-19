import { Link as GatsbyLink } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

const Link = ({ to, children, ...props }) => {
  if (to.startsWith('/')) {
    return (
      <GatsbyLink to={to} {...props}>
        {children}
      </GatsbyLink>
    );
  }

  return (
    <a href={to} {...props}>
      {children}
    </a>
  );
};

Link.propTypes = {
  className: PropTypes.string,
  to: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Link.defaultProps = {
  className: null,
  to: null,
};

export default Link;
