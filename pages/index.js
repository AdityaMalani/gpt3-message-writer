import Head from 'next/head';
import { useState } from 'react';
import Image from 'next/image'

const Home = () => {

  const [userInputTo, setUserInputTo] = useState('');
  const [userInputContent, setUserInputContent] = useState('');
  const [apiOutput, setApiOutput] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const callGenerateEndpoint = async () => {
    setIsGenerating(true);
    const response = await fetch('/api/generate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ userInputContent, userInputTo }),
    });

    const data = await response.json();
    const { output } = data;

    setApiOutput(`${output.text}`);
    setIsGenerating(false);
  }

  const onUserChangedTextTo = (event) => {
    setUserInputTo(event.target.value);
  };

  const onUserChangedTextContent = (event) => {
    setUserInputContent(event.target.value);
  };

  return (
    <div className="root">
      <Head>
        <title>Free Online AI Email Writer</title>
        <meta name="description" content="Get professional emails written by AI for free in just seconds with our Online AI Email Writer. 
          Simply input your desired email content and our AI will generate a polished, professional email that is ready to send. 
          Save time and effort while still maintaining a high level of quality with our AI email writing tool."
          key="desc"
        />
      </Head>
      <div className="container">
        <div className="header">
          <div className="header-title">
            <h1>Write My Email</h1>
          </div>
          <div className="header-subtitle">
            <h2>Write high quality emails using AI for free within seconds!</h2>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="column">
          <div className="prompt-container">
            <p className='label'>
              To:
            </p>
            <textarea 
              placeholder="E.g. Manager, Sales Client, HR, etc." 
              className="prompt-box-to" 
              value={userInputTo}
              onChange={onUserChangedTextTo}/>
              
            <p className='label'>
              Email Content:
            </p>
            <textarea 
              placeholder="E.g. I will be on leave from Jan 1 to Jan 10. I Will ensure progress on my ongoing project is not affected in my absence." 
              className="prompt-box-content" 
              value={userInputContent}
              onChange={onUserChangedTextContent}/>
              
            <div className="prompt-buttons">
              <a
              className={isGenerating ? 'generate-button loading' : 'generate-button'}
              onClick={callGenerateEndpoint}>
                <div className="generate">
                  {isGenerating ? <span className="loader"></span> : <p>Generate</p>}
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className='column'>
          <div className='output-box'>
            {apiOutput && (
              <div className="output">
                <div className="output-content">
                  <p>{apiOutput}</p>
                </div>
              </div>
            )}
          </div>
        </div>
    </div>
    <div className='row'>
      <div className="about-product">
        <h2>How to use?</h2>
        <p>Step 1: Enter whom you want send the email to. Be as detailed as possible while providing this. For eg - 
          "senior memebr from an external team, client who has received a product demo from you earlier, etc."</p>
        <p>Step 2: Enter briefly what message you want to convey. Use bullet points if required.</p>
        <p>Step 3: Click on Generate</p>
      </div>
    </div>
    <div className='row'>
      <div className="about-product">
        <h2>What is Write My Email?</h2>
        <p>
        Effortlessly create professional, effective and grammatically correct emails with this free AI-powered online email writer. 
        Simply provide a few brief points about the message you want to convey, and this GPT-3 powered tool 
        will generate a customized email with a professional subject line and engaging content. Write My Email is the perfect free online tool for busy professionals 
        looking to save time on writing emails or anyone looking to communicate more effectively. 
        Some common use cases include:
        </p>
        <ul>
          <li>Sending a follow-up email after a meeting</li>
          <li>Requesting a favor or additional information</li>
          <li>Responding to a customer inquiry or complaint</li>
          <li>Making a sales pitch or introducing a new product or service</li>
          <li>Creating a personalized email to a potential employer</li>
          <li>Crafting a professional email to a client or colleague</li>
          <li>And many more...</li>
        </ul>
        <p>Try Write My Email now and see the difference it can make in your communication. Because how you say is more important than what you say!</p>
      </div>
    </div>
    <footer>
      Made with&nbsp;   
      <Image
        src="/heart.png"
        width="16"
        height="16"
        alt="heart icon"
      />
      &nbsp;by&nbsp;
      <a href="https://www.adityamalani.xyz/">Aditya Malani</a>
    </footer>
    </div>
  );
};

export default Home;
