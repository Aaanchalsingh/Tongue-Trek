import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import translate from '@vitalets/google-translate-api';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  const handleListen = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
    translate(finalTranscript, { to: 'ja' }).then((response) => {
      setTranscript(response.text);
    }).catch((error) => {
      console.error('Translation error:', error);
    });
    resetTranscript();
  };

  return (
    <div className='box'>
      <button className="btn text-white" onClick={handleListen}>Start Listening</button>
      <button className="glow-on-hover" onClick={stopListening}>Stop Listening</button>
      <p>{transcript}</p>
    </div>
  );
};

export default SpeechToText;
