import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const { finalTranscript, resetTranscript } = useSpeechRecognition();

  const handleListen = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopListening = async () => {
    SpeechRecognition.stopListening();

    try {
      const response = await fetch('/api/translate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: finalTranscript, to: 'ja' }) // Adjust 'to' language as needed
      });

      if (!response.ok) {
        throw new Error('Translation failed');
      }

      const data = await response.json();
      setTranscript(data.translation);
      resetTranscript();
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
