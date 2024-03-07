import "./result.css";
import Check from "/images/illustration-thank-you.svg";

export default function Result({ rate }) {
  return (
    <>
      <div className="result-container">
        <img src={Check} alt="illustration of terminal, card and check" />
        <p className="result-choice">You selected {rate} out of 5</p>
        <h1 id="thank-you">Thank you!</h1>
        <p className="rate-text result-text">
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>
    </>
  );
}
