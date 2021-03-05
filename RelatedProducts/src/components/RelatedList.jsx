import React from 'react';
import Card from './Card.jsx';
import ScrollBtn from './ScrollBtn.jsx';

class RelatedList extends React.Component {
  constructor(props) {
    super(props);
    this.handleCompare = this.handleCompare.bind(this);
  }

  handleCompare(id) {
    this.props.handleCompare(id);
  }

  render() {
    const { relatedList, currentProduct } = this.props;
    return (
      <div className="container">
        <ScrollBtn direction="left" isBoundary={true} list="relatedList" />
        <div className="list" id="relatedList">
          {relatedList.map((item) => (
            <Card handleClick={this.handleCompare} key={item} id={item} list="relatedList" currentProduct={currentProduct}/>
          ))}
        </div>
        <ScrollBtn direction="right" isBoundary={true} list="relatedList" />
      </div>
    )
  }
}

export default RelatedList;
