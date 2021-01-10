import "./App.css";
import "./components/GithubUser.js";
import { useState } from "react";
import axios from "axios";

const App = () => {
  const [username, setUsername] = useState("");
  const [followers, setFollowers] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  return (
    <div className="App">
      <div className="input-container">
        <input
          type="text"
          autoCapitalize="false"
          autoComplete="false"
          placeholder="Github Username"
          value={username}
          onChange={(event) => {
            const newValue = event.target.value;

            setUsername(newValue);
          }}
        />
        <input
          type="button"
          value="Get GitHub Followers"
          onClick={() => {
            let gitFollowers = [];
            getFollowers(username, 1)
              .then((data) => {
                data.forEach((value) => {
                  gitFollowers.push(value);
                });
              })
              .then(() => {
                setFollowers(gitFollowers);
              });

            let page = pageNumber + 1;

            setPageNumber(page);
          }}
        />
      </div>
    </div>
  );
};

// Method stub would look like this if you don't use arrow functions:
//    async function getFollowers(username, page) { ... }
const getFollowers = async (username, page) => {
  try {
    let url = `https://api.github.com/users/${username}/followers?page=${page}`;
    let gitFollowers = [];

    const response = await axios.get(url);
    gitFollowers = [...response.data];

    return gitFollowers;
  } catch (err) {
    console.error(err);
  }
};

export default App;
