const GET_ART = 'art-gallery/Artlist/GET_ART';
const url = 'https://api.artic.edu/api/v1/artworks?page=1';
const intialState = [];
export const FetchArt = async () => {
  const request = await fetch(url);
  const artWork = await request.json();
  return artWork;
};

export const getArt = () => async (dispatch) => {
  const ArtDetail = await FetchArt();
  const collection = ArtDetail.data.map((data) => {
    const { title, id } = data;
    return {
      title,
      id,
      displayDate: data.date_display,
      imgcheck: data.image_id,
      imgt: `https://www.artic.edu/iiif/2/${data.image_id}/full/200,/0/default.jpg`,
    };
  });

  dispatch({
    type: GET_ART,
    payload: collection,
  });
};

const reducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ART:
      return action.payload;

    default:
      return state;
  }
};

export default reducer;
