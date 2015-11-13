/**
 * Created by robert on 23/09/15.
 */
// LIBRARY
import React from 'react';
import ImageGallery from 'react-image-gallery';

if (process.env.BROWSER) {
  require('./Home.less');
}
export default class HomeSection extends React.Component {
  constructor() {
    super();
  }



  render() {
    const images = [
      {
        original:'../../../assets/1.jpg'
      },
      {
        original:'../../../assets/2.jpg'
      },
      {
        original:'../../../assets/3.jpg'
      },
      {
        original:'../../../assets/4.jpg'
      },
      {
        original:'../../../assets/5.jpg'
      },
      {
        original:'../../../assets/6.jpg'
      }
    ];
    return (
      <section className='mdl-layout__content home-bg'>
        <ImageGallery
        items={images}
        autoPlay={true}
        slideInterval={4000}
        showThumbnails={false}/>
        <div className='brand'>
          <h1 className='brand_name'>Accel Auto</h1>
        </div>
      </section>
    );
  }
}


HomeSection.prototype.displayName = 'HomeSection';

