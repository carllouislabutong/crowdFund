import React, { useState } from "react";
import "./App.css";

function ModalProject({ modal }) {
  const [ChangeBorder, setChangeBorder] = useState(false);
  const [secondChangeBorder, setSecondChangeBorder] = useState(false);
  const [thirdChangeBorder, setThirdChangeBorder] = useState(false);

  const handleBorderColor = () => {
    setChangeBorder(!ChangeBorder);
  };

  const handleSecondBorderColor = () => {
    setSecondChangeBorder(!secondChangeBorder);
  };
  const handleThirdBorderColor = () => {
    setThirdChangeBorder(!thirdChangeBorder);
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <div className="modal-header">
          <div className="flex-header">
            <h1>Back this Project</h1>
            <div onClick={modal}>
              <svg width="15" height="15" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M11.314 0l2.828 2.828L9.9 7.071l4.243 4.243-2.828 2.828L7.07 9.9l-4.243 4.243L0 11.314 4.242 7.07 0 2.828 2.828 0l4.243 4.242L11.314 0z"
                  fill="#000"
                  fill-rule="evenodd"
                  opacity=".4"
                />
              </svg>
            </div>
          </div>
          <p>
            Want to support us on bringing Master Craft Bamboo Monitor Riser out
            in the world?
          </p>
        </div>

        <section
          className="first-modal-section"
          style={
            ChangeBorder
              ? { border: "3px solid hsl(176, 50%, 47%)" }
              : { border: "2px solid rgb(175, 162, 162)" }
          }
        >
          <div className="first-flex-modal">
            <label htmlFor="first-checkbox">
              <h1
                style={
                  ChangeBorder
                    ? { backgroundColor: " hsl(176, 50%, 47%)" }
                    : { backgroundColor: "white" }
                }
              ></h1>
            </label>
            <input
              type="checkbox"
              onClick={handleBorderColor}
              id="first-checkbox"
              style={{ display: "none" }}
            />
            <div>
              <h1>Pledge with no Reward</h1>
              <p>
                Choose to support us without a reward if you simply believe in
                our project. As a <br />
                backer, you will be signed up to receive product updates via
                email.
              </p>
            </div>
          </div>
        </section>

        <section
          className="second-modal-section"
          style={
            secondChangeBorder
              ? { border: "3px solid hsl(176, 50%, 47%)" }
              : { border: "2px solid rgb(175, 162, 162)" }
          }
        >
          <div className="second-flex-modal">
            <div className="padding-area">
              <div className="flex-title-pledge">
                <div style={{ display: "flex" }} className="hero-section-modal">
                  <label htmlFor="second-checkbox">
                    <h1
                      style={
                        secondChangeBorder
                          ? { backgroundColor: " hsl(176, 50%, 47%)" }
                          : { backgroundColor: "white" }
                      }
                    ></h1>
                  </label>
                  <input
                    type="checkbox"
                    onClick={handleSecondBorderColor}
                    id="second-checkbox"
                    style={{ display: "none" }}
                  />
                  <div
                    style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
                  >
                    <h1 className="grow-flex">Bamboo Stand</h1>
                    <h3 className="grow-flex">Pledge $25 or more</h3>
                  </div>
                </div>
                <h4 className="grow-flex">
                  101{" "}
                  <span
                    style={{
                      opacity: ".5",
                      fontSize: ".9rem",
                    }}
                  >
                    left
                  </span>
                </h4>
              </div>
              <p>
                You get a Black Special Edition computer stand and a personal
                thank you. <br />
                You'll be added to our Backer member list. Shipping is included.{" "}
              </p>
            </div>
            <hr />

            <div className="padding-area ">
              <div className="lower-flex-sections">
                <div>
                  <input
                    type="text"
                    placeholder="Enter your Pledge"
                    disabled
                    style={{ textAlign: "center" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    gap: "5px",
                    alignItems: "center",
                    marginTop: "10px",
                  }}
                >
                  <h1>
                    <span style={{ opacity: ".5", margin: "10px" }}>$</span>
                    25
                  </h1>
                  <button>Continue</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={
            thirdChangeBorder
              ? { border: "3px solid hsl(176, 50%, 47%)" }
              : { border: "2px solid rgb(175, 162, 162)" }
          }
          className="third-section-bottom"
        >
          <div>
            <div className="third-section-flex">
              <label htmlFor="third-checkbox">
                <h1
                  style={
                    thirdChangeBorder
                      ? { backgroundColor: " hsl(176, 50%, 47%)" }
                      : { backgroundColor: "white" }
                  }
                ></h1>
              </label>
              <input
                type="checkbox"
                onClick={handleThirdBorderColor}
                id="third-checkbox"
                style={{ display: "none" }}
              />
              <h1>Black Edition</h1>
              <h2>Pledge $75 or more</h2>
              <h3>
                64{" "}
                <span
                  style={{
                    opacity: ".5",
                    fontSize: ".9rem",
                  }}
                >
                  left
                </span>
              </h3>
            </div>
            <p>
              You get a Black Special Edition computer stand and a personal
              thank you. <br />
              You'll be added to our member backer list. Shipping is included.
            </p>
          </div>
        </section>

        <section className="third-section-bottom" style={{ opacity: ".6" }}>
          <div>
            <div className="third-section-flex">
              <label htmlFor="third-checkbox"></label>
              <input
                type="checkbox"
                onClick={handleThirdBorderColor}
                id="third-checkbox"
                style={{ display: "none" }}
              />
              <h1>Mahogany Special Edition</h1>
              <h2>Pledge $200 or more</h2>
              <h3>
                0{" "}
                <span
                  style={{
                    opacity: ".5",
                    fontSize: ".9rem",
                  }}
                >
                  left
                </span>
              </h3>
            </div>
            <p>
              You get two Special Edition Mahogany a Backer T-shirt, and a
              personal <br />
              thank you. You'll be added to our Backer member list. Shipping is
              included.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}

export default ModalProject;
