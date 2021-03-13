import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import '../../public/css.js';

const FadeInSection = ({ children }) => {
  const [isVisible, setVisible] = useState(true);
  const domRef = React.useRef();
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    return () => observer.unobserve(domRef.current);
  }, []);
  return (

    <div
      className={`fade-in-section ${isVisible ? 'is-visible' : ''}`}
      ref={domRef}
    >
      {children}
    </div>
  );
};

FadeInSection.propTypes = {
  children: PropTypes.element.isRequired,
};

export default FadeInSection;
