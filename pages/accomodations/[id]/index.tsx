import { getCurrentHotel,  getCurrentHotelPhotots } from '../helpers';
import { NextPage, NextPageContext } from 'next';
import { HotelWithDetails } from '../../../components/HotelWithDetails/HotelWithDetails';
import classes from './AccomodationPage.module.scss';

interface Props {
  data: any,
  photos: any
}
const AccomodationPage: NextPage<Props> = ({ data, photos }) => {
    return (
    <div className={classes.accomodationPageContainer}>
      <HotelWithDetails hotelData={data} photos={photos} />
    </div>
    )
}

AccomodationPage.getInitialProps = async (context: NextPageContext) => {
    const id = context.query.id;
    console.log(id, 99987789)
    const data = await getCurrentHotel(id)
    console.log(data)
    const photos = await getCurrentHotelPhotots(id)
    
    
    return { 
      data,
      photos
    }
  }

export default AccomodationPage;