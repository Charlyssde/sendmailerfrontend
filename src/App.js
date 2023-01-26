import './App.css';
import {useState} from "react";
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css'

function App() {

    const [convertedText, setConvertedText] = useState("Some default content");

  return (
    <div className="App">
      <header className="App-header">
          <div>
              <ReactQuill
                  theme='snow'
                  value={convertedText}
                  onChange={setConvertedText}
                  style={{minHeight: '300px'}}
              />
          </div>
          <button onClick={() => console.log("Value->", convertedText)}></button>
      </header>
    </div>
  );
}

export default App;
