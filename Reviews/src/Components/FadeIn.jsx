import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReviewApp from './ReviewApp.jsx';
import '../../public/css.js';

const FadeInSection = ({ productId }) => {
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
      <ReviewApp productId={productId} />
    </div>
  );
};

FadeInSection.propTypes = {
  productId: PropTypes.number.isRequired,
};

export default FadeInSection;
