import "@pages/newtab/Newtab.css";
import React, { useRef, useEffect } from "react";
import AudioLevelIndicator from "./components/AudioLevelIndicator";

const Newtab = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          if (videoRef.current) {
            videoRef.current.srcObject = stream;
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, []);

  const captureImage = async () => {
    const canvas = document.createElement("canvas");
    canvas.width = videoRef.current.videoWidth;
    canvas.height = videoRef.current.videoHeight;
    canvas
      .getContext("2d")
      .drawImage(videoRef.current, 0, 0, canvas.width, canvas.height);
    const imageSrc = canvas.toDataURL("image/jpeg");
    const imageFile = dataURItoBlob(imageSrc);

    const formData = new FormData();
    formData.append("file", imageFile, "image.jpg");
    try {
      const response = await fetch("http://localhost:3000/image", {
        method: "POST",
        body: formData,
      });
      const json = response.json();
      console.log(json);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      captureImage();
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  const dataURItoBlob = (dataURI) => {
    const byteString = atob(dataURI.split(",")[1]);
    const ab = new ArrayBuffer(byteString.length);
    const ia = new Uint8Array(ab);
    for (let i = 0; i < byteString.length; i++) {
      ia[i] = byteString.charCodeAt(i);
    }
    return new Blob([ab], { type: "image/jpeg" });
  };

  return (
    <div className="h-screen w-screen bg-slate-800 flex justify-center items-center">
      <div className="h-1/2 w-1/2 flex flex-col justify-center items-center">
        <video ref={videoRef} autoPlay className="h-full w-full" />
        <AudioLevelIndicator />
        <button
          onClick={captureImage}
          className="w-100 h-10 bg-green-400 rounded-md active:scale-95"
        >
          Capture
        </button>
      </div>
    </div>
  );
};

export default Newtab;
