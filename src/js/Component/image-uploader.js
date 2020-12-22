import React, { useState } from "react";
import { ReactComponent as Logo } from "../../img/image.svg";

export const ImageUploader = () => {
  const [highlighted, setHighlighted] = useState(false);
  /* const [image, setImage] = useState([]);
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState('getUpload')
  const [errorMessage, setErrorMessage] = useState('') */

  /* const uploadimage = async e => {
    const files = e.target.filesconst 
    const data = new FormData()
    data.append('file', files[0])
    setLoading(true)
    
  };
 */
  /* const content = () => {
    switch(progress){
      case 'getUpload':
        return <div>Upload your image</div>
      case 'uploading':
        return <div>Uploading</div>
      case 'uploaded':
        return <div>Uoloaded Successfully!</div>
      case 'uploadError':
        return (
          <>
            <div>Error message = {errorMessage}</div>
            <div>Upload your image</div>
          </>
        )
    }
  }; */

  return (
    <div className="md:container md:mx-auto justify-center inline-flex items-center">
      <div className="box-border md:box-content h-50 w-50 border font-medium rounded-lg m-8 p-2 bg-white ">
        <div className="text-center my-4">Upload your image</div>
        <p className="text-xs text-gray-400 text-center ">
          File should be jpeg, png...
        </p>
        <div
          className={`box-border md:box-content font-medium rounded-lg m-8 p-2 flex flex-col place-items-center border-dashed border-2  ${
            highlighted
              ? "border-green-600 bg-green-100"
              : "border-blue-300 bg-blue-50"
          }`}
          onDragEnter={() => {
            setHighlighted(true);
          }}
          onDragLeave={() => {
            setHighlighted(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setHighlighted(false);
            console.log(e.dataTransfer.files);
            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === "image/png")
              .forEach((file) => {
                console.log(file);
              });
          }}
        >
          <br />
          <Logo className="object-none" />
          <br />
          <p className="text-center text-gray-400">
            Drag & Drop your image here
          </p>
          {/* <ImageUploader
            key='image-uploader'
            withIcon={true}
            singleImage={true}
            withPreview={true}
            label='Maximum size file: 5MB'
            buttonText='Choose a file'
          >

          </ImageUploader> */}
          <br />
        </div>
        <p className="text-center text-gray-400">Or</p>
        <div className="box md:box-content flex justify-center">    
          <input className="text-white text-sm bg-blue-500 rounded-lg py-2 px-4 m-4" type="submit" value="Choose a file" />
        </div>
      </div>

      
    </div>
  );
};
