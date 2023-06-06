import "./QueueItem.css";
import { useContext } from "react";
import { AppContext } from "../../services/App-Context";

function QueueItem({ item, id }) {
  const { answer, setAnswer } = useContext(AppContext);

  const handleShowAnswer = () => {
    setAnswer(!answer);
    item.showed = !item.showed;
  };

  return (
    <li key={id} className="answering_side">
      <div className="station_land">
        <span className="station_label">the answer to </span>
        <span className="station_grade">
          {item.right ? (
            <i className="bi bi-plus"></i>
          ) : (
            <i className="bi bi-dash"></i>
          )}
        </span>
      </div>
      <div className="listening_question d-flex">
        <p className="asked_for">{item.question}</p>
        <button className="see_answer" onClick={handleShowAnswer}>
          answer
        </button>

        {item.showed && (
          <div className="bloc_answer">
            <p className="right_answer_was"> {item.answer} </p>
          </div>
        )}
      </div>
    </li>
  );
}

export default QueueItem;
