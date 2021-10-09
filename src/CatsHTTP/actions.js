import { setData, setError, setLoading } from "./catsHTTPSlice";

const getLink = (responseStatus) => {
  const HTTP_CATS_URL = "https://http.cat/";
  const HTTP_CATS_REQUEST_URL = HTTP_CATS_URL + responseStatus.toString();
  return HTTP_CATS_REQUEST_URL;
}

export const getCatServerPhoto = (requestUrl) => async (dispatch, getState) => {
  // const SERVER_REQUEST_URL = "https://thatcopy.pw/catapi/rest/";
  // const SERVER_REQUEST_MISS_URL = "http://rrewrwerwer.ru/";
  console.log(requestUrl);
  const {
    cats: { data, loading, error  },
  } = getState();

  if (!loading) {
    try {
      dispatch(setError(false));
      dispatch(setLoading(true));
      const responce = await fetch(requestUrl);
      if (!responce.ok) {
        throw new Error("Something went wrong");
      }
      dispatch(setData(getLink(responce.status)));
    } catch (e) {
      dispatch(setError(true));
    } finally {
      dispatch(setLoading(false));
    }
  }
};
