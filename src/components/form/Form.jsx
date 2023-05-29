import "./Form.css";

function Form() {
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
              value="10"
            />
          </div>
          <div className="form_control">
            <label htmlFor="category">Category</label>
            <select name="category" className="input_form">
              <option value="sports">sports</option>
              <option value="history">history</option>
              <option value="science">science</option>
              <option value="art">art</option>
              <option value="entertainment">entertainment</option>
            </select>
          </div>
          <div className="form_control">
            <label htmlFor="difficulty">Difficulty</label>
            <select name="difficulty" className="input_form">
              <option value="sports">easy</option>
              <option value="history">medium</option>
              <option value="science">difficult</option>
            </select>
          </div>
          <button type="submit" className="btn_submit">
            start
          </button>
        </form>
      </div>
    </div>
  );
}
export default Form;
