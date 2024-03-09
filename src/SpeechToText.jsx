import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  const handleListen = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    setTranscript(finalTranscript);
    resetTranscript();
  };

  return (
    <div className='box'>
      <button className="btn"onClick={handleListen}>Start Listening</button>
      <button className="glow-on-hover" onClick={stopListening}>Stop Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
