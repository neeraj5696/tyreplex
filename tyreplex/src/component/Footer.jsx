import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="mx-5">
      <div className="col-12 shadow-box bg-qna-pink pb-0 rounded-bottom-0 mx-0 mb-0">
        <div className="d-flex flex-column flex-md-row p-4 align-items-center">
          <div className="row flex-fill">
            <h2 className="fs-6 fw-bold mb-1">Have a question about Tyres?</h2>
            <p className="mt-2 text-muted mb-2">
              Get an answer in 24 hours from our experts.
            </p>

            <div className="col-12">
              <div className="row">
                <div className="col-sm-8">
                  <p className="invalid-question d-none">
                    Please Enter Valid Question.
                  </p>
                  <div className="d-none question_thank">
                    <p className="mb-0">
                      Thank you for asking a question, we will review and
                      provide you with an expert answer.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <form
                action="submit"
                target="_top"
                onSubmit={() => false}
                autoComplete="off"
              >
                <input
                  type="hidden"
                  name="askQuestion_id"
                  id="askQuestion_id"
                />
                <div className="d-flex">
                  <div className="col-sm-10 col-12">
                    <input
                      className="form-control scrollbar-near-moon askQuestion_des mb-2"
                      placeholder="Ask or search your question"
                      name="askQuestion_des"
                      id="askquestions"
                      autoComplete="off"
                      spellCheck="false"
                    />
                  </div>
                  <div>
                    <button
                      className="btn theme-btn question_submit_btn py-2 my-0 border-0 d-none"
                      type="submit"
                    >
                      Ask
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="col-sm-4 col-3 px-sm-0 d-flex align-items-center ml-auto justify-content-sm-end mt-4 mt-md-0">
            <span>
              <img
                width="70"
                height="70"
                src="https://cdn.tyreplex.net/themes/moonlight/images/haveQuestion-bg.png?v=600&tr=q-60"
                alt="Have a Question"
              />
            </span>
          </div>
        </div>
      </div>

      <div className=" container-fluid px-3">
        <div className="">
          <div className="row mx-sm-0 bg-white pt-3">
            <div className="footer-left col-md-2 col-12 col-sm-3">
              <img
                src="https://cdn.tyreplex.net/themes/moonlight/images/TP-logo-mbl.png"
                alt="TyrePlex"
                width="92"
                height="22"
              />
              <ul className="d-flex gap-3 no-bullets mt-4">
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "https://www.facebook.com/tyreplex")
                    }
                    title="Facebook"
                    className="btn p-0"
                  >
                    <img
                      src="https://cdn.tyreplex.net/themes/moonlight/images/fb-icon.png"
                      alt="Facebook"
                      width="15"
                      height="22"
                    />
                  </button>
                </li>
                <li>
                  <button
                    type="button"
                    onClick={() =>
                      (window.location.href =
                        "https://www.instagram.com/ontyreplex")
                    }
                    title="Instagram"
                    className="btn p-0"
                  >
                    <img
                      src="https://cdn.tyreplex.net/themes/moonlight/images/insta-icon.png"
                      alt="Instagram"
                      width="23"
                      height="22"
                    />
                  </button>
                </li>
              </ul>
            </div>

            <div class="footer-links footer-widget footer-right col-md-8 col-12 col-sm-9 ms-md-auto ms-sm-auto">
              <div class="row">
                <div class="col-sm-4 col-12">
                  <ul class="flex-column mb-0">
                    <li class="nav-item">Who We Are</li>
                    <li class="nav-item">Are you a Tyre Dealer?</li>
                  </ul>
                </div>
                <div class="col-sm-4 col-12">
                  <ul class="flex-column mb-0">
                    <li class="nav-item">Privacy Policy</li>
                    <li class="nav-item">Terms of use</li>
                  </ul>
                </div>
                <div class="col-sm-4 col-12">
                  <ul class="flex-column mb-0">
                    <li>
                     
                        Contact Us
                     
                    </li>
                    <li class="nav-item">
                     
                       
                        Career
                   
                    </li>
                    <li class="nav-item">
                      
                        Shipping &amp; Return Policy
                    
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="border-top pt-3 text-center">
          <p className="mb-0">
            ©2024 TyrePlex Technologies & Commerce Pvt. Ltd. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
