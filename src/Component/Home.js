import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const Home = () => {
  const startListening = () => SpeechRecognition.startListening({ continuous: true, language: 'en-IN' });
  const { transcript, browserSupportsSpeechRecognition, listening } = useSpeechRecognition();

  if (!browserSupportsSpeechRecognition) {
    return null;
  }

  const handleCopyClick = () => {
    // navigator.clipboard.writeText(transcript);
    console.log(listening);
  };

  return (
    <>
      <div className="container">
        <h2>Speech to Text Converter</h2><br />
        <p>
          Transform your words into written masterpieces with TalkWriter, the ultimate app for effortless and accurate transcription.
        </p>

        <div className="main-content" onClick={() => navigator.clipboard.writeText(transcript)}>
          {transcript}
        </div>

        <div className="btn-style">
          <button className="btn btn-outline-primary btn-sm px-4" onClick={handleCopyClick}>
            Copy
          </button>
          <button className={`btn btn-outline-success btn-sm ${listening ? 'disabled' : ''}`} onClick={startListening}>Start Listening</button>
          <button className={`btn btn-outline-danger btn-sm ${listening ? '' : 'disabled'}`} {...listening ? '' : "disabled"} onClick={SpeechRecognition.stopListening}>Stop Listening</button>
        </div>
      </div>
    </>
  );
};

export default Home;