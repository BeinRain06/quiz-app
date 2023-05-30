import "./Form.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";
import Loading from "../loading/Loading";
import Quiz from "../quiz/Quiz";

function Form() {
  const {
    quiz,
    handleChangeInput,
    handleOnStart,
    isLoading,
    isStarted,
    error,
  } = useContext(AppContext);

  if (isLoading) {
    return <Loading />;
  }

  if (isStarted) {
    return <Quiz />;
  }

  return (
    <div className="form_container row col-10 col-md-4">
      <div className="form_content d-flex flex-center">
        <h1 className="welcome_title">Setup Quiz</h1>
        <form className="wrap_form">
          <div className="form_control">
            <label htmlFor="amount">Number of Questions</label>
            <input
              type="number"
              name="amount"
              className="input_form"
              value={quiz.amount}
            />
          </div>
          <div className="form_control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              className="input_form"
              onClick={handleChangeInput}
            >
              <option value="sports" selected>
                sports
              </option>
              <option value="history">history</option>
              <option value="science">science</option>
              <option value="art">art</option>
              <option value="entertainment">entertainment</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="difficulty">Difficulty</label>
            <select
              name="difficulty"
              className="input_form"
              onClick={handleChangeInput}
            >
              <option value="sports" selected>
                easy
              </option>
              <option value="history">medium</option>
              <option value="science">difficult</option>
            </select>
          </div>
          <button type="button" className="btn_submit" onClick={handleOnStart}>
            start
          </button>
          <div className="error_msg d-flex flex-center">
            <p className="err_msg">{error !== "" && error} </p>
          </div>
        </form>
      </div>
    </div>
  );
}
export default Form;
