import "./Quiz.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";
import Modal from "../modal/Modal";

function Quiz() {
  const {
    correct,
    questions,
    indexTarget,
    nextQuestions,
    retrieveAnswer,
    modal,
  } = useContext(AppContext);

  const selectedItem = questions.find((item, index) => index === indexTarget);

  const defineArrayAnswers = () => {
    const tmpIndex = Math.floor(Math.random() * 4); //API 1 correct and 3 incorrect answers (4)
    const correctAnswer = selectedItem.correct_answer;
    const incorrectAnswers = selectedItem.incorrect_answers;

    const concatenateAnswer = [
      ...incorrectAnswers.slice(0, tmpIndex),
      correctAnswer,
      ...incorrectAnswers.slice(tmpIndex),
    ];
    return concatenateAnswer;
  };

  if (modal) {
    console.log("modal state:", modal);
    return <Modal />;
  }

  return (
    <div className="quiz_container col-11 col-md-10 col-lg-10">
      <div className="quiz_content d-flex flex-column">
        <div className="show_answers">
          <p className="true_answers">
            {`Correct answers: ${correct}/${questions.length}`}
          </p>
        </div>
        {selectedItem && (
          <div className="show_quiz">
            <p className="selected_query">{selectedItem.question}</p>
            <ul className="suggest">
              {defineArrayAnswers().map((item, index) => {
                return (
                  <li key={index} className="sample">
                    <button
                      value={item}
                      className="suggestion"
                      onClick={retrieveAnswer}
                    >
                      {item}
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
      <div className="go_to_next d-flex">
        <input
          type="button"
          value="Next Questions"
          className="next_questions"
          onClick={nextQuestions}
        />
      </div>
    </div>
  );
}

export default Quiz;
