import React, { useState } from 'react';
import classes from './HotelWithDetails.module.scss';
import { PhotosCarousel } from './PhotosCarousel/PhotosCarousel';
import { Reviews } from './Reviews/Reviews';
import { Hotel } from './interface';
import { Maps } from '../Maps/Maps';
import { Overview } from './Overview/Overview';
import { MoreInfo } from './MoreInfo/MoreInfo';
import { BookList } from './BookList/BookList';

interface Props {
  hotelData: Hotel,
  photos: any
}

export const HotelWithDetails: React.FC<Props> = ({ hotelData, photos }) => {
  const [isInfoVisible, setIsInfoVisible] = useState(false);

  return (
    <div className={classes.container}>
      <h2 className={classes.title} >{hotelData.body.propertyDescription.name}</h2>
      <div className={classes.topRow}>
        <div className={classes.imagesWrapper}>
          <PhotosCarousel photos={photos.hotelImages} />
        </div>
        <div className={classes.reviewsAndMap}>
          <div className={classes.map}>
            <Maps 
              isMarkerShown={true} 
              lat={hotelData.body.pdpHeader.hotelLocation.coordinates.latitude}
              lon={hotelData.body.pdpHeader.hotelLocation.coordinates.longitude}
            />
          </div>
          <Reviews reviews={hotelData.body.guestReviews} />
        </div>
      </div>
      <Overview overview={hotelData.body.overview}/>
      <button 
        type="button" 
        className={`${classes.infoButton} fs-16-italic-bold`}
        onClick={() => setIsInfoVisible(!isInfoVisible)}
      >
        More info about accomodation 	
        <div style={{ transform: isInfoVisible ? 'rotate(0deg)' : 'rotate(180deg)'}}>&#8679;</div>
      </button>
      {
        isInfoVisible && <MoreInfo info={hotelData.body.atAGlance}/>
      }
      <div>
        <BookList rooms={hotelData.body.roomsAndRates.rooms}/>
      </div>
    </div>
  )
}