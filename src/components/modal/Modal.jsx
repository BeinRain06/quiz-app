import "./Modal.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";
import Resume from "./Resume";

function Modal() {
  const {
    modal,
    winOrLoose,
    showResume,
    playAgain,
    recordGame,
    correct,
    questions,
  } = useContext(AppContext);

  const percentage = (correct / questions.length) * 100;

  if (showResume) {
    return <Resume />;
  }

  return (
    <div className="modal_container">
      {modal && (
        <div className="modal_content d-flex">
          {winOrLoose ? (
            <div className="modal_message_one">
              <div className="mod_success">
                <p className="modal_success">Congratulations</p>
              </div>
              <p className="modal_paragraph">
                <span className="show_percentage">{percentage}</span>% of
                answers was correct
              </p>
            </div>
          ) : (
            <div className="modal_message_two">
              <p className="modal_paragraph">
                <span className="show_percentage">{percentage}</span>% of
                answers was correct
              </p>
            </div>
          )}

          <div className="redirect_side">
            <button className="btn_resume" onClick={recordGame}>
              Show Resume
            </button>
            <button className="btn_restart" onClick={playAgain}>
              Restart
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
