import React from "react";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MyListItem from "./components/MyListItem";

function App() {
  const [comments, setComment] = React.useState([]);
  const [inputValues, setValues] = React.useState({});

  const storageCommentsRef = React.useRef([]);
  const isMountedRef = React.useRef(false);

  /*    не срабатывает на этапе монтирования из-за рефа isMountedRef; 
        при изменении массива comments записывает его в localStorage, а также в storageCommentsRef
    */
  React.useEffect(() => {
    if (!isMountedRef.current) return;

    localStorage.setItem("comments", JSON.stringify(comments));
    storageCommentsRef.current = comments;
  }, [comments]);

  /*    при монтировании инициализируем storageCommentsRef или пустым массивом, если localStorage пустой по ключу comments, 
       или parsed содержимым, и меняем реф isMountedRef на true, позволяя работать второму useEffect
  */
  React.useEffect(() => {
    if (localStorage.getItem("comments") !== null)
      storageCommentsRef.current = JSON.parse(localStorage.getItem("comments"));

    isMountedRef.current = true;
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setComment((prev) => [...prev, { ...inputValues, createdAt: new Date() }]);
  };

  const handleChange = (event) => {
    const { name: field, value } = event.target;

    setValues((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      {/* {storageCommentsRef.current.map((comment) => (
        <h3>{comment}</h3>
      ))} */}

      {/* <List>
        {comments.map((comment) => (
          <>
            <MyListItem />
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List> */}

      <h2>Обратная связь:</h2>

      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1 },
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Имя"
          name="fullName"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          id="outlined-basic"
          label="Почта"
          name="email"
          onChange={handleChange}
        />
        <TextField
          fullWidth
          required
          id="outlined-multiline-static"
          label="Текст..."
          multiline
          rows={4}
          name="text"
          onChange={handleChange}
        />
        <Button fullWidth variant="contained" type="submit">
          ОТПРАВИТЬ
        </Button>
      </Box>
    </div>
  );
}

export default App;
