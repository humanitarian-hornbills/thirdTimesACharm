import $ from 'jquery';

const isInboundary = (list, direction) => {
  const scrollList = $(`#${list}`);
  if (direction === 'left') {
    if (scrollList.scrollLeft() - 300 <= 0) {
      return true;
    }
    return false;
  }
  if (scrollList.scrollLeft() + scrollList.width() + 300 >= scrollList.prop('scrollWidth')) {
    return true;
  }
  return false;
};

export default isInboundary;
