import React, { useState, useEffect } from "react";

function AudioLevelIndicator() {
  const [audioContext, setAudioContext] = useState(null);
  const [audioStream, setAudioStream] = useState(null);
  const [audioSource, setAudioSource] = useState(null);
  const [analyser, setAnalyser] = useState(null);
  const [dataArray, setDataArray] = useState(null);
  const [maxLevel, setMaxLevel] = useState(0);

  useEffect(() => {
    const initAudio = async () => {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const context = new AudioContext();
      const source = context.createMediaStreamSource(stream);
      const analyser = context.createAnalyser();
      analyser.fftSize = 256;
      const dataArray = new Uint8Array(analyser.frequencyBinCount);
      source.connect(analyser);
      setAudioStream(stream);
      setAudioContext(context);
      setAudioSource(source);
      setAnalyser(analyser);
      setDataArray(dataArray);
    };

    initAudio();
  }, []);

  useEffect(() => {
    const updateMaxLevel = () => {
      if (analyser && dataArray) {
        analyser.getByteFrequencyData(dataArray);
        const max = Math.max(...dataArray);
        const newMaxLevel = Math.max(max / 255, maxLevel * 0.95);
        setMaxLevel(newMaxLevel);
      }
    };

    const intervalId = setInterval(updateMaxLevel, 50);
    return () => clearInterval(intervalId);
  }, [analyser, dataArray, maxLevel]);

  return (
    <div>
      <div>Max level: {maxLevel.toFixed(2)}</div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          height: "20px",
          backgroundColor: "gray",
          borderRadius: "20px",
        }}
      >
        <div
          style={{
            flex: maxLevel,
            height: "100%",
            backgroundColor: "red",
            borderRadius: "20px",
          }}
        />
        <div
          style={{
            flex: 1 - maxLevel,
            height: "100%",
            backgroundColor: "gray",
          }}
        />
      </div>
    </div>
  );
}

export default AudioLevelIndicator;
