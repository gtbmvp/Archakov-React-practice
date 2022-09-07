import React from "react";

import List from "@mui/material/List";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import MyListItem from "./components/MyListItem";

function App() {
  const [comments, setComment] = React.useState([]);
  const [inputValues, setValues] = React.useState({});

  const isMountedRef = React.useRef(false);

  /*    не срабатывает на этапе монтирования из-за рефа isMountedRef; 
        при изменении массива comments записывает его в localStorage
    */
  React.useEffect(() => {
    if (!isMountedRef.current) return;

    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  /*    если localStorage не пустой по ключу comments, инициализируем 
        массив comments parsed содержимым localStorage, меняем isMountedRef на true,
        позволяя работать второму useEffect
  */
  React.useEffect(() => {
    if (localStorage.getItem("comments") !== null) {
      setComment(JSON.parse(localStorage.getItem("comments")));
    }
    isMountedRef.current = true;

    return () => {
      isMountedRef.current = false;
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();

    setComment((prev) => [{ ...inputValues, createdAt: new Date() }, ...prev]);
  };

  const handleChange = (event) => {
    const { name: field, value } = event.target;

    setValues((prev) => ({ ...prev, [field]: value }));
  };

  const handleDelete = (date) => {
    setComment(comments.filter((comment) => comment.createdAt !== date));
  };

  return (
    <div style={{ width: 600, margin: "0 auto" }}>
      {comments.length > 0 && <h2>Отзывы</h2>}
      <List>
        {comments.map(({ createdAt, fullName, text }) => (
          <MyListItem
            key={createdAt}
            fullName={fullName}
            text={text}
            date={createdAt}
            deleteComment={handleDelete}
          />
        ))}
      </List>

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
