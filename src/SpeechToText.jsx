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
    translateText(finalTranscript); // Translate the text after recording stops
    resetTranscript();
  };

  const translateText = async (text) => {
    try {
      const response = await fetch('http://localhost:3000/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text, to: 'ja' }),
      });
      if (!response.ok) {
        throw new Error('Translation failed');
      }
      const data = await response.json();
      setTranscript(data.translation);
    } catch (error) {
      console.error('Translation error:', error);
      setTranscript('Translation failed');
    }
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
