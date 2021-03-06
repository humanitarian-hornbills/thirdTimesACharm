import React from 'react';
import Card from './Card.jsx';
import ScrollBtn from './ScrollBtn.jsx';

const OutfitList = ({ currentProduct, removeFromList, addToList, outfitList, currentImg }) => {
  const handleAddToList = (e) => {
    e.preventDefault();
    addToList();
  };

  const handleRemoveFromList = (id) => {
    removeFromList(id);
  }

  const list = outfitList.map(
    (item) => <Card onClick={handleRemoveFromList} key={item} id={item} list="outfitList" currentProduct={currentProduct} />,
  );

  return (
    <div>
      <div className="container">
        <ScrollBtn direction="left" list="outfitList" />
        <div className="list" id="outfitList">
          <div className="card" onClick={handleAddToList} onKeyDown={handleAddToList} role="button" tabIndex={0}>
            <div className="addList">
              <div className="frame">
                <img src={currentImg} alt="outfit list" />
              </div>
              <div>Add To Outfit List</div>
              <div id="addSign">+</div>
            </div>
          </div>
          {list}
        </div>
        <ScrollBtn direction="right" list="outfitList" />
      </div>
    </div>
  );
};

export default OutfitList;
