import React from "react";
import { useState, useEffect } from "react";

const App = () => {
  const [image, setImage] = useState("");
  const [response, setResponse] = useState([]);


//fetchImageRequest  function will get the images from the api and store those values in the response state  
  const fetchImageRequest = async () => {
    const data = await fetch(
      `https://api.unsplash.com/search/photos?page=1&query=${image}&client_id=PNRP0FIbuNLJ51f9XpGQXUdoLUVKBHfIoSMTJfGu-_k&per_page=9`
    );
    const dataJ = await data.json();
    const result = dataJ.results;
    console.log(result);
    setResponse(result);
  };


  //Once the submit button is clicked, Submit function will call the fetchImageRequest  function
   const Submit = () => {
    fetchImageRequest();
    setImage("");
    console.log("search");
   
  }


  return (
    <>
      <div align="center">
            <input
              type="text"
              placeholder="...Search Images..."
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
            <button
              type="submit"
              onClick={Submit}
            >
              Search
            </button>
      </div>

      <div>
        {response.map((val) => {
          return (
            <img  key={val.id} src={val.urls.small}/>
          );
        })}
      </div>;
    </>
  );
};
export default App;