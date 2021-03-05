import React from 'react';

class CompareProducts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  render() {
    const { currentProduct, compareProduct } = this.props;
    return (
      <div id="compareModal" className="compareModal">
        <div className="modalContent">
          <span id="close">&times;</span>
          <div>Compare Products</div>
          <div className="compare">
            <div>
              {currentProduct.category}
            </div>
            {compareProduct
              && (
              <div>
                {compareProduct.category}
              </div>
            )}
          </div>
        </div>






      </div>
    );
  }
}

export default CompareProducts;
