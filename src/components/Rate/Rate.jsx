import Star from "/images/icon-star.svg";
import "./rate.css";

export default function Rate() {
  let buttons = [1, 2, 3, 4, 5];
  return (
    <>
      <div className="rate-container">
        <div className="img-container">
          <img src={Star} alt="icon of star" />
        </div>

        <h1>How did we do?</h1>
        <p className="rate-text">
          Please let us know how we did with your support request. All feedback
          is appreciated to help us improve our offering!
        </p>
        <div id="btns-container">
          {buttons.map((button) => (
            <button className="rate">{button}</button>
          ))}
        </div>

        <button id="submit">Submit</button>
      </div>
    </>
  );
}
