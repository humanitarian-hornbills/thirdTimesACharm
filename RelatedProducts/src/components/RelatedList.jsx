import React from 'react';
import Card from './Card.jsx';
import ScrollBtn from './ScrollBtn.jsx';

const RelatedList = ({ onCompare, relatedList, currentProduct }) => {
  const handleCompare = (id) => {
    onCompare(id);
  };
  const list = relatedList.map((item) => (
    <Card onClick={handleCompare} key={item} id={item} list="relatedList" currentProduct={currentProduct} />
  ));
  return (
    <div className="container " id="related-list">
      <ScrollBtn direction="left" list="relatedList" />
      <div className="list" id="relatedList">
        {list}
      </div>
      <ScrollBtn direction="right" list="relatedList" />
    </div>
  );
};

export default RelatedList;
