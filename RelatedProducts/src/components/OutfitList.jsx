import React from 'react';
import Card from './Card.jsx';
import ScrollBtn from './ScrollBtn.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isBoundary: true,
    };
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
  }

  addToList(e) {
    e.preventDefault();
    this.props.addToList();
  }

  removeFromList(id) {
    this.props.removeFromList(id);
  }


  render() {
    const { currentImg, outfitList, handleScroll, currentProduct } = this.props;
    return (
      <div>
        <div className="container">
          <ScrollBtn direction="left" list="outfitList" />
          <div className="list" id="outfitList">

            <div className="card" onClick={this.addToList}>
              <div className="addList">
                <div className="frame">
                  <img src={currentImg} alt="image" />
                </div>
                <div>Add To Outfit List</div>
                <div id="addSign">+</div>
              </div>
            </div>

            {outfitList.map(
              (item) => <Card onClick={this.removeFromList} key={item} id={item} list="outfitList" currentProduct={currentProduct} />,
            )}
          </div>
          <ScrollBtn direction="right" list="outfitList" />
        </div>
      </div>
    );
  }
}

export default OutfitList;
