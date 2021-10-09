import { useEffect, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import {getCatServerPhoto} from './actions'
import { defaultData, setData } from "./catsHTTPSlice";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: "100%",
    height: "100%",
  },

  imageWrapper: {
    minWidth: "450px",
    minHeight: "800px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  catImg: {
    width: "100%",
    height: "100%",
  },
}));


const Cats = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.catsHTTP);
  console.log(data, loading, error);
  
  if (data !== defaultData) {
    dispatch(setData(data));
  }
  
  const getThunkCatServerStatusPhoto = useCallback(
    () => dispatch(getCatServerPhoto()),
    [dispatch]
  );

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress />}
        {error && <div>Возникла ошибка</div>}

        {!loading && !error && data && (
          <img className={classes.catImg} src={data} alt="Cat" />
        )}
      </div>

      <Button
        variant="contained"
        color="primary"
        disabled={loading}
        onClick={() => getThunkCatServerStatusPhoto()}
      >
        Получить статус запроса от сервера
      </Button>
    </div>
  );
};

export default Cats;
