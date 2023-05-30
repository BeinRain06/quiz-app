import "./Modal.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";
import Resume from "./Resume";

function Modal() {
  const { modal, winOrLoose, showResume, playAgain, recordGame } =
    useContext(AppContext);

  if (showResume) {
    return (
      <div className="resume_container">
        <div className="resume_content">
          <h1 className="title_resume">End Game</h1>
          <ul className="record_list">
            {resumeArray.map((item, index) => {
              <li className="record_element"></li>;
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <div className="modal_container">
      {modal && (
        <div className="modal_content d-flex">
          {winOrLoose ? (
            <div className="modal_message">
              <p className="modal_success">congratulations</p>
              <p className="modal_paragraph">
                <span className="show_percentage">65%</span>of answers was
                correct
              </p>
            </div>
          ) : (
            <div className="modal_message">
              <p className="modal_paragraph">
                <span className="show_percentage">16%</span>of answers was
                correct
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
