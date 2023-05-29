import "./Modal.css";

function Modal() {
  return (
    <div className="modal_container">
      <div className="modal_content d-flex">
        <div className="modal_message">
          <p className="modal_success">congratulations</p>
          <p className="modal_paragraph">
            <span className="show_percentage">65%</span>of answers was correct
          </p>
        </div>
        <div className="redirect_side">
          <button className="btn_resume">Show Resume</button>
          <button className="btn_restart">Restart</button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
