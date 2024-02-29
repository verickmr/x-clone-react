import { FormEvent, useState } from "react";
import Header from "../_components/Header";
import Tweet from "../_components/Tweet";

function App() {
  const [tweets, setTweets] = useState(["oiii", "first tweet"]);
  const [content, setContent] = useState("");

  function createNewTweet(event: FormEvent) {
    event.preventDefault();
    setTweets([content, ...tweets]);
    setContent("")
  }
  return (
    <main>
      <Header title="Home" />
      <form onSubmit={createNewTweet} className="add-form" action="">
        <label htmlFor="">
          <img src="" alt="" />
          <textarea
          value={content}
            onChange={(event) => {
              setContent(event.target.value)
            }}
            placeholder="What's happening ?"
            id="tweet-add"
          ></textarea>
        </label>
        <button type="submit">Tweet</button>
      </form>

      <div className="line" />
      {tweets.map((tweet) => (
        <Tweet key={tweet} content={tweet} />
      ))}
    </main>
  );
}

export default App;
