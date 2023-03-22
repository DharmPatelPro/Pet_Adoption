

import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);


  useEffect(() => {
    axios
      .get("http://localhost:5000/api/profile/fetchall")
      .then((res) => setData(res.data))
      .catch((err) => console.log(err, "it has an error"));

  });

  return (
    <div className="App">

      {data.map((Data) => {
      // const base64String =  btoa(String.fromCharCode(...new Uint8Array(singleData.img.data.data)))
        return<div> 
          <p>Name:{Data.name}</p>
          <p>Gender:{Data.gender}</p>
          <p>Call at:{Data.contact.phone}</p>
          <img src={`data:image/png;base64,${Data.img}`} alt="hello" width="500" height="500"/></div>
      })}


    
    </div>
  );
}

export default App;
