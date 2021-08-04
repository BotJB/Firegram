import React from 'react'
import useFireStore from '../hooks/useFireStore'

const ImageDisp = ({setSelected}) => {
    const {docs}=useFireStore('images')
 
    console.log(docs)
    return (
        <div className="img-grid">
            {docs && docs.map((doc)=>{
                
     return(
                    <div className="img-wrap" key={doc.id}
                    onClick={()=>setSelected(doc.url)}>
<img src={doc.url} alt="Upload your image here" />
                </div>
     )
            })}
        </div>
    )
}

export default ImageDisp
