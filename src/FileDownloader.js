import React, { useState } from 'react';
import DragAndDrop from './DragAndDrop';
import './Downloader.css';


const FileDownloader = () => {
    const [images, updateImages] = useState({});

    const addPreview = (newFile) => {
      let preview = new Image();
      preview.src = URL.createObjectURL(newFile);
      preview.width = 100;
      document.getElementById('img-preview').appendChild(preview);
  };

    const handleDropAction = (newFile) => {
        if (newFile.type.split('/')[0] !== 'image') { return } 
        if (Object.keys(images).includes(newFile.name)) { return };
        updateImages(prev => { return {...prev, [newFile.name]: newFile}});
        addPreview(newFile);
      };

    const handleClick = () => {
        Object.values(images).forEach((im) => {
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log(e.target.result);
            };
            reader.readAsDataURL(im);});
        updateImages({});
        document.getElementById('img-preview').innerHTML = '';
    };

    return (
    <div>
      <DragAndDrop handleAction={handleDropAction}>
        <div className='Box'>
        <p>{'drag files here'}</p>
        <span id='img-preview'></span>
        </div>
      </DragAndDrop>
      <br/>
      <button 
        className='Button' 
        onClick={() => handleClick()}>
            {'send'}
        </button>
      </div>
    );

}

export default FileDownloader;