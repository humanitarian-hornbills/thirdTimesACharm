import React from 'react';
import Card from './Card.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompare = this.handleCompare.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleCompare(id) {
    this.props.handleCompare(id);
  }

  handleScroll(e) {
    const { handleScroll } = this.props;
    e.preventDefault();
    handleScroll('relatedList', e.target.id);
  }

  render() {
    const { relatedList, currentProduct } = this.props;
    return (
      <div className="container">
        <div className="scroll-btn-left" onClick={this.handleScroll} id="left"><span className="scroll-btn-arrow">&lt;</span></div>
        <div className="list" id="relatedList">
          {relatedList.map((item) => (
            <Card handleClick={this.handleCompare} key={item} id={item} list="relatedList" currentProduct={currentProduct}/>
          ))}
        </div>
        <div className="scroll-btn-right" onClick={this.handleScroll} id="right"><span className="scroll-btn-arrow">&gt; </span></div>
      </div>
    )
  }
}

export default RelatedList;
