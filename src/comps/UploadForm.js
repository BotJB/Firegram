import React,{useState} from 'react'
import ProgressBar from './ProgressBar';

const UploadForm = () => {
    //useState to save the selected file
        const [file,setFile]=useState(null);
        //To specify the types of images that can be stored
        const types=['image/jpeg','image/png']
        //To set the error 
        const [error,setError]=useState(null)
        //Comment to select the file
    const handleSubmit=(e)=>{ 
    let selected=e.target.files[0]
    if(selected && types.includes(selected.type)){
        setFile(selected)
        console.log(selected)
    }
    else{
        setFile(null)
        setError("Please Select the the image type");
    }
    
    }
    return (
       <form >
           <input type="file" onChange={handleSubmit}/>
    <div className="output">
{error && <div>{error}</div>}
{file &&<div>{file.name}</div>}
{file && <ProgressBar file={file} setFile={setFile}/>}
        
    </div>
       </form>
       
    )
}

export default UploadForm
