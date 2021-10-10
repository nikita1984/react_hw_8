import { useState, useCallback, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import {getCatServerPhoto} from './actions'


const useStyles = makeStyles((theme) => ({
  inputRoot: {
    margin: "0px 10px",
    width: "70%",
    '& label': {
      color: 'white',
    },
  },
  input: {
    color: "white",
  },

  button: {},

  inputWrapper: {
    flex: 1,
    width: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#212121",
    borderRadius: "10px",
    boxSizing: "border-box",
    padding: "20px",
  },
}));

const MessageInput = () => {
  const classes = useStyles();
  const [inputMessage, setInputMessage] = useState("");
  const dispatch = useDispatch();

  // const serverRequestMissUrl = "http://rrewrwerwer.ru/";
  const [requestUrl, setRequestUrl] = useState("");

  const getThunkCatServerStatusPhoto = useCallback(
    () => dispatch(getCatServerPhoto(requestUrl)),
    [requestUrl]
  );

  useEffect(() => {
    const trimmedMessageText = inputMessage.trim();
    if (trimmedMessageText !== "") {
      setRequestUrl(trimmedMessageText);
    }
  }, [inputMessage]);

  const sendAndRemoveInput = () => {
    const trimmedMessageText = inputMessage.trim();
    if (trimmedMessageText !== "") {
      // dispatch(getCatServerPhoto(requestUrl));
      getThunkCatServerStatusPhoto();
      setInputMessage("");
    }
  };

  return (
    <div className={classes.inputWrapper}>
      <TextField
        value={inputMessage}
        label="Введите сообщение"
        onChange={(e) => setInputMessage(e.target.value)}
        onKeyDown={({ key }) => {
          if (key === "Enter") {
            sendAndRemoveInput();
          }
        }}
        InputProps={{
          className: classes.input,
        }}
        // multiline
        classes={{
          root: classes.inputRoot,
        }}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={sendAndRemoveInput}
        classes={{
          root: classes.button,
        }}
      >
        Получить статус запроса от сервера
      </Button>
    </div>
  );
};

export default MessageInput;
