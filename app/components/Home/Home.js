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

if (process.env.BROWSER) {
  require('./Home.less');
}

class Home extends React.Component {
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

    return (
      <div>
        <ImageGallery
            onSlide={this.handleSlide.bind(this)}
            items={this.props.pictures.toArray()}
            autoPlay={true}
            slideInterval={4000}
            showBullets={true}
            showThumbnails={false}
        onClick={this.handleClick.bind(this)}/>

      </div>
    );
  }
}


Home.prototype.displayName = 'Home';
export default connectToStores(Home);