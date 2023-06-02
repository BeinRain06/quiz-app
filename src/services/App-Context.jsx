import { createContext, useState } from "react";
import axios from "axios";

export const AppContext = createContext();

function AppProvider(props) {
  const [correct, setCorrect] = useState(0);
  const [isLoading, setLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [indexTarget, setIndexTarget] = useState(0);
  const [error, setError] = useState("");
  const [answer, setAnswer] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [resumeArray, setResumeArray] = useState([]);
  //win or loose message
  const [winOrLoose, setWinOrLoose] = useState(false);
  const [modal, setModal] = useState(false);
  const [quiz, setQuiz] = useState({
    amount: 10,
    category: "sports",
    difficulty: "easy",
  });

  const table = {
    sports: 21,
    history: 23,
    science: 18,
    art: 25,
    entertainment: 11,
  };

  const fetchQuery = async (url) => {
    try {
      setLoading(true);
      setIsStarted(true);

      const response = await axios.get(url);
      const data = response.data;
      console.log(data.response_code);
      console.log(data.results);
      if (data) {
        setQuestions(() => data.results);
        console.log(questions);
        setLoading(false);
      }
    } catch (err) {
      setLoading(false);
      setIsStarted(false);
      setError(
        "something went wrong. code error :",
        "Trivia API",
        "see console"
      );
      setTimeout(() => {
        setError("");
      }, 3000);
      console.log("error while fetching:", err);
    }
  };

  const handleChangeInput = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setQuiz(() => ({ ...quiz, [name]: value }));
  };

  const handleOnStart = () => {
    const { amount, category, difficulty } = quiz;
    const url = `https://opentdb.com/api.php?amount=${amount}&category=${table[category]}&difficulty=${difficulty}&type=multiple`;

    fetchQuery(url);
  };

  const nextQuestions = () => {
    const percentage = (correct / questions.length) * 100;

    if (indexTarget < questions.length) {
      setIndexTarget(indexTarget + 1);
    } else {
      if (percentage > 50) {
        setWinOrLoose(true);
      } else {
        setWinOrLoose(false);
      }
      setIndexTarget(0);
      setModal(true);
    }
  };

  const retrieveAnswer = (e) => {
    e.preventDefault();

    const value = e.target.value;

    const queryBox = questions.find((item, index) => index === indexTarget);

    const correctAnswer = queryBox.correct_answer;

    if (value === correctAnswer) {
      setCorrect(() => correct + 1);
      setResumeArray(() => [
        ...resumeArray,
        (resumeArray[indexTarget] = {
          order: indexTarget + 1,
          question: queryBox.question,
          answer: queryBox.correct_answer,
          right: true,
        }),
      ]);
    } else {
      setResumeArray(() => [
        ...resumeArray,
        (resumeArray[indexTarget] = {
          order: indexTarget + 1,
          question: queryBox.question,
          answer: queryBox.correct_answer,
          right: false,
        }),
      ]);
    }

    nextQuestions();
  };

  const playAgain = () => {
    setIsStarted(false);
    setCorrect(0);
    setQuiz({
      amount: 10,
      category: "sports",
      difficulty: "easy",
    });
    setShowResume(false);
  };

  const recordGame = () => {
    setShowResume(true);
  };

  const contextValue = {
    correct,
    isLoading,
    isStarted,
    questions,
    indexTarget,
    error,
    showResume,
    resumeArray,
    winOrLoose,
    modal,
    quiz,
    answer,
    handleChangeInput,
    handleOnStart,
    nextQuestions,
    retrieveAnswer,
    recordGame,
    setAnswer,
    playAgain,
  };
  return (
    <AppContext.Provider value={contextValue}>
      {props.children}
    </AppContext.Provider>
  );
}

export default AppProvider;
