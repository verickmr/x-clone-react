import { ArrowClockwise, ChatCircle, Heart } from "phosphor-react";
import "./Tweet.css"
import { Link } from "react-router-dom";

interface TweetProps {
    content: string
}

const Tweet = (props: TweetProps) => {
  return (
    <Link to="/tweet" className="tweet">
      <img src="" alt="user-logo" />
      <div className="tweet-content">
        <div className="tweet-header">
          <strong>Victor Erick</strong>
          <span>@verickmr</span>
        </div>
        <p>
          {props.content}
        </p>
        <div className="tweet-footer">
          <button><ChatCircle/>20</button>
          <button><ArrowClockwise/>20</button>
          <button><Heart/>20</button>
        </div>
      </div>
    </Link>
  );
};

export default Tweet;
