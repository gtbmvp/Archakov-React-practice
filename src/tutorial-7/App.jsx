import React from "react";
import axios from "axios";

function App() {
  const [users, setUsers] = React.useState([]);
  const [user, setUser] = React.useState({ email: "", name: "" });
  const [uploading, setUploading] = React.useState(false);

  const refContainer = React.useRef();

  const getUsers = async () => {
    try {
      const { data } = await axios.get(
        "https://6321dfda82f8687273bb7341.mockapi.io/users"
      );
      setUsers(data);
    } catch (error) {
      console.log("error");
    }
  };

  const handleChange = (event) => {
    const { name: field, value } = event.target;
    setUser((prev) => ({ ...prev, [field]: value }));
  };

  const handleClick = async (event) => {
    event.preventDefault();

    try {
      await axios.post(
        "https://6321dfda82f8687273bb7341.mockapi.io/users",
        user
      );
    } catch (error) {
      console.log("error");
    }
  };

  const handleUpload = async (event) => {
    event.preventDefault();

    const file = refContainer.current.files[0];
    const formData = new FormData();

    setUploading(true);

    formData.append("fileupload", file);

    await axios.post("http://localhost:9999", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    setUploading(false);
  };

  return (
    <>
      <div>
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
        <button onClick={getUsers}>Загрузить список пользователей...</button>
      </div>
      <hr />
      <form action="">
        <h2>Add user:</h2>
        <input
          onChange={handleChange}
          value={user.email}
          type="email"
          name="email"
        />
        <input
          onChange={handleChange}
          value={user.name}
          type="text"
          name="name"
        />
        <button onClick={handleClick}>Add</button>
        <h2>Fileupload:</h2>
        <input ref={refContainer} type="file" name="fileupload" />
        <button disabled={uploading} onClick={handleUpload}>
          Upload
        </button>
        {uploading && <p>Идет загрузка ...</p>}
      </form>
    </>
  );
}

export default App;
