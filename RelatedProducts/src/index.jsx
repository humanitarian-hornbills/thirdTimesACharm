import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import RelatedList from './components/RelatedList.jsx';
import OutfitList from './components/OutfitList.jsx';
import CompareProducts from './components/CompareProducts.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentProductId: 14034,
      relatedList: [],
      outfitList: [],
      currentImg: '',
      currentProduct: {},
      compareProduct: null,
    };
    this.addToList = this.addToList.bind(this);
    this.removeFromList = this.removeFromList.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleCompare = this.handleCompare.bind(this);
  }

  componentDidMount() {
    axios.get('/products/14034/related')
      .then((res) => {
        this.setState({ relatedList: res.data });
      });
    axios.get('/products/14034/styles')
      .then((res) => {
        this.setState({ currentImg: res.data.results[0].photos[0].thumbnail_url });
      });
    axios.get('/products/14034')
      .then((res) => {
        this.setState({ currentProduct: res.data })
      })

    if (localStorage.getItem('outfitList')) {
      const outfitList = localStorage.getItem('outfitList').split(',');
      this.setState({ outfitList });
    }
  }

  handleScroll(list, id) {
    const scrollList = document.getElementById(list);
    switch (id) {
      case 'left':
        scrollList.scrollLeft -= 380;
        break;
      case 'right':
        scrollList.scrollLeft += 380;
        break;
    }
  }


  addToList() {
    let outfitList = [];
    const { currentProductId } = this.state;
    if (localStorage.getItem('outfitList')) {
      outfitList = localStorage.getItem('outfitList').split(',');
    }
    outfitList.push(currentProductId.toString());
    localStorage.setItem('outfitList', outfitList);
    this.setState({ outfitList });
  }

  handleCompare(id) {
    const modal = document.getElementById('compareModal');
    const closeBtn = document.getElementById('close');
    axios.get(`./products/${id}`)
      .then((res) => {
        this.setState({
          compareProduct: res.data,
          currentProduct: this.state.currentProduct,
        });
      })
    modal.style.display = "block";
    closeBtn.onclick = () => {
      modal.style.display = "none";
    };
    window.onclick = (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
      }
    };
  }

  removeFromList(id) {
    const outfitList = localStorage.getItem('outfitList').split(',');
    const newList = outfitList.filter((element) => element !== id);
    localStorage.setItem('outfitList', newList);
    this.setState({ outfitList: newList });
  }

  render() {
    const {
      relatedList, outfitList, currentImg, currentProduct, compareProduct
    } = this.state;
    return (
      <div>
        <RelatedList
          handleScroll={this.handleScroll}
          handleCompare={this.handleCompare}
          relatedList={relatedList}
          currentProduct={currentProduct}
        />
        <OutfitList
          handleScroll={this.handleScroll}
          currentProduct={currentProduct}
          removeFromList={this.removeFromList}
          addToList={this.addToList}
          outfitList={outfitList}
          currentImg={currentImg}
        />
        <CompareProducts
          compareProduct={compareProduct}
          currentProduct={currentProduct}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
// export default App;
