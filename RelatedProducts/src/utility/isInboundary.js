import $ from 'jquery';

const inBoundary = {};
inBoundary.isInboundary = (list, direction) => {
  const scrollList = $(`#${list}`);
  if (direction === 'left') {
    if (scrollList.scrollLeft() - 230 <= 0) {
      return true;
    }
    return false;
  }
  if (scrollList.scrollLeft() + scrollList.width() + 230 >= scrollList.prop('scrollWidth')) {
    return true;
  }
  return false;
};

inBoundary.isInboundaryOp = (list, direction) => {
  const scrollList = $(`#${list}`);
  if (direction === 'left') {
    if (scrollList.scrollLeft() < 0) {
      return true;
    }
    return false;
  }
  if (scrollList.scrollLeft() + 230 >= scrollList.prop('scrollWidth')) {
    return true;
  }
  return false;
};
export default inBoundary;
