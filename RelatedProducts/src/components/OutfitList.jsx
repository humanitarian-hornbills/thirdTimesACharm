import React from 'react';
import Card from './Card.jsx';

class OutfitList extends React.Component {
  constructor(props) {
    super(props);
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  addToList(e) {
    e.preventDefault();
    this.props.addToList();
  }

  removeFromList(id) {
    this.props.removeFromList(id);
  }

  handleScroll(e) {
    e.preventDefault();
    this.props.handleScroll('outfitList', e.target.id);
  }

  render() {
    const { currentImg, outfitList, handleScroll, currentProduct } = this.props;
    return (
      <div>


        <div className="container">
          <div className="scroll-btn-left" onClick={this.handleScroll} id="left"><span className="scroll-btn-arrow">&lt;</span></div>
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
              (item) => <Card handleClick={this.removeFromList} key={item} id={item} list="outfitList" currentProduct={currentProduct} />,
            )}
          </div>
          <div className="scroll-btn-right" onClick={this.handleScroll} id="right"><span className="scroll-btn-arrow">&gt;</span> </div>
        </div>
      </div>
    );
  }
}

export default OutfitList;
