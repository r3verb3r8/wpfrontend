import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  useEffect(() => {
    axios
      .get("http://ansible/api/document/202911")
      .then((data) => {
        console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h1>FrontEnd</h1>
    </div>
  );
}

export default App;
