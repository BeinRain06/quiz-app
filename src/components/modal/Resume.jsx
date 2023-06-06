import "./Resume.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";
import QueueItem from "./QueueItem";

function Resume() {
  const { resumeArray, correct, questions, playAgain } = useContext(AppContext);

  return (
    <div className="resume_container">
      <div className="resume_content d-flex flex-column">
        <h3 className="resume_title">Resume Game</h3>
        <ul className="primarly_response">
          {resumeArray.map((item, index) => (
            <QueueItem key={index} item={item} id={index} />
          ))}
        </ul>
        <div className="scored">
          <p className="score_hit">
            you Scored {correct} /{questions.length}
          </p>
        </div>
        <div className="continue_game">
          <button className="btn_game_on" onClick={playAgain}>
            Play Again
          </button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
