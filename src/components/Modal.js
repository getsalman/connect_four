import React from "react";
import { Link } from "react-router-dom";

const Modal = ({ handleClose, show, name, onChange, data }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  const whoStarts = [
    "Alternative turn",
    "Looser first",
    "Winner first",
    "Always player 01",
    "Always player 02",
  ];
  const numberOfGames = ["2 Games", "3 Games", "5 Games", "10 Games"];

  let arr = name === "whoStarts" ? whoStarts : numberOfGames;
  let header = name === "whoStarts" ? "Who Start" : "Number Of Games";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        <div>
          <div>
            <div className="containerour">
              <h4 className="text">{header}</h4>
            </div>
            {arr.map((item) => {
              return (
                <div className="input-box">
                  <input
                    className="radio-button"
                    type="radio"
                    id={item}
                    name={name}
                    value={item}
                    onChange={onChange}
                  />

                  <label for="huey" className="input-box-text">
                    {item}
                  </label>
                </div>
              );
            })}

            <hr className="modalhr" />
            <Link to="/2player" onClick={handleClose}>
              <button type="button" className="cancel-background">
                CANCEL
              </button>
            </Link>

            <button
              className="ok-text"
              type="button"
              className="ok-background"
              onClick={handleClose}
            >
              OK
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
