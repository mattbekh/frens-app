import React, { useState, useEffect } from 'react'
import {useDropzone} from 'react-dropzone';
import './SocialMedia.css'

function SocialMedia() {
    const [data, setData] = useState({
        facebook: 'facebook',
        instagram: 'instagram'
    });
    const handleChange = (e) => {
  setData({
    ...data,

    // Trimming any whitespace
    [e.target.name]: e.target.value.trim()
  });
};

    const handleSubmit = (e) => {
    e.preventDefault()
    console.log(data);
    // ... submit to API or something
    setPrint(!print)
    };

     
    const [print, setPrint] = useState(false);
    
    //Cite the code from Dropzone 
    const [files, setFiles] = useState([]);
    const {getRootProps, getInputProps} = useDropzone({
    accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
        })));
      }
    });
    const thumbs = files.map(file => (
    <div className="thumbs" key={file.name}>
      <div className="thumbInner">
        <img src={file.preview}/>
      </div>
    </div>
    ));
    useEffect(() => () => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);
    //Cite the code from Dropzone 


    return (
        <div className="socialMedia">
            <form>
                <h1>Facebook</h1>
                    <input type="text" name="facebook" onChange={handleChange}/>
                    <h1>Instagram</h1>
                    <input  type="text"name="instagram" onChange={handleChange}/>
                    <h1>Photo</h1>
                    {/* cite the code from Dropzone */}
                     <section className="container">
                          <div {...getRootProps({className: 'dropzone'})}>
                         <input {...getInputProps()} />
                         <input type="text" value="Drop Here"/>
                          </div>
                         <aside className="thumbsContainer">{thumbs}</aside>
                    </section>
                    {/* cite the code from Dropzone */}
                    {/* <input type="submit" onClick={handleSubmit}/> */}
                    <button onClick={handleSubmit}>Submit</button>
                    {print && 
                     <div>
                        <h1>{data.facebook}</h1>
                        <h1>{data.instagram}</h1>
                    </div>}
                   
                </form>
        </div>
    )
}

export default SocialMedia
