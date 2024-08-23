import React from 'react';

const Footer = () => {
  return (
    <div>
      <div>
        <div>
          <div>
            <h2>Have a question about Tyres?</h2>
            <p>Get an answer in 24 hours from our experts.</p>

            <div>
              <div>
                <div>
                  <p className="invalid-question">Please Enter Valid Question.</p>
                  <div className="question_thank">
                    <p>Thank you for asking a question, we will review and provide you with an expert answer.</p>
                  </div>
                </div>
                <div></div>
              </div>
            </div>
            <div>
              <form action="submit" target="_top" onSubmit={() => false} autoComplete="off">
                <input type="hidden" name="askQuestion_id" id="askQuestion_id" />
                <div>
                  <div>
                    <input 
                      placeholder="Ask or search your question" 
                      name="askQuestion_des" 
                      id="askquestions" 
                      autoComplete="off" 
                      spellCheck="false" 
                    />
                  </div>
                  <div>
                    <button type="submit">Ask</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div>
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
    </div>
  );
}

export default Footer;
