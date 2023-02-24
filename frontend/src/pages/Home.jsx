import { useState, useEffect, useRef } from "react";

function Home({ setLogin }) {
  const [img, setImg] = useState("");
  const [user, setUser] = useState();
  const [images, setImages] = useState([]);
  // const [tempimages, setTempimages] = useState([]);
  const tempimages = useRef();
  tempimages.current = [];
  function arrayBufferToBase64(buffer) {
    var binary = "";
    var bytes = [].slice.call(new Uint8Array(buffer));
    bytes.forEach((b) => (binary += String.fromCharCode(b)));
    return window.btoa(binary);
  }

  const handleClick = async () => {
    tempimages.current = [];
    const response = await fetch("http://localhost:3000/image");
    const data = await response.json();
    const userrespose = await fetch("http://localhost:3000/user");
    const userdata = await userrespose.json();
    setUser(userdata);

    data.map((i) => {
      var base64Flag = "data:image/jpeg;base64,";
      var imageStr = arrayBufferToBase64(i.img.data.data);
      setImg(base64Flag + imageStr);
      const date = new Date(i.createdAt);
      const options = { timeZone: "Asia/Kolkata" };
      const formattedDate = date.toLocaleString("en-US", options);
      // setTempimages((prevstate) => [
      //   ...prevstate,
      //   { img: base64Flag + imageStr, date: formattedDate },
      // ]);
      tempimages.current.push({
        img: base64Flag + imageStr,
        date: formattedDate,
      });
    });
    console.log(tempimages.current.length);
    setImages(tempimages.current);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      handleClick();
    }, 80000);
    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    setLogin(null);
  };
  return (
    <div className="h-screen w-screen flex flex-col">
      <div className="flex flex-row justify-around h-[20%] bg-[#0198A5] items-center py-3">
        <div className="flex items-center text-xl">
          <h1>Name :</h1>
          <h1>{user ? user.name : ""}</h1>
        </div>
        <div className="flex items-center text-xl">
          <h1>Email :</h1>
          <h1>{user ? user.email : ""}</h1>
        </div>
        <div className="flex items-center text-xl">
          <h1>Invite Code :</h1>

          <h1>{user ? user.invitecode : ""}</h1>
        </div>
        <button
          onClick={handleClick}
          className="px-5 h-10 bg-blue-500 rounded-lg"
        >
          Get New Images
        </button>
        <button
          onClick={handleLogout}
          className="px-5 h-10 bg-red-400 rounded-lg"
        >
          Logout
        </button>
      </div>
      <div>
        <div className="flex flex-wrap gap-5">
          {images &&
            images.map((image) => (
              <div className="border border-blue-400 rounded-lg">
                <h1 className="text-center">{image.date}</h1>
                <img src={image.img} />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
