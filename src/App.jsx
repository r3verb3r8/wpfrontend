import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [document, setDocument] = useState({});
  const [input, setInput] = useState("");
  useEffect(() => {
    axios
      .get("http://ansible/api/document/202911")
      .then((api) => {
        setDocument(api.data[0]);
        console.log(api.data[0]);
      })
      .catch((err) => console.log(err));
  }, []);
  // Event
  const documentInput = (e) => {
    setInput(e.target.value);
  };
  const searchDocument = () => {
    axios.get(`http://ansible/api/document/${input}`).then((api) => {
      // console.log(api.data[0]);
      setDocument(api.data[0]);
    });
  };

  return (
    <div>
      <div className="search">
        <input onChange={documentInput} type="text" />
        <button onClick={searchDocument}>Search</button>
      </div>
      <div className="document-info">
        <h2>{document.doc_desc}</h2>
        <h3>Ärendenummer: {document.doc_docno}</h3>
        <h3>Riktning: {document.doc_category}</h3>
        <h3>Process: {document.doc_process}</h3>
        <p>Beskrivning: {document.doc_ca_desc}</p>
      </div>
    </div>
  );
}

export default App;
