import React from 'react';
import inBoundary from '../utility/isInboundary.js';
import $ from 'jquery';

const ScrollBtn = ({ direction, list }) => {
  const handleScroll = (e) => {
    const scrollList = $(`#${list}`);
    if (direction === 'left') {
      scrollList.scrollLeft(scrollList.scrollLeft() - 230);
      if (inBoundary.isInboundary(list, direction)) {
        scrollList.removeClass('bounce-left');
        scrollList.removeClass('bounce-right');
        scrollList.outerWidth(scrollList.outerWidth());
        scrollList.addClass('bounce-left');
        e.target.parentNode.style.opacity = 0;
      }
      if (!inBoundary.isInboundaryOp(list, 'right')) {
        scrollList.siblings()[1].style.opacity = 1;
      }
    } else if (direction === 'right') {
      scrollList.scrollLeft(scrollList.scrollLeft() + 230);
      if (inBoundary.isInboundary(list, direction)) {
        scrollList.removeClass('bounce-right');
        scrollList.removeClass('bounce-left');
        scrollList.outerWidth(scrollList.outerWidth());
        scrollList.addClass('bounce-right');
        e.target.parentNode.style.opacity = 0;
      }
      if (!inBoundary.isInboundaryOp(list, 'left')) {
        scrollList.siblings()[0].style.opacity = 1;
      }
    }
  };
  let scrollBtn = '';

  if (direction === 'left') {
    if (inBoundary.isInboundary(list, 'left')) {
      scrollBtn = <div className="scroll-btn-left" style={{ opacity: 0 }} onClick={handleScroll} onKeyDown={handleScroll} role="button" tabIndex={0}><span className="scroll-btn-arrow">&lt;</span></div>;
    } else {
      scrollBtn = <div className="scroll-btn-left" onClick={handleScroll} onKeyDown={handleScroll} role="button" tabIndex={0}><span className="scroll-btn-arrow">&lt;</span></div>;
    }
  } else if (direction === 'right') {
    if (inBoundary.isInboundary(list, 'right')) {
      scrollBtn = <div className="scroll-btn-right" style={{ opacity: 0 }} onClick={handleScroll} onKeyDown={handleScroll} role="button" tabIndex={0}><span className="scroll-btn-arrow">&gt;</span></div>;
    } else {
      scrollBtn = <div className="scroll-btn-right" onClick={handleScroll} onKeyDown={handleScroll} role="button" tabIndex={0}><span className="scroll-btn-arrow">&gt;</span></div>;
    }
  }
  return (
    <>
      { scrollBtn}
    </>
  );
};

export default ScrollBtn;
