import React, { useEffect } from 'react';

const DragAndDrop = ({handleAction, children}) => {
    const dropRef = React.createRef();
    const handleDrag = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e) => {
        console.log('drop');
        e.preventDefault();
        if (e.dataTransfer.files 
            && e.dataTransfer.files.length > 0) {
            handleAction(e.dataTransfer.files[0]);
            e.dataTransfer.clearData();
        }
    };

    useEffect(() => {
        let div = dropRef.current;
        div.addEventListener('dragover', handleDrag);
        div.addEventListener('drop', handleDrop);
     return () => {
        div.removeEventListener('dragover', handleDrag);
        div.removeEventListener('drop', handleDrop);
    }});

    return (
        <div style={{display: 'inline-block'}} ref={dropRef}>
              {children}
        </div>
    );
};

export default DragAndDrop;