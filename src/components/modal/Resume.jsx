import "./Resume.css";

function Resume() {
  return (
    <div className="resume_container">
      <div className="resume content d-flex flex-column">
        <div className="primarly_response d-flex">
          <div className="answering_side">
            <div className="station_land">
              <span className="station_label">the answer to :</span>
              <span className="station_grade">
                <i className="bi bi-dash"></i>
              </span>
            </div>
            <div className="listening_question d-flex flex-row">
              <p className="asked_for">
                which country organized the foutball world cup 2010 ?
              </p>
              <button className="see_answer">answer</button>
            </div>
            <div className="bloc_answer">
              <p className="right_answer_was">South Africa</p>
            </div>
          </div>
          <div className="answering_side">
            <div className="station_land">
              <span className="station_label">the answer to :</span>
              <span className="station_grade">
                <i className="bi bi-plus"></i>
              </span>
            </div>
            <div className="listening_question d-flex flex-row">
              <p className="asked_for">
                The Main Character in the anime Boku-no hero Academia ?
              </p>
              <button className="see_answer">answer</button>
            </div>
            <div className="bloc_answer">
              <p className="right_answer_was">Izuku Midoriya</p>
            </div>
          </div>
        </div>
        <div className="scored">
          <p className="score_hit"> you Scored 8/12</p>
        </div>
        <div className="continue_game">
          <button className="btn_game_on">Play Again</button>
        </div>
      </div>
    </div>
  );
}

export default Resume;
