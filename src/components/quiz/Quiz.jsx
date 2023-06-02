import "./Quiz.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";

function Quiz() {
  const { correct, questions, indexTarget, nextQuestions, retrieveAnswer } =
    useContext(AppContext);

  const selectedItem = questions.find((item, index) => index === indexTarget);

  const defineArrayAnswers = () => {
    const tmpIndex = Math.floor(Math.random() * 4); //API 1 correct and 3 incorrect answers (4)
    const correctAnswer = selectedItem.correct_answer;
    const incorrectAnswers = selectedItem.incorrect_answers;
    console.log(incorrectAnswers);
    console.log(correctAnswer);

    const concatenateAnswer = [
      ...incorrectAnswers.slice(0, tmpIndex),
      correctAnswer,
      ...incorrectAnswers.slice(tmpIndex),
    ];
    return concatenateAnswer;
  };

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
        {/* <div className="show_quiz">
          <h1 className="selected_query">
            What was William Frederick Cody Better Known as ?{" "}
          </h1>
          <div className="show_proposal d-flex flex-column">
            <button value="" className="selected_proposal">
              Billy The Kid
            </button>
            <button value="" className="selected_proposal">
              Wild Bill Hickok
            </button>
            <button value="" className="selected_proposal">
              Pawnee Bill
            </button>
            <p className="selected_proposal">Buffalo Bill</p>
          </div>
        </div> */}
      </div>
      <div className="go_to_next d-flex">
        <button
          type="submit"
          className="next_questions"
          onClick={nextQuestions}
        >
          Next Questions
        </button>
      </div>
    </div>
  );
}

export default Quiz;
