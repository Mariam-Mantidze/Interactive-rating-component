import Star from "/images/icon-star.svg";
import "./rate.css";
import { useState } from "react";

export default function Rate({ setSubmit, rate, setRate }) {
  let buttons = [1, 2, 3, 4, 5];
  console.log(rate);
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
          {buttons.map((button, index) => (
            <button
              className="rate"
              onClick={() => setRate(button)}
              key={index}
              style={
                rate == button
                  ? {
                      backgroundColor: "rgba(252, 118, 20, 1)",
                      color: "rgba(255, 255, 255, 1)",
                    }
                  : {}
              }>
              {button}
            </button>
          ))}
        </div>

        <button
          id="submit"
          onClick={() => {
            rate && setSubmit(true);
          }}>
          Submit
        </button>
      </div>
    </>
  );
}
