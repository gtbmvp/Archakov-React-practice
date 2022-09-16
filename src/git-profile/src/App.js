import axios from "axios";
import React from "react";
import "./App.css";

function App() {
  const [searchField, setSearchField] = React.useState("");
  const [user, setUser] = React.useState({});
  const [error, setError] = React.useState(false);
  const [fetching, setFetching] = React.useState(false);

  const urlSearch = new URL(window.location.href).searchParams.get("login");

  const isMounted = React.useRef(false);

  const search = async () => {
    setFetching(true);

    try {
      const { data } = await axios.get(
        `https://api.github.com/users/${searchField}`
      );
      setFetching(false);
      setUser(data);
      window.history.replaceState(null, "", `/?login=${data.login}`);
      setError(false);
    } catch (err) {
      setError(err);
      setFetching(false);
      window.history.replaceState(null, "", `/`);
    }
  };

  // auto search
  React.useEffect(() => {
    if (isMounted.current) {
      if (searchField === "") return;

      const timer = setTimeout(search, 750);

      return () => {
        clearTimeout(timer);
      };
    } else {
      if (urlSearch) {
        setSearchField(urlSearch);
      }
      isMounted.current = true;
    }
  }, [searchField]);

  const handleSearch = (event) => {
    const { value } = event.target;
    setSearchField(value);
  };

  // search by button
  const handleClick = async (event) => {
    event.preventDefault();
    search();
  };

  return (
    <div id="app">
      <div className="app-container">
        <form className="app-form">
          <input
            onChange={handleSearch}
            value={fetching ? "Загрузка..." : searchField}
            type="text"
            className="app-input"
            placeholder="Укажите GitHub-аккаунт"
          />
          <button
            disabled={fetching}
            onClick={handleClick}
            className="app-form_btn"
          >
            Найти
          </button>
        </form>

        {Object.entries(user).length > 5 && (
          <div className="app-user">
            {error ? (
              <h1> {error.message} </h1>
            ) : (
              <div>
                <div className="app-user_info">
                  <div className="app-user_image">
                    <img
                      style={{ width: 90, borderRadius: 45 }}
                      src={user.avatar_url}
                      alt={user.id}
                    />
                  </div>
                  <div className="app-user_data">
                    <h1 className="app-user_name">
                      {user.name}
                      <span>@{user.login}</span>
                    </h1>
                    <p className="app-user_about">{user.bio}</p>
                  </div>
                </div>
                <ul className="app-user_stats">
                  <li className="app-user_stats-item">
                    <p>Репозитории</p>
                    <span>{user.public_repos}</span>
                  </li>
                  <li className="app-user_stats-item">
                    <p>Подписчиков</p>
                    <span>{user.followers}</span>
                  </li>
                  <li className="app-user_stats-item">
                    <p>Gists</p>
                    <span>{user.public_gists}</span>
                  </li>
                </ul>
                <ul className="app-user_location">
                  <li className="app-user_location-item">{user.location}</li>
                  <li className="app-user_location-item">
                    <a href={user.blog}>{user.blog}</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
