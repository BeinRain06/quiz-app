import "./Quiz.css";

function Quiz() {
  const a = 1,
    b = 2;

  return (
    <div className="quiz_container col-10 col-md-10 col-lg-10">
      <div className="quiz_content d-flex flex-column">
        <div className="show_answers">
          <p className="true_answers">{`Correct answers: ${a}/${b}`} </p>
        </div>
        <div className="show_quiz">
          <h1 className="selected_query">
            What was William Frederick Cody Better Known as ?{" "}
          </h1>
          <div className="show_proposal d-flex flex-column">
            <p className="selected_proposal">Billy The Kid</p>
            <p className="selected_proposal">Wild Bill Hickok</p>
            <p className="selected_proposal">Pawnee Bill</p>
            <p className="selected_proposal">Buffalo Bill</p>
          </div>
        </div>
      </div>
      <div className="go_to_next d-flex">
        <button type="submit" className="next_questions">
          Next Questions
        </button>
      </div>
    </div>
  );
}

export default Quiz;
