import Head from 'next/head';
import { useState } from 'react';

const Home = () => {

  const [userInput, setUserInput] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    console.log(userInput)
    // const response = await fetch('/api/generate', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({ userInput }),
    // });

    // const data = await response.json();
    // const { output } = data;
    // console.log("OpenAI replied...", output.text)

    // setApiOutput(`${output.text}`);
    setApiOutput("Hi [Colleague],\n\nI hope this message finds you well. My name is [Your Name] and I am a member of the [Team Name] team at [Company Name].\n\nI am reaching out to introduce myself and to connect with you regarding a project we are currently working on. Our team is responsible for revamping the BYJU's Math Concept Pages, and we are keen to ensure that the pages are optimized for search engines.\n\nAs a colleague with expertise in SEO, we believe that you would be a valuable resource to consult with on this project. Would you be available to schedule a call to discuss the SEO aspects of this project in more detail?\n\nI look forward to the opportunity to collaborate with you and to learn from your experience.\n\nBest regards,\n[Your Name]");
    setIsGenerating(false);
  }

  const onUserChangedText = (event) => {
    setUserInput(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>GPT-3 Message Writer</title>
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>AI Professional Message Writer</h1>
          </div>
          <div className="header-subtitle">
            <h2>Because, how you say it is more important than what you say!</h2>
          </div>
          <div className="header-subtitle">
            <h2>Use the tool below to generate professional message for any scenario in seconds!</h2>
          </div>

          <div className="prompt-container">
            <textarea 
            placeholder="start typing here" 
            className="prompt-box" 
            value={userInput}
            onChange={onUserChangedText}/>
            
            <div className="prompt-buttons">
              <a
                className={isGenerating ? 'generate-button loading' : 'generate-button'}
                onClick={callGenerateEndpoint}
              >
                <div className="generate">
                {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
                </div>
              </a>
            </div>

            {apiOutput && (
              <div className="output">
                <div className="output-header-container">
                  <div className="output-header">
                    <h3>Output</h3>
                  </div>
                </div>
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
          </div>
          </div>

        </div>
      </div>
  );
};

export default Home;
