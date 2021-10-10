import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useDispatch, useSelector } from "react-redux";
import { defaultData, setData } from "./catsHTTPSlice";
import HTTPInput from "./HTTPInput";

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
  
   
  const { data, loading, error, progressData, errorImage } = useSelector((state) => state.catsHTTP);
  if (data !== defaultData) {
    dispatch(setData(data));
  }

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        {loading && <CircularProgress /> && (
          <img className={classes.catImg} src={progressData} alt="progressCat" />
        )}
        {error && <div>Возникла ошибка</div> && (
          <img className={classes.catImg} src={errorImage} alt="errorImage" />
        )}

        {!loading && !error && data && (
          <img className={classes.catImg} src={data} alt="Cat" />
        )}
      </div>
      <HTTPInput />    
    </div>
  );
};

export default Cats;
