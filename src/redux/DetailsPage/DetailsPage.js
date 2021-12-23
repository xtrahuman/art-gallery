import { FetchArt } from '../ArtList/Artlist';

const EACH_ART = 'art-gallery/DetailsPage/EACH_ART';

const intialState = [];

export const eachArt = (id) => async (dispatch) => {
  const ArtDetail = await FetchArt();
  const collection = ArtDetail.data.map((data) => {
    const { title, id } = data;
    return {
      title,
      id,
      displayDate: data.date_display,
      artist: data.artist_display,
      country: data.place_of_origin,
      credit: data.credit_line,
      imgt: `https://www.artic.edu/iiif/2/${data.image_id}/full/100,/0/default.jpg`,
    };
  }).filter((art) => art.id === Number(id));

  dispatch({
    type: EACH_ART,
    payload: collection,
  });
};

const detailsReducer = (state = intialState, action) => {
  switch (action.type) {
    case EACH_ART:
      return action.payload;
    default:
      return state;
  }
};

export default detailsReducer;
