import React, {useState} from 'react';
import ReactDOM from "react-dom";

// TODO: keep code dry and move this into a declaration
declare interface Props{
    multiple?: true | false,
    onDone: Function,
}

const FileBase = (props : Props) =>{
    const [files, fileState] = useState({});
    const handleChange = (e: any) =>{

    let files = e.target.files;

    // Process each file
    var allFiles : any = [];
    for (var i = 0; i < files.length; i++) {

      let file = files[i];

      let reader = new FileReader();

      // Convert the file to base64 text
      reader.readAsDataURL(file);

      reader.onload = () => {

        let fileInfo = {
          name: file.name,
          type: file.type,
          size: Math.round(file.size / 1000) + ' kB',
          base64: reader.result,
          file: file,
        };

        allFiles.push(fileInfo);

        if(allFiles.length === files.length){
          if(props.multiple) props.onDone(allFiles);
          else props.onDone(allFiles[0]);
        }

      } 

    } 
    }
    return (
      <input
        type="file"
        onChange={ (e) => handleChange(e) }
        multiple={ props.multiple } />
    );
}
 export default FileBase;
