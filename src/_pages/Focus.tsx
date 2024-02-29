import { FormEvent, useState } from "react";
import Header from "../_components/Header";
import Tweet from "../_components/Tweet";
import { PaperPlaneRight } from "phosphor-react";


const Focus = () => {
  const [answers, setAnswers] = useState(["Concordo", "Parabéns"]);
  const [content, setContent] = useState("");

  function createNewReply(event: FormEvent) {
    event.preventDefault();
    setAnswers([content, ...answers]);
    setContent("");
  }
  return (
    <main>
      <Header title="Tweet" />
      <Tweet content="        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Facere iure voluptate, facilis amet a suscipit minus illum accusantium ipsum fugit eaque sequi aperiam dolorum possimus, nulla, eligendi dolore. Iusto, a." />
      <div className="line" />
      <form className="answer-form" onSubmit={createNewReply}>
        <label htmlFor="">
          <img src="" alt="" />
          <textarea
            value={content}
            onChange={(event) => {
              setContent(event.target.value);
            }}
            placeholder="What's happening ?"
            id="tweet-add"
          ></textarea>
        </label>
        <button type="submit"><PaperPlaneRight/><span>Tweet</span></button>
      </form>

      {answers.map((answer) => (
        <Tweet key={answer} content={answer} />
      ))}
    </main>
  );
};

export default Focus;
