import { faArrowAltCircleUp, faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const ScrollButton = () => {
  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 200) {
      document.getElementsByClassName('scroll-button-icon')[0]?.classList.add('slide-in');
    }
    else if (scrolled <= 200) {
      document.getElementsByClassName('scroll-button-icon')[0]?.classList.remove('slide-in');
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <div className='scroll-button has-text-info'>
      <FontAwesomeIcon icon={faArrowCircleUp} className='scroll-button-icon' onClick={scrollToTop} />
    </div>
  );
}

export default ScrollButton; 