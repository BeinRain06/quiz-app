import "./Resume.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";

function Resume() {
  const { resumeArray, correct, questions, playAgain, answer, setAnswer } =
    useContext(AppContext);

  const showRightAnswer = () => {
    setAnswer(!answer);
  };
  return (
    <div className="resume_container">
      <div className="resume content d-flex flex-column">
        <ul className="primarly_response d-flex">
          {resumeArray.map((item, index) => (
            <li className="answering_side">
              <div className="station_land">
                <span className="station_label">the answer to :</span>
                <span className="station_grade">
                  {item.right ? (
                    <i className="bi bi-plus"></i>
                  ) : (
                    <i className="bi bi-dash"></i>
                  )}
                </span>
              </div>
              <div className="listening_question d-flex flex-row">
                <p className="asked_for">{item.question}</p>
                <button className="see_answer" onClick={showRightAnswer}>
                  answer
                </button>
              </div>
              {answer && (
                <div className="bloc_answer">
                  <p className="right_answer_was"> {item.answer} </p>
                </div>
              )}
            </li>
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
