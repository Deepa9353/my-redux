import { useState } from "react";

const Contect = () => {
  const [result, setResult] = useState("");

  const clickHandler = (event) => {
    setResult(result.concat(event.target.value));
  };

  const clearDisplay = () => {
    setResult("");
  };
  const claculate = () => {
    setResult(eval(result).toString());
  };
  return (
    <div className="clac">
      <input type="text" placeholder="0" id="answer" value={result} />
      <input
        type="button"
        value="9"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="8"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="7"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="6"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="5"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="4"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="3"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="2"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="1"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="0"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="."
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="+"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="-"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="*"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="/"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="%"
        className="clac-btn"
        onClick={clickHandler}
      />
      <input
        type="button"
        value="Clear"
        className="clac-btn btn1"
        onClick={clearDisplay}
      />
      <input
        type="button"
        value="="
        className="clac-btn btn1"
        onClick={claculate}
      />
    </div>
  );
};

export default Contect;
