import "./Loading.css";

function Loading() {
  return (
    <div className="spinner_container">
      <div className="our_spinner  spinner-border text-dark" role="status">
        <span className="sr-only">Loading ...</span>
      </div>
    </div>
  );
}

export default Loading;
