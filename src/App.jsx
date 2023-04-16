import React, { useState } from "react";
import "./App.css";
import ModalProject from "./ModalProject";

function App() {
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
    const navChange = document.querySelector(".nav-area");
    navChange.classList.toggle("open-nav");
  };

  const modalProject = () => {
    setModal(!modal);
  };
  return (
    <div>
      <div className="modal-area">
        {modal && <ModalProject modal={modalProject} />}
      </div>

      <header>
        <nav className="container flex-container">
          <h1>crowdfund</h1>
          <ul className="nav-area">
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Get Started</a>
            </li>
          </ul>
          <div className="burger-menu" onClick={handleMenu}>
            {menu ? (
              <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M2.404.782l11.314 11.314-2.122 2.122L.282 2.904z" />
                  <path d="M.282 12.096L11.596.782l2.122 2.122L2.404 14.218z" />
                </g>
              </svg>
            ) : (
              <svg width="16" height="15" xmlns="http://www.w3.org/2000/svg">
                <g fill="#FFF" fill-rule="evenodd">
                  <path d="M0 0h16v3H0zM0 6h16v3H0zM0 12h16v3H0z" />
                </g>
              </svg>
            )}
          </div>
        </nav>
      </header>

      <main>
        <div className="flex-sections  ">
          <section className="first-section">
            <div className="main-container">
              <div className="master-logo">
                <svg width="56" height="56" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle fill="#000" cx="28" cy="28" r="28" />
                    <g fill-rule="nonzero">
                      <path
                        d="M15.565 28.565a1.93 1.93 0 012.606-.113l.122.113 10.142 10.142a1.93 1.93 0 01-2.606 2.84l-.122-.112-10.142-10.142a1.93 1.93 0 010-2.728z"
                        fill="#444"
                      />
                      <path
                        d="M36.19 17.48c1.006-.996 2.706-.34 2.805 1.026l.005.126v10.736c0 .9-.737 1.629-1.646 1.629a1.64 1.64 0 01-1.642-1.507l-.005-.122v-6.805l-8.043 7.957c-1.006.996-2.707.34-2.806-1.026l-.004-.126v-6.805L16.81 30.52a1.66 1.66 0 01-2.224.095l-.105-.095a1.616 1.616 0 01-.096-2.2l.096-.103L25.336 17.48c1.006-.996 2.707-.34 2.806 1.026l.004.126v6.804l8.043-7.956z"
                        fill="#FFF"
                      />
                    </g>
                  </g>
                </svg>
              </div>
              <h1>Mastercraft Bamboo Monitor Riser</h1>
              <p>
                A beautiful & handcrafted monitor stand to reduce neck and eye
                strain.
              </p>

              <div className="first-section-flex">
                <button onClick={modalProject}>Back this project</button>
                <div className="flex-bookmark">
                  <div>
                    <svg
                      width="56"
                      height="56"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g fill="none" fill-rule="evenodd">
                        <circle fill="#2F2F2F" cx="28" cy="28" r="28" />
                        <path fill="#B1B1B1" d="M23 19v18l5-5.058L33 37V19z" />
                      </g>
                    </svg>
                  </div>
                  <h4>Bookmark</h4>
                </div>
              </div>
            </div>
          </section>

          <section className="second-section">
            <div className="main-container">
              <div className="flex-numbers">
                <div className="item-numbers">
                  <h1>$89,914</h1>
                  <p>of $100,000 backed</p>
                </div>
                <div className="borders"></div>
                <div className="border-numbers item-numbers">
                  <h1>5,000</h1>
                  <p>total backers</p>
                </div>
                <div className="borders"></div>
                <div className="item-numbers">
                  <h1>56</h1>
                  <p>days left</p>
                </div>
              </div>
              <div className="progress-bar">
                <div className="main-progress"></div>
              </div>
            </div>
          </section>

          <section className="third-section">
            <div className="main-container">
              <div className="about-section">
                <h3>About this project</h3>
                <p>
                  The MasterCraft Bamboo Monitor Riser is a sturdy and stylish
                  platform that elevates <b />
                  your screen to a more comfortable viewing height. Placing your
                  monitor at eye level has
                  <b />
                  the potential to improve your posture and make you more
                  comfortable while at work,
                  <b />
                  helping you stay focused on the task at hand.
                </p>
                <p>
                  Featuring artisan craftmanship, the simplicity of design
                  creates extra desk space below
                  <b />
                  your computer to allow notepads, pens, and USB sticks to be
                  stored under the stand.
                </p>
              </div>

              <div className="cards-section">
                <div className="third-section-card">
                  <div className="flex-cards">
                    <h3>Bamboo Stand</h3>
                    <h4>Pledge $25 or more</h4>
                  </div>
                  <p>
                    You get an ergonomic stand made of natural bamboo. You've
                    helped us lunch
                    <b />
                    our promotional campaign, and you'll be added to a special
                    Backer member list.
                  </p>
                  <div className="second-flex-cards">
                    <div className="number-left">
                      <span className="span-one">101</span>
                      <span className="span-two">left</span>
                    </div>
                    <button className="select-rewards">Select Reward</button>
                  </div>
                </div>
                <div
                  className="third-section-card"
                  style={{ marginTop: "25px" }}
                >
                  <div className="flex-cards">
                    <h3>Black Edition Stand</h3>
                    <h4>Pledge $75 or more</h4>
                  </div>
                  <p>
                    You get a Black Edition computer stand and a personal thank
                    You'll
                    <b />
                    be added to our Backer member list. Shipping is included
                  </p>
                  <div className="second-flex-cards">
                    <div className="number-left">
                      <span className="span-one">64</span>
                      <span className="span-two">left</span>
                    </div>
                    <button className="select-rewards">Select Reward</button>
                  </div>
                </div>
                <div className="out-stock" style={{ marginTop: "25px" }}>
                  <div className="flex-cards">
                    <h3>Mahogany Special Edition</h3>
                    <h4>Pledge $75 or more</h4>
                  </div>
                  <p>
                    You get two Mahogany Special Edition Stand, a Backer T-shirt
                    and a personal {""}
                    <b />
                    thank you. You'll be added to our Backer member list.
                    Shipping is included.
                  </p>
                  <div className="second-flex-cards">
                    <div className="number-left">
                      <span className="span-one">200</span>
                      <span className="span-two">left</span>
                    </div>
                    <button
                      className="select-rewards"
                      style={{ background: "#A8A8A8" }}
                    >
                      Out of Stock
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;
