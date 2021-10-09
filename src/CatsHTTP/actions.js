import { setData, setError, setLoading } from "./catSlice";

const getLink = (responseStatus) => {
  const HTTP_CATS_URL = "https://http.cat/";
  const HTTP_CATS_REQUEST_URL = HTTP_CATS_URL + responseStatus.toString();
  console.log(HTTP_CATS_REQUEST_URL);
}

export const getCatPhoto = () => async (dispatch, getState) => {
  const SERVER_REQUEST_URL = "https://thatcopy.pw/catapi/rest/";
  const {
    cats: { data, loading, error },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(SERVER_REQUEST_URL);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      getLink(responce.status);
      
      const result = await responce.json();

      dispatch(setData(result));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
