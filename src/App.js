import './App.css';
import {useState} from "react";
import ReactQuill, {Quill} from "react-quill";
import ImageResize from 'quill-image-resize-module-react';
import 'react-quill/dist/quill.snow.css'

const toolbarOptions = [
    ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    ['blockquote', 'code-block'],
    [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    [{ 'align': [] }],
    ['link', 'image'],
    ['imageResize']
];
function App() {
    Quill.register('modules/imageResize', ImageResize);
    const [convertedText, setConvertedText] = useState("");

  return (
    <div className="App">
      <header className="App-header">
          <div>
              <ReactQuill
                  modules={{toolbar : {container : toolbarOptions}, imageResize: {
                          parchment: Quill.import('parchment'),
                          modules: ['Resize', 'DisplaySize']
                      }}}
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
