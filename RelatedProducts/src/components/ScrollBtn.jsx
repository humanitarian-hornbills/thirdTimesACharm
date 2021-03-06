import React from 'react';
import isInboundary from '../utility/isInboundary.js';
import $ from 'jquery';

const ScrollBtn = ({ direction, list }) => {
  const handleScroll = () => {
    const scrollList = $(`#${list}`);
    if (direction === 'left') {
      scrollList.scrollLeft(scrollList.scrollLeft() - 300);
      if (isInboundary(list, direction)) {
        scrollList.removeClass('bounce-left');
        scrollList.removeClass('bounce-right');
        scrollList.outerWidth(scrollList.outerWidth());
        scrollList.addClass('bounce-left');
      }
    } else if (direction === 'right') {
      scrollList.scrollLeft(scrollList.scrollLeft() + 300);
      if (isInboundary(list, direction)) {
        scrollList.removeClass('bounce-right');
        scrollList.removeClass('bounce-left');
        scrollList.outerWidth(scrollList.outerWidth());
        scrollList.addClass('bounce-right');
      }
    }
  };
  let scrollBtn = '';
  if (direction === 'left') {
    scrollBtn = <div className="scroll-btn-left btn-disable" onClick={handleScroll} onKeyDown={handleScroll} role="button" tabIndex={0}><span className="scroll-btn-arrow">&lt;</span></div>;
  } else if (direction === 'right') {
    scrollBtn = <div className="scroll-btn-right btn-disable" onClick={handleScroll} onKeyDown={handleScroll} role="button" tabIndex={0}><span className="scroll-btn-arrow">&gt;</span></div>;
  }
  return (
    <>
      { scrollBtn}
    </>
  );
};

export default ScrollBtn;
