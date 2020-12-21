import React, {useState} from "react";
import './App.css';
import {ReactComponent as Logo} from './image.svg';

function App() {
  const [highlighted, setHighlighted] = useState(false);
  const [contacts, setContacts] = useState([]);

  return (
    <div className="md:container md:mx-auto justify-center inline-flex items-center">

      <div className="box-border md:box-content h-50 w-50 border font-medium rounded-lg m-8 p-2 bg-white ">
        <h3 className="text-center my-4">Upload your image</h3>
        <p className="text-xs text-gray-400 text-center ">File should be jpeg, png...</p>
        <div 
        className={`box-border md:box-content font-medium rounded-lg m-8 p-2 flex flex-col place-items-center border-dashed border-2  ${highlighted ? 'border-green-600 bg-green-100' : 'border-blue-300 bg-blue-50'}`}
        onDragEnter={() => {
          setHighlighted(true);
        }}
        onDragLeave={() =>{
          setHighlighted(false);
        }}
        onDragOver={(e) => {
          e.preventDefault();
        }}
        onDrop={(e) => {
          e.preventDefault();
          setHighlighted(false);
          console.log(e.dataTransfer.files);
          Array.from(e.dataTransfer.files).filter(
            (file) => file.type === "image/png"
          ).forEach((file) => {console.log(file)});
        }}
        >
          <br/>
          <Logo className="object-none"/>
          <br/>
          <p className="text-center text-gray-400">Drag & Drop your image here</p>
          <br/>
        </div>
        <p className="text-center text-gray-400">Or</p>
        <div className="box md:box-content flex justify-center">
        <button className="text-white text-sm bg-blue-500 rounded-lg py-2 px-4 m-4">Choose a file</button>
        </div>
        
      </div>   
      
      <ul>
        {contacts.map(contact => <li key={contact.email}>
          <strong>{contact.name}</strong> : {contact.email}
        </li>)}
      </ul>

    </div>

   
  );
}

export default App;
