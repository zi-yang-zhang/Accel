/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';
import ImageGallery from 'react-image-gallery';
import firstImage from '../../../assets/1.jpg';
import secondImage from '../../../assets/2.jpg';

import thirdImage from '../../../assets/3.jpg';
import fourthImage from '../../../assets/4.jpg';
import fifthImage from '../../../assets/5.jpg';
import sixthImage from '../../../assets/6.jpg';

import {Modal} from 'react-bootstrap';



if (process.env.BROWSER) {
  require('./Home.less');
}
export default class Home extends React.Component {
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
  render() {
    const images = [
      {
        original:firstImage
      },
      {
        original:secondImage
      },
      {
        original:thirdImage
      },
      {
        original:fourthImage
      },
      {
        original:fifthImage
      },
      {
        original:sixthImage
      }
    ];
    return (
      <div>
        <ImageGallery
            onSlide={this.handleSlide.bind(this)}
            items={images}
            autoPlay={true}
            slideInterval={4000}
            showBullets={true}
            showThumbnails={false}
        onClick={this.handleClick.bind(this)}/>
        <Modal
            show={this.state.showModal}
            onHide={this.close.bind(this)}>
          <Modal.Body>
            <img src={images[this.state.imageIndex].original}/>
          </Modal.Body>
        </Modal>

      </div>
    );
  }
}


Home.prototype.displayName = 'Home';

