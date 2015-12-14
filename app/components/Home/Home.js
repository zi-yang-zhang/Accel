/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';

import {Modal} from 'react-bootstrap';
import HomePagePictureStore from '../../stores/HomePagePictureStore'
import HomePagePictureActions from '../../actions/HomePagePictureActions'
import connectToStores from 'alt/utils/connectToStores'
import ImageGallery from 'react-image-gallery';
import Immutable, { Map} from 'immutable';

if (process.env.BROWSER) {
  require('./Home.less');
}

let home = class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageIndex:0,
      showModal: false
    };
  }
  handleClick() {
    this.open()
  }
  handleSlide(index){
    this.setState({
      imageIndex:index
    });

  }

  close(){
    this.setState({ showModal: false });
  }

  open(){
    this.setState({ showModal: true });
  }

  componentDidMount() {
    HomePagePictureActions.updatePictures(5);
  }

  static getStores() {
    // this will handle the listening/unlistening for you
    return [HomePagePictureStore]
  }

  static getPropsFromStores() {
    // this is the data that gets passed down as props
    return HomePagePictureStore.getState()
  }
  render() {
    let display = Home.getPropsFromStores();
    console.log(display);
    return (

      <div>
        <ImageGallery
            onSlide={this.handleSlide.bind(this)}
            items={display.get('pictures')}
            autoPlay={true}
            slideInterval={4000}
            showBullets={true}
            showThumbnails={false}
        onClick={this.handleClick.bind(this)}/>

      </div>
    );
  }
}


home.prototype.displayName = 'Home';

//home.propTypes = {pictures: React.PropTypes.instanceOf(Map)};
//home.defaultProps = {pictures: new Map()};
export default connectToStores(home);