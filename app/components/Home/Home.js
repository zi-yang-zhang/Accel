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



if (process.env.BROWSER) {
  require('./Home.less');
}
export default class Home extends React.Component {
  constructor() {
    super();
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
        items={images}
        autoPlay={true}
        slideInterval={4000}
        showBullets={true}
        showThumbnails={false}/>
      </div>
    );
  }
}


Home.prototype.displayName = 'Home';

